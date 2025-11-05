// src/contexts/Context.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  sendEmailVerification,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
} from "firebase/auth";

import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";

import { auth, db } from "../Firebase"; // path to your firebase.js

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null); // Firebase user object
  const [userData, setUserData] = useState(null); // App-level user doc from Firestore
  const [loading, setLoading] = useState(true);

  // Helper: write user document to Firestore when user signs up
  const createUserDoc = async (uid, email, extra = {}) => {
    try {
      const userRef = doc(db, "users", uid);
      const snap = await getDoc(userRef);
      if (!snap.exists()) {
        const payload = {
          email,
          createdAt: serverTimestamp(),
          ...extra,
        };
        await setDoc(userRef, payload);
        setUserData({ uid, ...payload });
      } else {
        setUserData({ uid, ...(snap.data()) });
      }
    } catch (err) {
      console.error("createUserDoc error:", err);
      throw err;
    }
  };

  // Signup with email & password and create Firestore doc
  const signup = async (email, password, extra = {}) => {
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  // Send verification email
  try {
    await sendEmailVerification(cred.user);
  } catch (err) {
    console.error("Email verification failed:", err);
  }

  // Create Firestore user doc
  await createUserDoc(cred.user.uid, email, extra);

  if (extra?.displayName) {
    try {
      await updateProfile(cred.user, { displayName: extra.displayName });
    } catch (err) {
      console.warn("updateProfile failed:", err);
    }
  }

  return cred;
};

  // Login with email/password. rememberMe = true -> local persistence, else session.
  const login = async (email, password, rememberMe = false) => {
    const persistence = rememberMe
      ? browserLocalPersistence
      : browserSessionPersistence;

    await setPersistence(auth, persistence);
    const cred = await signInWithEmailAndPassword(auth, email, password);
    return cred;
  };

  // Google sign in (popup) with optional rememberMe persistence
  const signInWithGoogle = async (rememberMe = false) => {
    const provider = new GoogleAuthProvider();

    const persistence = rememberMe
      ? browserLocalPersistence
      : browserSessionPersistence;

    await setPersistence(auth, persistence);

    // Popup sign-in
    const result = await signInWithPopup(auth, provider);
    // result.user contains user; ensure we have a Firestore user doc
    const u = result.user;
    await createUserDoc(u.uid, u.email || "", {
      displayName: u.name || "",
      photoURL: u.photoURL || "",
    });
    return result;
  };

  // Logout
  const logout = async () => {
    await signOut(auth);
    // local state will be cleared by onAuthStateChanged listener
  };

  // Forgot / Reset Password
  const resetPassword = async (email) => {
  await sendPasswordResetEmail(auth, email);
  return "Password reset email sent. Check your inbox. Also check spam folder";
};

  // Update Firestore user doc (partial)
  const updateUserDoc = async (uid, updateObj) => {
    try {
      const userRef = doc(db, "users", uid);
      await updateDoc(userRef, updateObj);
      // refresh local copy
      const snap = await getDoc(userRef);
      if (snap.exists()) setUserData({ uid, ...snap.data() });
    } catch (err) {
      console.error("updateUserDoc error:", err);
      throw err;
    }
  };

  // Listen to auth state changes once
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      if (user) {
        // Load user doc
        try {
          const docRef = doc(db, "users", user.uid);
          const snapshot = await getDoc(docRef);
          if (snapshot.exists()) {
            setUserData({ uid: user.uid, ...snapshot.data() });
          } else {
            // If doc missing, create it (minimal)
            await createUserDoc(user.uid, user.email || "", {
              displayName: user.displayName || "",
              photoURL: user.photoURL || "",
            });
          }
        } catch (err) {
          console.error("onAuthStateChanged - load user doc error:", err);
        }
      } else {
        setUserData(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Value exposed to components
  const value = {
    currentUser,   // firebase auth user (or null)
    userData,      // Firestore user doc (or null)
    loading,
    signup,
    login,
    logout,
    signInWithGoogle,
    resetPassword,
    updateUserDoc,
  };

  return (
    <AuthContext.Provider value={value}>
      {/* you may want to show a spinner while loading auth state */}
      {!loading ? children : null}
    </AuthContext.Provider>
  );
}

// src/firebase.js
// Modular Firebase v9+ initialization

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBBiRRR-JfMMz2Pn_MGXjxI1PC6BQr-qrs",
  authDomain: "techspread-ffc4b.firebaseapp.com",
  projectId: "techspread-ffc4b",
  storageBucket: "techspread-ffc4b.firebasestorage.app",
  messagingSenderId: "77825876831",
  appId: "1:77825876831:web:61dccf613465a870038cea",
  measurementId: "G-7L6WGJZ1SM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Exports
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;

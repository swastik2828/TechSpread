import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { ArrowLeft } from "lucide-react";
import { useAuth } from "../context/Context"; // ⬅️ our Auth Context

export default function LoginPage() {
  const [eyePos, setEyePos] = useState({ x: 0, y: 0 });
  const [isHappy, setIsHappy] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const controls = useAnimation();
  const navigate = useNavigate();

  const { login, signup, signInWithGoogle, resetPassword } = useAuth();

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 30;
      const y = (e.clientY / innerHeight - 0.5) * 30;
      setEyePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const robotSmile = () => {
    setIsHappy(true);
    controls.start({
      y: [0, -28, 0],
      scale: [1, 1.15, 1],
      transition: { duration: 0.35, ease: "easeOut" },
    });
    setTimeout(() => setIsHappy(false), 800);
  };

  const handleAuth = async (e) => {
  e.preventDefault();
  setLoading(true);
  setMessage("");
  try {
    if (isSignup) {
      const cred = await signup(email, password, { displayName: name });
      setMessage(
        "Verification link sent to your email. Also check spam section Please verify before logging in."
      );
      robotSmile();
    } else {
      const cred = await login(email, password, remember);
      if (!cred.user.emailVerified) {
        setMessage("Please verify your email before logging in.");
        await logout(); // sign them out immediately if not verified
      } else {
        setMessage("Welcome back! Redirecting...");
        robotSmile();
        setTimeout(() => navigate("/dashboard"), 1500);
      }
    }
  } catch (err) {
    setMessage(err.message);
    console.error(err);
  } finally {
    setLoading(false);
  }
};


  const handleGoogle = async () => {
    try {
      await signInWithGoogle(remember);
      robotSmile();
      setMessage("Signed in with Google! Redirecting...");
      setTimeout(() => navigate("/dashboard"), 1500);
    } catch (err) {
      setMessage(err.message);
    }
  };

  const handleResetPassword = async () => {
  if (!email) return setMessage("Enter your email first!");
  try {
    const msg = await resetPassword(email);
    setMessage(msg);
    robotSmile();
  } catch (err) {
    setMessage(err.message);
  }
};


  const stars = [
    { id: 1, left: "10%", top: "5%", rotate: -20 },
    { id: 2, left: "70%", top: "0%", rotate: 10 },
    { id: 3, left: "30%", top: "-10%", rotate: 30 },
  ];

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Back button */}
      <div className="absolute top-4 left-4 z-50">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/")}
          className="relative flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-200 text-white shadow-md"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="hidden sm:inline text-sm font-medium">Back</span>
        </motion.button>
      </div>

      {/* Main Container */}
      <div className="flex w-[850px] shadow-2xl rounded-2xl overflow-hidden bg-white/10 backdrop-blur-md border border-gray-700">
        {/* Left Robot */}
        <div className="w-1/2 bg-gradient-to-b from-gray-950 to-gray-800 flex items-center justify-center relative p-8">
          <motion.div
            animate={controls}
            className={`relative w-44 h-44 rounded-[2rem] flex items-center justify-center cursor-pointer transition-all duration-300 ${
              isHappy
                ? "shadow-[0_0_60px_rgba(0,255,0,0.4)]"
                : "shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            } bg-gradient-to-tr from-gray-800 to-gray-700`}
          >
            <div className="relative w-28 h-20 bg-gray-900 rounded-xl border-4 border-gray-600 flex justify-center items-center">
              {/* Antenna */}
              <div className="absolute -top-6 w-1 h-5 bg-gray-500 rounded-full"></div>
              <div className="absolute -top-7 w-3 h-3 bg-pink-500 rounded-full animate-pulse"></div>

              {/* Eyes */}
              <motion.div
                className="absolute w-4 h-4 bg-white rounded-full left-5 top-1/2 -translate-y-1/2 shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                style={{ x: eyePos.x / 3, y: eyePos.y / 3 }}
              />
              <motion.div
                className="absolute w-4 h-4 bg-white rounded-full right-5 top-1/2 -translate-y-1/2 shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                style={{ x: eyePos.x / 3, y: eyePos.y / 3 }}
              />

              {/* Neutral mouth */}
              <div className="absolute bottom-3 w-8 h-1 rounded-full bg-white" />

              {/* Happy smile */}
              <motion.svg
                viewBox="0 0 24 8"
                className="absolute bottom-1 w-12 h-4"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={isHappy ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
              >
                <path
                  d="M2 2 C6 6, 18 6, 22 2"
                  stroke="#34D399"
                  strokeWidth="2"
                  fill="transparent"
                  strokeLinecap="round"
                />
              </motion.svg>

              {/* Side bolts */}
              <div className="absolute left-[-6px] w-2 h-4 bg-gray-600 rounded-md"></div>
              <div className="absolute right-[-6px] w-2 h-4 bg-gray-600 rounded-md"></div>

              {/* Joy stars */}
              {stars.map((s) => (
                <motion.div
                  key={s.id}
                  className="absolute w-2 h-2 bg-yellow-300 rounded-sm"
                  style={{ left: s.left, top: s.top, transform: `rotate(${s.rotate}deg)` }}
                  initial={{ opacity: 0, y: 0, scale: 0.5 }}
                  animate={
                    isHappy
                      ? { opacity: [1, 1, 0], y: [-6, -18, -30], scale: [1, 1.3, 0.8] }
                      : { opacity: 0 }
                  }
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              ))}
            </div>

            {/* Success message bubble */}
            {message && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute -bottom-16 text-sm text-green-400 text-center"
              >
                {message}
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Right Login/Signup */}
        <div className="w-1/2 bg-white p-10 flex flex-col justify-center">
          {isSignup ? (
            <>
              <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-900">
                Create Account
              </h2>
              <form onSubmit={handleAuth} className="flex flex-col space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-700"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-700"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-700"
                  required
                />
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  disabled={loading}
                  className="bg-gray-900 text-white rounded-md py-3 shadow-md hover:bg-gray-800 transition-all disabled:opacity-60"
                >
                  {loading ? "Creating..." : "Sign Up"}
                </motion.button>
              </form>

              {/* Privacy and Terms Section */}
              <div className="mt-5 text-xs text-gray-500 text-center leading-relaxed">
                By creating an account, you agree to our{" "}
                <a href="/terms" className="text-gray-800 font-semibold hover:underline">
                  Terms & Conditions
                </a>{" "}
                and{" "}
                <a href="/privacy" className="text-gray-800 font-semibold hover:underline">
                  Privacy Policy
                </a>
                . We value your trust and never share personal data without consent.
              </div>

              <div className="text-center text-sm mt-6">
                <p className="text-gray-500">Or sign up with</p>
                <div className="flex justify-center gap-3 mt-3">
                  <button
                    onClick={handleGoogle}
                    className="border px-4 py-2 rounded-md flex items-center gap-2 hover:bg-gray-100 transition-all"
                  >
                    <FcGoogle className="text-xl" /> Google
                  </button>
                </div>
                <p className="mt-4 text-gray-600">
                  Already have an account?{" "}
                  <button
                    onClick={() => setIsSignup(false)}
                    className="text-gray-900 font-semibold"
                  >
                    Log In
                  </button>
                </p>
              </div>
            </>
          ) : (
            <>
              {/* LOGIN SECTION stays unchanged */}
              <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-900">
                Welcome back!
              </h2>
              <form onSubmit={handleAuth} className="flex flex-col space-y-4">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-700"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-700"
                  required
                />
                <div className="flex justify-between items-center text-sm">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={remember}
                      onChange={(e) => setRemember(e.target.checked)}
                    />
                    <span>Remember me</span>
                  </label>
                  <button
                    type="button"
                    onClick={handleResetPassword}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Forgot password?
                  </button>
                </div>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  disabled={loading}
                  className="bg-gray-900 text-white rounded-md py-3 shadow-md hover:bg-gray-800 transition-all disabled:opacity-60"
                >
                  {loading ? "Logging in..." : "Log in"}
                </motion.button>
              </form>

              <div className="text-center text-sm mt-6">
                <p className="text-gray-500">Or continue with</p>
                <div className="flex justify-center gap-3 mt-3">
                  <button
                    onClick={handleGoogle}
                    className="border px-4 py-2 rounded-md flex items-center gap-2 hover:bg-gray-100 transition-all"
                  >
                    <FcGoogle className="text-xl" /> Google
                  </button>
                </div>
                <p className="mt-4 text-gray-600">
                  Don’t have an account?{" "}
                  <button
                    onClick={() => setIsSignup(true)}
                    className="text-gray-900 font-semibold"
                  >
                    Sign Up
                  </button>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

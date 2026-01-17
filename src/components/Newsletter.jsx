// src/components/Newsletter.jsx
import React, { useState, useRef } from "react";
import { db } from "../Firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const timeoutRef = useRef(null);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setMessage({ type: "", text: "" });

    if (!email || !email.includes("@")) {
      setMessage({ type: "error", text: "Please enter a valid email address." });
      return;
    }

    try {
      setLoading(true);

      await addDoc(collection(db, "newsletter"), {
        email: email.toLowerCase().trim(),
        createdAt: serverTimestamp(), // MUST match rules
      });

      setMessage({
        type: "success",
        text: "Successfully subscribed! Stay tuned.",
      });

      setEmail("");

      // Clear success message after 3 seconds
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setMessage({ type: "", text: "" });
      }, 3000);
    } catch (error) {
      console.error("Error subscribing:", error);
      setMessage({
        type: "error",
        text: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-16 p-8 rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-gray-700/50 shadow-2xl relative overflow-hidden group">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl group-hover:bg-purple-600/30 transition-all duration-700"></div>
      <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl group-hover:bg-blue-600/30 transition-all duration-700"></div>

      <div className="relative z-10 text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
          Join the TechSpread Community
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto text-lg">
          Get the latest programming tutorials, industry trends, and tech insights delivered straight to your inbox.
        </p>

        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
        >
          <div className="relative w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-6 py-4 rounded-xl bg-gray-900/50 border border-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none text-white placeholder-gray-500 transition-all backdrop-blur-sm"
              disabled={loading}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold shadow-lg shadow-purple-500/25 transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                <span>Subscribing...</span>
              </>
            ) : (
              <>
                <span>Subscribe</span>
                <Send size={18} />
              </>
            )}
          </button>
        </form>

        {message.text && (
          <div
            className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium animate-fadeIn ${
              message.type === "success"
                ? "bg-green-500/10 text-green-400 border border-green-500/20"
                : "bg-red-500/10 text-red-400 border border-red-500/20"
            }`}
          >
            {message.type === "success" ? (
              <CheckCircle size={16} />
            ) : (
              <AlertCircle size={16} />
            )}
            {message.text}
          </div>
        )}

        <p className="text-xs text-gray-500 mt-4">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
};

export default Newsletter;

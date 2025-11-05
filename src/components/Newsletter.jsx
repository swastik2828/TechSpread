import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Newsletter() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setIsPopupOpen(true);
  };

  return (
    <>
      {/* Newsletter Section */}
      <motion.div
        className="relative max-w-5xl mx-auto mt-16 rounded-2xl bg-gradient-to-r from-[#1f1a3c] via-[#111827] to-[#1f1a3c] p-8 md:p-12 shadow-xl overflow-hidden w-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Optional subtle floating glow */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-purple-600/20 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-500/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>

        <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-[#a855f7] to-[#3b82f6] bg-clip-text text-transparent">
              ✉️ Stay Updated!
            </h2>
            <p className="mt-2 text-gray-300 max-w-lg leading-relaxed">
              Join 1,000+ learners and get weekly tutorials, tips & coding guides straight to your inbox. No spam — just pure learning.
            </p>
          </div>

          <form
            className="flex flex-col md:flex-row gap-3 w-full md:w-auto"
            onSubmit={handleSubscribe}
          >
            <input
              type="email"
              placeholder="Enter your email..."
              required
              className="px-5 py-3 w-full md:w-80 rounded-full bg-white/5 border border-white/10 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] transition"
            />
            <motion.button
              type="submit"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-white font-medium shadow-lg hover:opacity-90 transition"
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(139,92,246,0.4)" }}
              transition={{ duration: 0.3 }}
            >
              Subscribe
            </motion.button>
          </form>
        </div>
      </motion.div>

      {/* Popup */}
      <AnimatePresence>
        {isPopupOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#111827] text-gray-200 p-8 md:p-12 rounded-2xl max-w-md mx-4 text-center shadow-2xl relative"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#a855f7] to-[#3b82f6] bg-clip-text text-transparent">
                📬 Subscription Successful!
              </h3>
              <p className="mt-4 text-gray-300">
                Thank you for subscribing! You’ll now receive weekly tutorials, tips, and coding guides straight to your inbox.
              </p>
              <button
                onClick={() => setIsPopupOpen(false)}
                className="mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-white font-medium shadow-lg hover:opacity-90 transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tailwind keyframes for floating blobs */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </>
  );
}

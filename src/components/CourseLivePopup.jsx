// src/components/CourseLivePopup.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Globe, ArrowRight, X } from 'lucide-react';
import Newsletter from './Newsletter';

// Mini confetti component for the popup celebration
const Confetti = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className={`absolute w-3 h-3 rounded-full ${['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-blue-500', 'bg-purple-500'][i % 5]}`}
        initial={{ top: '-10%', left: `${Math.random() * 100}%`, opacity: 1, scale: Math.random() + 0.5 }}
        animate={{ top: '120%', rotate: Math.random() * 360, opacity: 0 }}
        transition={{ duration: Math.random() * 2 + 2, repeat: Infinity, delay: Math.random() * 2 }}
      />
    ))}
  </div>
);

const CourseLivePopup = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  // Show the popup automatically when the component mounts
  useEffect(() => {
    // Small delay so it pops up beautifully after page load
    const timer = setTimeout(() => setShowPopup(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="bg-gray-900 border border-gray-700 rounded-3xl p-6 md:p-10 max-w-2xl w-full relative overflow-hidden shadow-[0_0_50px_rgba(249,115,22,0.3)] max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-orange-500"
            initial={{ scale: 0.8, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.8, y: 50, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <Confetti />
            <button 
              onClick={() => setShowPopup(false)} 
              className="absolute top-4 right-4 text-gray-400 hover:text-white z-10 bg-gray-800 p-2 rounded-full transition-colors"
            >
              <X size={20} />
            </button>

            <div className="relative z-10">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-orange-500/20 rounded-full border border-orange-500/30">
                  <Globe size={40} className="text-orange-500 animate-pulse" />
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 text-center mb-4 tracking-tight">
                HTML Course is LIVE! 🎉
              </h2>
              
              <p className="text-gray-300 text-center mb-8 text-lg">
                Start your web development journey today! Learn to build real, modern websites with our brand new, highly interactive HTML course.
              </p>
              
              <div className="flex justify-center mb-10">
                <button 
                  onClick={() => {
                    setShowPopup(false);
                    navigate("/webdevelopment/html");
                  }} 
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-xl shadow-lg shadow-orange-500/30 hover:scale-105 hover:shadow-orange-500/50 transition-all text-lg flex items-center gap-2"
                >
                  Start Learning Today <ArrowRight size={20} />
                </button>
              </div>

              <div className="border-t border-gray-800 pt-8 mt-4">
                <h3 className="text-center font-semibold text-white mb-2">Subscribe to our newsletter to get early updates on course releases!</h3>
                <Newsletter />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CourseLivePopup;
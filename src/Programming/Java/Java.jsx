import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Clock, Sparkles, ArrowLeft, Menu, X } from "lucide-react"; // Added Menu and X icons
import { useNavigate } from "react-router-dom";
import WhatisJava from "./WhatisJava";
import HistoryofJava from "./HistoryofJava";
import FeaturesJava from "./FeaturesJava";

const Java = () => {
  const [activeSection, setActiveSection] = useState("whatisjava");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // New state for mobile sidebar
  const navigate = useNavigate();

  const handleSetActiveSection = (section) => {
    setActiveSection(section);
    // Close sidebar only if it's the mobile overlay
    if (isSidebarOpen) {
      setIsSidebarOpen(false); 
    }
  };

  const renderSection = () => {
    switch (activeSection) {
      case "whatisjava":
        return <WhatisJava />;
      case "history":
        return <HistoryofJava />;
      case "features":
        return <FeaturesJava />;
      default:
        return <WhatisJava />;
    }
  };

  const NavigationButtons = () => (
    <div className="flex flex-col space-y-4">
      <button
        onClick={() => handleSetActiveSection("whatisjava")}
        className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${
          activeSection === "whatisjava"
            ? "bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg shadow-purple-500/30"
            : "hover:bg-gray-800"
        }`}
      >
        <BookOpen size={20} /> What is Java
      </button>

      <button
        onClick={() => handleSetActiveSection("history")}
        className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${
          activeSection === "history"
            ? "bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg shadow-purple-500/30"
            : "hover:bg-gray-800"
        }`}
      >
        <Clock size={20} /> History of Java
      </button>

      <button
        onClick={() => handleSetActiveSection("features")}
        className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${
          activeSection === "features"
            ? "bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg shadow-purple-500/30"
            : "hover:bg-gray-800"
        }`}
      >
        <Sparkles size={20} /> Features of Java
      </button>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">
      
      {/* 📱 Mobile Header with Sticky Menu Button */}
      {/* This is the new header strip for small screens */}
      <header className="md:hidden sticky top-0 z-20 p-4 flex justify-between items-center bg-gray-950/95 backdrop-blur-sm border-b border-gray-800 w-full">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent"
        >
          Java Course
        </motion.h1>
        
        {/* Mobile Menu Button (Hamburger) */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
          aria-label="Toggle menu"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>


      {/* Sidebar: Renders differently based on screen size */}
      
      {/* 💻 Desktop Sidebar (Original Logic Preserved) */}
      <aside className="md:w-1/4 w-full border-r border-gray-800 p-6 md:sticky top-0 hidden md:block">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent mb-6"
        >
          Java Course
        </motion.h1>

        {/* Desktop Back Button (Visible only on desktop) */}
        <button
          onClick={() => navigate("/programming")}
          className="flex items-center gap-2 mb-8 px-4 py-2 rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-purple-500/20"
        >
          <ArrowLeft size={18} /> Back to Programming
        </button>

        {/* Desktop Navigation Buttons */}
        <NavigationButtons />
      </aside>

      {/* 📱 Mobile Sidebar/Overlay (Appears when isSidebarOpen is true) */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-10 md:hidden bg-gray-950/95 p-6 flex flex-col space-y-8 overflow-y-auto"
          >
            {/* Back Button inside the Mobile Sidebar */}
             <button
              onClick={() => {
                navigate("/programming");
                setIsSidebarOpen(false); // Also close the menu
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-purple-500/20"
            >
              <ArrowLeft size={18} /> Back to Programming
            </button>
            <NavigationButtons />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content Area */}
      {/* The main content area now needs to handle the new mobile header and sidebar */}
      <main className="flex-1 p-6 overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Java;
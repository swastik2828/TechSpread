import { Outlet, NavLink, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
// ADDED "Download" to imports
import { BookOpen, Clock, Sparkles, ArrowLeft, Menu, X, Layers, Download } from "lucide-react";
import { useState } from "react";

const Java = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const NavItem = ({ to, icon: Icon, label, end = false }) => (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        `flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${
          isActive
            ? "bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg shadow-purple-500/30"
            : "hover:bg-gray-800"
        }`
      }
      onClick={() => setIsSidebarOpen(false)}
    >
      <Icon size={20} /> {label}
    </NavLink>
  );

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">

      {/* 📱 Mobile Header */}
      <header className="md:hidden sticky top-0 z-30 p-4 flex justify-between items-center bg-gray-950/95 backdrop-blur border-b border-gray-800">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
          Java Course
        </h1>
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="p-2 rounded-lg hover:bg-gray-800"
        >
          <Menu />
        </button>
      </header>

      {/* 📱 Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 z-30 bg-black"
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              className="fixed left-0 top-0 z-40 w-3/4 max-w-xs h-full bg-gray-950 p-6 flex flex-col gap-6"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                  Java Course
                </h2>
                <button onClick={() => setIsSidebarOpen(false)}>
                  <X />
                </button>
              </div>

              <button
                onClick={() => {
                  navigate("/programming");
                  setIsSidebarOpen(false);
                }}
                className="flex items-center gap-2"
              >
                <ArrowLeft size={18} /> Back
              </button>

              <NavItem to="" end icon={BookOpen} label="What is Java" />
              <NavItem to="history" icon={Clock} label="History of Java" />
              <NavItem to="features" icon={Sparkles} label="Features of Java" />
              <NavItem to="jdk-jre-jvm" icon={Layers} label="JDK, JRE & JVM" />
              {/* NEW LINK HERE */}
              <NavItem to="installation" icon={Download} label="Installation Guide" />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* 💻 Desktop Sidebar */}
      <aside className="md:w-1/4 border-r border-gray-800 p-6 hidden md:block">
        <button
          onClick={() => navigate("/programming")}
          className="mb-6 flex items-center gap-2"
        >
          <ArrowLeft size={18} /> Back
        </button>

        <NavItem to="" end icon={BookOpen} label="What is Java" />
        <NavItem to="history" icon={Clock} label="History of Java" />
        <NavItem to="features" icon={Sparkles} label="Features of Java" />
        <NavItem to="jdk-jre-jvm" icon={Layers} label="JDK, JRE & JVM" />
        {/* NEW LINK HERE */}
        <NavItem to="installation" icon={Download} label="Installation Guide" />
      </aside>

      {/* 📄 Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Java;
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Clock, Sparkles, ArrowLeft, Menu, X, Layers } from "lucide-react";
import { useState } from "react";

const Java = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const NavItem = ({ to, icon: Icon, label }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${isActive
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

      {/* Mobile Header */}
      <header className="md:hidden sticky top-0 z-20 p-4 flex justify-between items-center bg-gray-950/95 border-b border-gray-800">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
          Java Course
        </h1>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? <X /> : <Menu />}
        </button>
      </header>

      {/* Desktop Sidebar */}
      <aside className="md:w-1/4 border-r border-gray-800 p-6 hidden md:block">
        <button
          onClick={() => navigate("/programming")}
          className="mb-6 flex items-center gap-2"
        >
          <ArrowLeft size={18} /> Back
        </button>

        <NavLink
          to=""
          end
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${isActive
              ? "bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg shadow-purple-500/30"
              : "hover:bg-gray-800"
            }`
          }
        >
          <BookOpen size={20} /> What is Java
        </NavLink>
        <NavItem to="history" icon={Clock} label="History of Java" />
        <NavItem to="features" icon={Sparkles} label="Features of Java" />
        <NavItem to="jdk-jre-jvm" icon={Layers} label="JDK, JRE & JVM" />
      </aside>

      {/* Content */}
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

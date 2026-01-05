import { Outlet, NavLink, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Brain, Cpu, ArrowLeft, Menu, X, Network } from "lucide-react";
import { useState } from "react";

const AI = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // FIX: Use a render function inside NavLink to properly access isActive
  const NavItem = ({ to, icon: Icon, label, end = false }) => (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        `flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${
          isActive
            ? "bg-gradient-to-r from-cyan-600 to-blue-600 shadow-lg shadow-cyan-500/30 border border-cyan-400/30"
            : "hover:bg-gray-800 hover:border hover:border-gray-700 border border-transparent"
        }`
      }
      onClick={() => setIsSidebarOpen(false)}
    >
      {({ isActive }) => (
        <>
          <Icon
            size={20}
            className={isActive ? "text-white" : "text-cyan-400"}
          />
          <span
            className={isActive ? "font-semibold text-white" : "text-gray-300"}
          >
            {label}
          </span>
        </>
      )}
    </NavLink>
  );

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">
      {/* 📱 Mobile Header */}
      <header className="md:hidden sticky top-0 z-30 p-4 flex justify-between items-center bg-gray-950/95 backdrop-blur border-b border-gray-800">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          AI Course
        </h1>
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="p-2 rounded-lg hover:bg-gray-800 text-cyan-400"
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
              className="fixed left-0 top-0 z-40 w-3/4 max-w-xs h-full bg-gray-950 border-r border-gray-800 p-6 flex flex-col gap-6"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  AI Course
                </h2>
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <X />
                </button>
              </div>

              <button
                onClick={() => {
                  navigate("/aiml");
                  setIsSidebarOpen(false);
                }}
                className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <ArrowLeft size={18} /> Back to Hub
              </button>

              <NavItem to="" end icon={Bot} label="What is AI" />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* 💻 Desktop Sidebar */}
      <aside className="md:w-1/4 max-w-[300px] border-r border-gray-800 p-6 hidden md:flex flex-col gap-4 bg-gray-900/30">
        <button
          onClick={() => navigate("/aiml")}
          className="mb-4 flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
        >
          <ArrowLeft size={18} /> Back to Hub
        </button>

        <div className="mb-4 px-2">
          <h3 className="text-sm uppercase tracking-wider text-gray-500 font-semibold">
            Modules
          </h3>
        </div>

        <NavItem to="" end icon={Bot} label="What is AI" />
      </aside>

      {/* 📄 Content Area */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="max-w-5xl mx-auto"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default AI;
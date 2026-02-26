import { Outlet, NavLink, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Brain, Cpu, ArrowLeft, Menu, X, Network, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { useState } from "react";

const AI = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDesktopCollapsed, setIsDesktopCollapsed] = useState(false);
  const isExpanded = !isDesktopCollapsed;
  const navigate = useNavigate();
  const location = useLocation();

  // FIX: Use a render function inside NavLink to properly access isActive
  const NavItem = ({ to, icon: Icon, label, end = false }) => (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        `flex items-center p-3 rounded-xl transition-all duration-200 ease-out ${isActive
          ? "bg-gradient-to-r from-cyan-600 to-blue-600 shadow-lg shadow-cyan-500/30 border border-cyan-400/30"
          : "hover:bg-gray-800 hover:border hover:border-gray-700 border border-transparent"
        } ${!isExpanded ? "justify-center" : "gap-3"}`
      }
      onClick={() => setIsSidebarOpen(false)}
      title={!isExpanded ? label : undefined}
    >
      {({ isActive }) => (
        <>
          <Icon
            size={20}
            className={`shrink-0 ${isActive ? "text-white" : "text-cyan-400"}`}
          />
          <AnimatePresence>
            {isExpanded && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className={`whitespace-nowrap overflow-hidden ${isActive ? "font-semibold text-white" : "text-gray-300"}`}
              >
                {label}
              </motion.span>
            )}
          </AnimatePresence>
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
              className="fixed left-0 top-0 z-40 w-64 h-full bg-gray-950 border-r border-gray-800 p-6 flex flex-col gap-6"
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

      {/* 💻 Desktop Sidebar - Fixed Width */}
      <motion.aside
        initial={false}
        animate={{ width: isExpanded ? 256 : 80 }}
        transition={{ duration: 0.2, ease: "circOut" }}
        className="shrink-0 border-r border-gray-800 hidden md:flex flex-col gap-4 sticky top-0 h-screen overflow-hidden overflow-y-auto transition-all duration-200 ease-out z-40 relative scrollbar-none bg-gray-900/30"
        style={{ padding: "24px 16px" }}
      >
        <div className={`flex items-center ${isExpanded ? "justify-between" : "justify-center"} mb-2 min-h-[32px] overflow-hidden`}>
          <AnimatePresence>
            {isExpanded && (
              <motion.h2
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent whitespace-nowrap overflow-hidden m-0"
              >
                AI Course
              </motion.h2>
            )}
          </AnimatePresence>
          <button
            onClick={() => setIsDesktopCollapsed(!isDesktopCollapsed)}
            className="p-1.5 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition-colors shrink-0"
            title={isDesktopCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
          >
            {isDesktopCollapsed ? <PanelLeftOpen size={18} /> : <PanelLeftClose size={18} />}
          </button>
        </div>

        <button
          onClick={() => navigate("/aiml")}
          className={`flex items-center ${isExpanded ? "gap-2 px-2" : "justify-center"} text-gray-400 hover:text-cyan-400 transition-colors w-full mb-2`}
          title={!isExpanded ? "Back to Hub" : undefined}
        >
          <ArrowLeft size={18} className="shrink-0" />
          <AnimatePresence>
            {isExpanded && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="whitespace-nowrap overflow-hidden"
              >
                Back to Hub
              </motion.span>
            )}
          </AnimatePresence>
        </button>

        <div className={`mb-2 ${isExpanded ? "px-2" : "flex justify-center"}`}>
          <AnimatePresence>
            {isExpanded ? (
              <motion.h3
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="text-sm uppercase tracking-wider text-gray-500 font-semibold whitespace-nowrap overflow-hidden inline-block m-0"
              >
                Modules
              </motion.h3>
            ) : (
              <div className="w-8 h-px bg-gray-800 my-2"></div>
            )}
          </AnimatePresence>
        </div>

        <nav className="flex flex-col gap-2">
          <NavItem to="" end icon={Bot} label="What is AI" />
        </nav>
      </motion.aside>

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
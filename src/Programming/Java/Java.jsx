import { Outlet, NavLink, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Clock, Sparkles, ArrowLeft, Menu, X, Layers, Download, Scale, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { useState } from "react";

const Java = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDesktopCollapsed, setIsDesktopCollapsed] = useState(false);
  const isExpanded = !isDesktopCollapsed;
  const navigate = useNavigate();
  const location = useLocation();

  const NavItem = ({ to, icon: Icon, label, end = false }) => (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        `flex items-center p-3 rounded-xl transition-all duration-200 ease-out ${isActive
          ? "bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg shadow-purple-500/30"
          : "hover:bg-gray-800"
        } ${!isExpanded ? "justify-center" : "gap-3"}`
      }
      onClick={() => setIsSidebarOpen(false)}
      title={!isExpanded ? label : undefined}
    >
      <Icon size={20} className="shrink-0" />
      <AnimatePresence>
        {isExpanded && (
          <motion.span
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="whitespace-nowrap overflow-hidden"
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
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
              className="fixed left-0 top-0 z-40 w-64 h-full bg-gray-950 p-6 flex flex-col gap-6"
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
              <NavItem to="installation" icon={Download} label="Installation Guide" />
              <NavItem to="java-vs-cpp" icon={Scale} label="Java vs C++" />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* 💻 Desktop Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: isExpanded ? 256 : 80 }}
        transition={{ duration: 0.2, ease: "circOut" }}
        className="shrink-0 border-r border-gray-800 hidden md:flex flex-col sticky top-0 h-screen overflow-hidden overflow-y-auto z-40 relative scrollbar-none bg-gray-950"
        style={{ padding: "24px 16px" }}
      >
        <div className={`flex items-center ${isExpanded ? "justify-between" : "justify-center"} mb-6 mt-2 min-h-[32px] overflow-hidden`}>
          <AnimatePresence>
            {isExpanded && (
              <motion.h2
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent whitespace-nowrap overflow-hidden m-0"
              >
                Java Course
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
          onClick={() => navigate("/programming")}
          className={`mb-6 flex items-center ${isExpanded ? "gap-2 px-2" : "justify-center"} text-sm text-gray-400 hover:text-white transition-colors w-full`}
          title={!isExpanded ? "Back" : undefined}
        >
          <ArrowLeft size={16} className="shrink-0" />
          <AnimatePresence>
            {isExpanded && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="whitespace-nowrap overflow-hidden"
              >
                Back
              </motion.span>
            )}
          </AnimatePresence>
        </button>

        <nav className="flex flex-col gap-2">
          <NavItem to="" end icon={BookOpen} label="What is Java" />
          <NavItem to="history" icon={Clock} label="History of Java" />
          <NavItem to="features" icon={Sparkles} label="Features of Java" />
          <NavItem to="jdk-jre-jvm" icon={Layers} label="JDK, JRE & JVM" />
          <NavItem to="installation" icon={Download} label="Installation Guide" />
          <NavItem to="java-vs-cpp" icon={Scale} label="Java vs C++" />
        </nav>
      </motion.aside>

      {/* 📄 Content */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto max-w-7xl mx-auto w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
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
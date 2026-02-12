import { Outlet, NavLink, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Globe, FileCode, Layers, ArrowLeft, Menu, X, Layout, Type, 
  ChevronDown, ChevronRight, Hash, AlignLeft, Bold, Box, Key
} from "lucide-react";
import { useState } from "react";

const HTML = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isTextMenuOpen, setIsTextMenuOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  // Helper for main nav items
  const NavItem = ({ to, icon: Icon, label, end = false }) => (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        `flex items-center gap-3 p-3 rounded-lg transition-all duration-300 text-sm font-medium ${
          isActive
            ? "bg-gradient-to-r from-orange-600/90 to-red-600/90 text-white shadow-lg shadow-orange-500/20 border border-orange-500/30"
            : "text-gray-400 hover:text-white hover:bg-white/5"
        }`
      }
      onClick={() => setIsSidebarOpen(false)}
    >
      <Icon size={18} /> {label}
    </NavLink>
  );

  // Helper for the dropdown menu
  const DropdownNav = ({ label, icon: Icon, isOpen, onToggle, children }) => (
    <div className="flex flex-col gap-1">
      <button
        onClick={onToggle}
        className={`flex items-center justify-between w-full p-3 rounded-lg transition-all duration-300 text-sm font-medium ${
           isOpen ? "text-orange-400 bg-white/5" : "text-gray-400 hover:text-white hover:bg-white/5"
        }`}
      >
        <div className="flex items-center gap-3">
          <Icon size={18} /> {label}
        </div>
        {isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden flex flex-col gap-1 pl-4 border-l border-white/10 ml-4"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  // Helper for sub-items (now real links)
  const SubNavItem = ({ to, label, icon: Icon }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-2 py-2 px-3 rounded-md text-xs transition-colors ${
          isActive ? "text-orange-400 bg-orange-500/10 border border-orange-500/20" : "text-gray-500 hover:text-gray-300"
        }`
      }
      onClick={() => setIsSidebarOpen(false)}
    >
      {Icon && <Icon size={14} />} {label}
    </NavLink>
  );

  const SidebarContent = () => (
    <nav className="flex flex-col gap-2">
      <NavItem to="" end icon={Globe} label="Fundamentals of Web" />
      <NavItem to="intro" icon={FileCode} label="Introduction to HTML" />
      <NavItem to="structure" icon={Layout} label="Document Structure" />
      
      {/* Expanded Module Dropdown */}
      <DropdownNav 
        label="Text & Content" 
        icon={Type} 
        isOpen={isTextMenuOpen} 
        onToggle={() => setIsTextMenuOpen(!isTextMenuOpen)}
      >
        <SubNavItem to="elements" label="1. HTML Elements" icon={Layout} />
        <SubNavItem to="attributes" label="2. HTML Attributes" icon={Hash} />
        <SubNavItem to="headings" label="3. Headings" icon={Type} />
        <SubNavItem to="paragraphs" label="4. Paragraphs" icon={AlignLeft} />
        <SubNavItem to="formatting" label="5. Formatting" icon={Bold} />
        <SubNavItem to="block-inline" label="6. Block vs Inline" icon={Box} />
        <SubNavItem to="charsets" label="7. Charsets" icon={Key} />
      </DropdownNav>
    </nav>
  );

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#0A0A0A] text-white font-sans">
      {/* Mobile Header */}
      <header className="md:hidden sticky top-0 z-30 px-4 py-3 flex justify-between items-center bg-[#0A0A0A]/95 backdrop-blur border-b border-white/10">
        <h1 className="text-xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">HTML Course</h1>
        <button onClick={() => setIsSidebarOpen(true)} className="p-2 text-gray-300"><Menu size={24} /></button>
      </header>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} exit={{ opacity: 0 }} onClick={() => setIsSidebarOpen(false)} className="fixed inset-0 z-40 bg-black" />
            <motion.aside initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }} className="fixed left-0 top-0 z-50 w-64 h-full bg-[#111] border-r border-white/10 p-5 flex flex-col gap-6 overflow-y-auto">
              <div className="flex justify-between items-center">
                <span className="font-bold text-orange-500">HTML Modules</span>
                <button onClick={() => setIsSidebarOpen(false)}><X size={20} /></button>
              </div>
                <button onClick={() => navigate("/tutorials/webdevelopment/frontend")} className="flex items-center gap-2 text-gray-500 hover:text-orange-400 transition-colors text-sm ">
          <ArrowLeft size={16} /> Back
        </button>
              <SidebarContent />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 shrink-0 h-screen sticky top-0 border-r border-white/10 bg-[#0A0A0A] overflow-y-auto p-6">
        <button onClick={() => navigate("/tutorials/webdevelopment/frontend")} className="flex items-center gap-2 text-gray-500 hover:text-orange-400 transition-colors text-sm mb-8">
          <ArrowLeft size={16} /> Back
        </button>
        <h2 className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-4 pl-2">HTML Course</h2>
        <SidebarContent />
      </aside>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto p-6 md:p-12 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent">
        <AnimatePresence mode="wait">
          <motion.div key={location.pathname} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="max-w-4xl">
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};
export default HTML;
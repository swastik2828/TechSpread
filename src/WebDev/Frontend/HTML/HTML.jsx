import { Outlet, NavLink, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe, FileCode, Layers, ArrowLeft, Menu, X, Layout, Type,
  ChevronDown, ChevronRight, Hash, AlignLeft, Bold, Box, Key,
  Link as LinkIcon, Link2, FolderTree, Mail, ExternalLink, CheckCircle, Code,
  PanelLeftClose, PanelLeftOpen, Image as ImageIcon, ImagePlus, FileImage
} from "lucide-react";
import { useState } from "react";

const HTML = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isTextMenuOpen, setIsTextMenuOpen] = useState(false);
  const [isLinksMenuOpen, setIsLinksMenuOpen] = useState(false);
  const [isImagesMenuOpen, setIsImagesMenuOpen] = useState(true);
  const [isDesktopCollapsed, setIsDesktopCollapsed] = useState(false);
  const isExpanded = !isDesktopCollapsed;
  const navigate = useNavigate();
  const location = useLocation();

  const NavItem = ({ to, icon: Icon, label, end = false }) => (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        `flex items-center p-3 rounded-lg transition-all duration-200 ease-out text-sm font-medium ${isActive
          ? "bg-gradient-to-r from-orange-600/90 to-red-600/90 text-white shadow-lg shadow-orange-500/20 border border-orange-500/30"
          : "text-gray-400 hover:text-white hover:bg-white/5"
        } ${!isExpanded ? "justify-center" : "gap-3"}`
      }
      onClick={() => setIsSidebarOpen(false)}
      title={!isExpanded ? label : undefined}
    >
      <Icon size={18} className="shrink-0" />
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

  const DropdownNav = ({ label, icon: Icon, isOpen, onToggle, children }) => (
    <div className="flex flex-col gap-1 w-full">
      <button
        onClick={onToggle}
        className={`flex items-center justify-between w-full p-3 rounded-lg transition-all duration-200 ease-out text-sm font-medium ${isOpen && isExpanded ? "text-orange-400 bg-white/5" : "text-gray-400 hover:text-white hover:bg-white/5"
          } ${!isExpanded ? "justify-center" : ""}`}
        title={!isExpanded ? label : undefined}
      >
        <div className={`flex items-center ${isExpanded ? "gap-3" : "justify-center w-full"}`}>
          <Icon size={18} className="shrink-0" />
          <AnimatePresence>
            {isExpanded && (
              <motion.span initial={{ opacity: 0, width: 0 }} animate={{ opacity: 1, width: "auto" }} exit={{ opacity: 0, width: 0 }} className="whitespace-nowrap overflow-hidden">
                {label}
              </motion.span>
            )}
          </AnimatePresence>
        </div>
        {isExpanded && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}>
            {isOpen ? <ChevronDown size={14} className="shrink-0" /> : <ChevronRight size={14} className="shrink-0" />}
          </motion.div>
        )}
      </button>
      <AnimatePresence>
        {isOpen && isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={`overflow-hidden flex flex-col gap-1 ${isExpanded ? "pl-4 border-l border-white/10 ml-4" : "items-center"}`}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  const SubNavItem = ({ to, label, icon: Icon }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-2 py-2 px-3 rounded-md text-xs transition-colors ${isActive ? "text-orange-400 bg-orange-500/10 border border-orange-500/20" : "text-gray-500 hover:text-gray-300"
        } ${!isExpanded ? "justify-center w-full px-0" : ""}`
      }
      onClick={() => setIsSidebarOpen(false)}
      title={!isExpanded ? label : undefined}
    >
      {Icon && <Icon size={14} className="shrink-0" />}
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

  const SidebarContent = () => (
    <nav className="flex flex-col gap-2">
      <NavItem to="" end icon={Globe} label="Fundamentals of Web" />
      <NavItem to="intro" icon={FileCode} label="Introduction to HTML" />
      <NavItem to="structure" icon={Layout} label="Document Structure" />

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

      {/* NEW: Links & Navigation Module */}
      <DropdownNav
        label="Links & Navigation"
        icon={LinkIcon}
        isOpen={isLinksMenuOpen}
        onToggle={() => setIsLinksMenuOpen(!isLinksMenuOpen)}
      >
        <SubNavItem to="links-intro" label="1. What Are Links" icon={Globe} />
        <SubNavItem to="anchor-syntax" label="2. Anchor Syntax" icon={Code} />
        <SubNavItem to="urls" label="3. URLs: Abs vs Rel" icon={Link2} />
        <SubNavItem to="paths" label="4. Folder Structure" icon={FolderTree} />
        <SubNavItem to="in-page" label="5. In-Page Linking" icon={Hash} />
        <SubNavItem to="special-links" label="6. Email & Special" icon={Mail} />
        <SubNavItem to="new-tabs" label="7. New Tabs & Windows" icon={ExternalLink} />
        <SubNavItem to="nav-menus" label="8. Navigation Menus" icon={Menu} />
        <SubNavItem to="links-best-practices" label="9. Best Practices" icon={CheckCircle} />
      </DropdownNav>

      {/* NEW: Images & Media Module */}
      <DropdownNav
        label="Images & Media"
        icon={ImageIcon}
        isOpen={isImagesMenuOpen}
        onToggle={() => setIsImagesMenuOpen(!isImagesMenuOpen)}
      >
        <SubNavItem to="images-intro" label="1. Intro to Images" icon={ImagePlus} />
        <SubNavItem to="image-markup" label="2. Image Markup" icon={Code} />
        <SubNavItem to="image-formats" label="3. Image Formats" icon={FileImage} />
      </DropdownNav>

    </nav>
  );

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#0A0A0A] text-white font-sans">
      <header className="md:hidden sticky top-0 z-30 px-4 py-3 flex justify-between items-center bg-[#0A0A0A]/95 backdrop-blur border-b border-white/10">
        <h1 className="text-xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">HTML Course</h1>
        <button onClick={() => setIsSidebarOpen(true)} className="p-2 text-gray-300"><Menu size={24} /></button>
      </header>

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

      <motion.aside
        initial={false}
        animate={{ width: isExpanded ? 256 : 80 }}
        transition={{ duration: 0.2, ease: "circOut" }}
        className="hidden md:flex flex-col shrink-0 h-screen sticky top-0 border-r border-white/10 bg-[#0A0A0A] overflow-hidden overflow-y-auto z-40 relative scrollbar-none"
        style={{ padding: "24px 16px" }}
      >
        <div className={`flex items-center ${isExpanded ? "justify-between" : "justify-center"} mb-6 mt-2 min-h-[32px] overflow-hidden`}>
          <AnimatePresence>
            {isExpanded && (
              <motion.h2
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="text-xs font-bold text-orange-500 uppercase tracking-widest pl-2 whitespace-nowrap overflow-hidden m-0"
              >
                HTML Course
              </motion.h2>
            )}
          </AnimatePresence>
          <button
            onClick={() => setIsDesktopCollapsed(!isDesktopCollapsed)}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors shrink-0"
            title={isDesktopCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
          >
            {isDesktopCollapsed ? <PanelLeftOpen size={18} /> : <PanelLeftClose size={18} />}
          </button>
        </div>

        <button
          onClick={() => navigate("/tutorials/webdevelopment/frontend")}
          className={`flex items-center ${isExpanded ? "gap-2 px-2" : "justify-center"} text-gray-500 hover:text-orange-400 transition-colors text-sm mb-6 w-full`}
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

        <SidebarContent />
      </motion.aside>

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
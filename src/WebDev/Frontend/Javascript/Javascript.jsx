import { Outlet, NavLink, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowLeft,
  ChevronDown,
  ChevronRight,
  FileCode,
  PanelLeftClose,
  PanelLeftOpen,
  TerminalSquare,
  BookOpen,
  Code2,
  PlaySquare,
  Globe2,
  GitBranch,
  Database,
  Layers,
  Target,
  Network,
  Clock,
  Server,
  AppWindow,
  Save,
  AlertTriangle
} from "lucide-react";
import { useState } from "react";

const Javascript = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDesktopCollapsed, setIsDesktopCollapsed] = useState(false);

  // Module states
  const [isModule2Open, setIsModule2Open] = useState(false);
  const [isModule3Open, setIsModule3Open] = useState(false);
  const [isModule4Open, setIsModule4Open] = useState(false);
  const [isModule5Open, setIsModule5Open] = useState(false);
  const [isModule6Open, setIsModule6Open] = useState(false);
  const [isModule7Open, setIsModule7Open] = useState(false);
  const [isModule8Open, setIsModule8Open] = useState(false);
  const [isModule9Open, setIsModule9Open] = useState(false);
  const [isModule10Open, setIsModule10Open] = useState(false);
  const [isModule11Open, setIsModule11Open] = useState(false);
  const [isModule12Open, setIsModule12Open] = useState(false);
  const [isModule13Open, setIsModule13Open] = useState(false);
  const [isModule14Open, setIsModule14Open] = useState(false);
  const [isModule15Open, setIsModule15Open] = useState(false);

  const isExpanded = !isDesktopCollapsed;
  const navigate = useNavigate();
  const location = useLocation();

  const NavItem = ({ to, icon: Icon, label, end = false }) => (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        `flex items-center p-3 rounded-lg transition-all duration-200 ease-out text-sm font-medium ${
          isActive
            ? "bg-gradient-to-r from-yellow-500/90 to-amber-500/90 text-white shadow-lg shadow-yellow-500/20 border border-yellow-500/30"
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
        className={`flex items-center justify-between w-full p-3 rounded-lg transition-all duration-200 ease-out text-sm font-medium ${
          isOpen && isExpanded
            ? "text-yellow-400 bg-white/5"
            : "text-gray-400 hover:text-white hover:bg-white/5"
        } ${!isExpanded ? "justify-center" : ""}`}
        title={!isExpanded ? label : undefined}
      >
        <div
          className={`flex items-center ${isExpanded ? "gap-3" : "justify-center w-full"}`}
        >
          <Icon size={18} className="shrink-0" />
          <AnimatePresence>
            {isExpanded && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                className="whitespace-nowrap overflow-hidden"
              >
                {label}
              </motion.span>
            )}
          </AnimatePresence>
        </div>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            {isOpen ? (
              <ChevronDown size={14} className="shrink-0" />
            ) : (
              <ChevronRight size={14} className="shrink-0" />
            )}
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
        `flex items-center gap-2 py-2 px-3 rounded-md text-xs transition-colors ${isActive ? "text-yellow-400 bg-yellow-500/10 border border-yellow-500/20" : "text-gray-500 hover:text-gray-300"} ${!isExpanded ? "justify-center w-full px-0" : ""}`
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
      <NavItem to="" end icon={BookOpen} label="Introduction to JavaScript" />

      <DropdownNav
        label="Variables & Types"
        icon={Code2}
        isOpen={isModule2Open}
        onToggle={() => setIsModule2Open(!isModule2Open)}
      >
        <SubNavItem to="variables" label="2.1 Variables" />
        <SubNavItem to="primitives" label="2.2 Primitive Types" />
        <SubNavItem to="reference-types" label="2.3 Reference Types" />
        <SubNavItem to="dynamic-typing" label="2.4 Dynamic Typing" />
        <SubNavItem to="type-conversion" label="2.5 Type Conversion" />
        <SubNavItem to="operators" label="2.6 Operators" />
        <SubNavItem to="expressions" label="2.7 Expressions" />
      </DropdownNav>
      <DropdownNav
        label="Control Flow"
        icon={PlaySquare}
        isOpen={isModule3Open}
        onToggle={() => setIsModule3Open(!isModule3Open)}
      >
        <SubNavItem
          to="conditional-statements"
          label="3.1 Conditional Statements"
        />
        <SubNavItem to="truthy-falsy" label="3.2 Truthy & Falsy Values" />
        <SubNavItem to="loops" label="3.3 Loops" />
        <SubNavItem to="break-continue" label="3.4 break & continue" />
        <SubNavItem to="clean-conditions" label="3.5 Clean Conditions" />
      </DropdownNav>
      <DropdownNav
        label="Functions & Execution"
        icon={GitBranch}
        isOpen={isModule4Open}
        onToggle={() => setIsModule4Open(!isModule4Open)}
      >
        <SubNavItem to="functions" label="4.1 Function Basics" />
        <SubNavItem to="parameters" label="4.2 Parameters & Args" />
        <SubNavItem to="return-values" label="4.3 Return Values" />
        <SubNavItem to="arrow-functions" label="4.4 Arrow Functions" />
        <SubNavItem to="execution-context" label="4.5 Context & Scope" />
        <SubNavItem to="call-stack" label="4.6 The Call Stack" />
      </DropdownNav>
      <DropdownNav
        label="Arrays & Objects"
        icon={Database}
        isOpen={isModule5Open}
        onToggle={() => setIsModule5Open(!isModule5Open)}
      >
        <SubNavItem to="arrays-foundations" label="5.1 Arrays Foundations" />
        <SubNavItem to="array-methods" label="5.2 Array Methods" />
        <SubNavItem to="objects-foundations" label="5.3 Objects Foundations" />
        <SubNavItem to="destructuring" label="5.4 Destructuring" />
        <SubNavItem to="spread-rest" label="5.5 Spread & Rest" />
      </DropdownNav>
      <DropdownNav
        label="Scope & Closures"
        icon={Layers}
        isOpen={isModule6Open}
        onToggle={() => setIsModule6Open(!isModule6Open)}
      >
        <SubNavItem to="lexical-scope" label="6.1 Lexical Scope" />
        <SubNavItem to="block-scope" label="6.2 Block vs Function Scope" />
        <SubNavItem to="hoisting" label="6.3 Hoisting" />
        <SubNavItem to="tdz" label="6.4 Temporal Dead Zone" />
        <SubNavItem to="closures" label="6.5 Closures" />
        <SubNavItem to="scope-chain" label="6.6 The Scope Chain" />
      </DropdownNav>
      <DropdownNav
        label="The 'this' Keyword"
        icon={Target}
        isOpen={isModule7Open}
        onToggle={() => setIsModule7Open(!isModule7Open)}
      >
        <SubNavItem to="the-golden-rule" label="7.1 The Golden Rule" />
        <SubNavItem to="new-binding" label="7.2 new Binding" />
        <SubNavItem to="explicit-binding" label="7.3 Explicit Binding" />
        <SubNavItem
          to="implicit-default-binding"
          label="7.4 Implicit & Default"
        />
        <SubNavItem to="arrow-functions-this" label="7.5 Arrow Functions" />
      </DropdownNav>
      <DropdownNav
        label="Prototypes & OOP"
        icon={Network}
        isOpen={isModule8Open}
        onToggle={() => setIsModule8Open(!isModule8Open)}
      >
        <SubNavItem to="prototype-chain" label="8.1 The Prototype Chain" />
        <SubNavItem
          to="constructor-functions"
          label="8.2 Constructor Functions"
        />
        <SubNavItem to="es6-classes" label="8.3 ES6 Classes" />
        <SubNavItem to="inheritance-vs-composition" label="8.4 System Design" />
      </DropdownNav>
      <DropdownNav
        label="Asynchronous JS"
        icon={Clock}
        isOpen={isModule9Open}
        onToggle={() => setIsModule9Open(!isModule9Open)}
      >
        <SubNavItem to="async-exists" label="9.1 Why Async Exists" />
        <SubNavItem to="event-loop" label="9.2 The Event Loop" />
        <SubNavItem to="callbacks" label="9.3 Callbacks" />
        <SubNavItem to="promises" label="9.4 Promises" />
        <SubNavItem to="async-await" label="9.5 Async / Await" />
        <SubNavItem to="error-handling" label="9.6 Error Handling" />
        <SubNavItem to="sequential-vs-parallel" label="9.7 Seq vs Parallel" />
        <SubNavItem to="common-mistakes" label="9.8 Common Mistakes" />
        <SubNavItem to="async-cheatsheet" label="9.9 Cheatsheet" />
      </DropdownNav>
      <DropdownNav
        label="Event Loop & Concurrency"
        icon={Layers}
        isOpen={isModule10Open}
        onToggle={() => setIsModule10Open(!isModule10Open)}
      >
        <SubNavItem to="why-exist" label="10.1 Why It Exists" />
        <SubNavItem to="big-picture" label="10.2 The Big Picture" />
        <SubNavItem to="concurrency-call-stack" label="10.3 The Call Stack" />
        <SubNavItem to="web-apis" label="10.4 Web APIs Layer" />
        <SubNavItem to="task-queues" label="10.5 Task Queues" />
        <SubNavItem to="event-loop-orchestrator" label="10.6 The Event Loop" />
        <SubNavItem to="priority-system" label="10.7 Priority System" />
        <SubNavItem to="execution-order" label="10.8 Execution Order" />
        <SubNavItem to="async-await-sugar" label="10.9 async/await Sugar" />
        <SubNavItem to="rendering-pipeline" label="10.10 Render Pipeline" />
        <SubNavItem to="node-differences" label="10.11 Node.js vs Browser" />
        <SubNavItem to="common-bugs" label="10.12 Common Bugs" />
        <SubNavItem to="performance-patterns" label="10.13 Best Practices" />
        <SubNavItem to="mental-models" label="10.14 Cheat Sheet" />
        <SubNavItem to="practice-problems" label="10.15 Practice Problems" />
      </DropdownNav>
      <DropdownNav
        label="Web APIs & Data"
        icon={Server}
        isOpen={isModule11Open}
        onToggle={() => setIsModule11Open(!isModule11Open)}
      >
        <SubNavItem to="web-apis-foundation" label="11.1 How the Web Works" />
        <SubNavItem to="fetch-api" label="11.2 The Fetch API" />
        <SubNavItem to="http-methods" label="11.3 HTTP Methods" />
        <SubNavItem to="working-with-json" label="11.4 Working with JSON" />
        <SubNavItem to="auth-headers" label="11.5 Auth & Headers" />
        <SubNavItem to="error-handling" label="11.6 Error Handling" />
      </DropdownNav>

      {/* NEW MODULE 12 */}
      <DropdownNav
        label="DOM Manipulation"
        icon={AppWindow}
        isOpen={isModule12Open}
        onToggle={() => setIsModule12Open(!isModule12Open)}
      >
        <SubNavItem to="what-is-the-dom" label="12.1 What is the DOM" />
        <SubNavItem to="selecting-elements" label="12.2 Selecting Elements" />
        <SubNavItem to="modifying-elements" label="12.3 Modifying Elements" />
        <SubNavItem to="data-attributes" label="12.4 Data Attributes" />
        <SubNavItem to="handling-events" label="12.5 Handling Events" />
        <SubNavItem to="dom-performance" label="12.6 DOM Performance" />
        <SubNavItem to="common-dom-pitfalls" label="12.7 Common Pitfalls" />
        <SubNavItem to="dom-working-example" label="12.8 Working Example" />
      </DropdownNav>

      {/* NEW MODULE 13 */}
      <DropdownNav
        label="Event Handling"
        icon={Network}
        isOpen={isModule13Open}
        onToggle={() => setIsModule13Open(!isModule13Open)}
      >
        <SubNavItem to="the-event-system" label="13.1 The Event System" />
        <SubNavItem to="event-propagation" label="13.2 Event Propagation" />
        <SubNavItem to="the-event-object" label="13.3 The Event Object" />
        <SubNavItem to="event-delegation" label="13.4 Event Delegation" />
        <SubNavItem to="custom-events" label="13.5 Custom Events" />
        <SubNavItem to="async-event-handling" label="13.6 Async Events" />
        <SubNavItem to="focus-management" label="13.7 Focus & A11y" />
        <SubNavItem to="organising-event-code" label="13.8 Code Patterns" />
        <SubNavItem to="memory-leaks" label="13.9 Memory Leaks" />
        <SubNavItem to="quick-reference-events" label="13.10 Quick Reference" />
      </DropdownNav>

      {/* Module 14 */}
      <DropdownNav
        label="Forms & Storage"
        icon={Save}
        isOpen={isModule14Open}
        onToggle={() => setIsModule14Open(!isModule14Open)}
      >
        <SubNavItem to="forms-intro" label="14.1 Forms & FormData" />
        <SubNavItem to="form-validation" label="14.2 Form Validation" />
        <SubNavItem to="browser-storage" label="14.3 Browser Storage" />
      </DropdownNav>

      {/* Module 15 */}
      <DropdownNav
        label="Error Handling & Debugging"
        icon={AlertTriangle} // Make sure to import AlertTriangle from 'lucide-react'
        isOpen={isModule15Open}
        onToggle={() => setIsModule15Open(!isModule15Open)}
      >
        <SubNavItem to="error-handling-try-catch" label="15.1 Errors & Try/Catch" />
        <SubNavItem to="debugging-global" label="15.2 Debugging & Global Handlers" />
      </DropdownNav>
    </nav>
  );

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#0A0A0A] text-white font-sans">
      <header className="md:hidden sticky top-0 z-30 px-4 py-3 flex justify-between items-center bg-[#0A0A0A]/95 backdrop-blur border-b border-white/10">
        <h1 className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
          JS Course
        </h1>
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="p-2 text-gray-300"
        >
          <Menu size={24} />
        </button>
      </header>

      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 z-40 bg-black"
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              className="fixed left-0 top-0 z-50 w-64 h-full bg-[#111] border-r border-white/10 p-5 flex flex-col gap-6 overflow-y-auto"
            >
              <div className="flex justify-between items-center">
                <span className="font-bold text-yellow-400">JS Modules</span>
                <button onClick={() => setIsSidebarOpen(false)}>
                  <X size={20} />
                </button>
              </div>
              <button
                onClick={() => navigate("/tutorials/webdevelopment/frontend")}
                className="flex items-center gap-2 text-gray-500 hover:text-yellow-400 transition-colors text-sm "
              >
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
        <div
          className={`flex items-center ${isExpanded ? "justify-between" : "justify-center"} mb-6 mt-2 min-h-[32px] overflow-hidden`}
        >
          <AnimatePresence>
            {isExpanded && (
              <motion.h2
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="text-xs font-bold text-yellow-400 uppercase tracking-widest pl-2 whitespace-nowrap overflow-hidden m-0"
              >
                JS Course
              </motion.h2>
            )}
          </AnimatePresence>
          <button
            onClick={() => setIsDesktopCollapsed(!isDesktopCollapsed)}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors shrink-0"
            title={isDesktopCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
          >
            {isDesktopCollapsed ? (
              <PanelLeftOpen size={18} />
            ) : (
              <PanelLeftClose size={18} />
            )}
          </button>
        </div>

        <button
          onClick={() => navigate("/tutorials/webdevelopment/frontend")}
          className={`flex items-center ${isExpanded ? "gap-2 px-2" : "justify-center"} text-gray-500 hover:text-yellow-400 transition-colors text-sm mb-6 w-full`}
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
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};
export default Javascript;

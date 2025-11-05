
import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ArrowRightCircle, X, Menu } from "lucide-react";
import TechSpreadLogo from "../assets/TechSpread/Logo.png";

const links = [
  { name: "Home", path: "/" },
  { name: "Tutorial", path: "/tutorial" },
  { name: "Contact Us", path: "/contact" },
  { name: "About Us", path: "/about" },
];

export default function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLinkPos, setActiveLinkPos] = useState({ left: 0, width: 0 });

  const linksContainerRef = useRef(null);
  const linkRefs = useRef([]); // array of DOM nodes
  linkRefs.current = []; // ensure fresh for mapping

  // add link node to refs
  const setLinkRef = (el, idx) => {
    linkRefs.current[idx] = el;
  };

  // Scroll state (kept light)
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Underline measurement — run after layout to get accurate offsets
  useLayoutEffect(() => {
    const computeActive = () => {
      const idx = links.findIndex((l) => l.path === location.pathname);
      if (idx >= 0 && linksContainerRef.current && linkRefs.current[idx]) {
        const containerRect = linksContainerRef.current.getBoundingClientRect();
        const elRect = linkRefs.current[idx].getBoundingClientRect();
        setActiveLinkPos({
          left: Math.round(elRect.left - containerRect.left),
          width: Math.round(elRect.width),
        });
      } else {
        setActiveLinkPos({ left: 0, width: 0 });
      }
    };

    computeActive();

    // Recompute on resize and font load / layout changes
    const onResize = () => computeActive();
    window.addEventListener("resize", onResize);

    // ResizeObserver for subtle layout shifts (safer than polling)
    let ro;
    try {
      ro = new ResizeObserver(() => computeActive());
      if (linksContainerRef.current) ro.observe(linksContainerRef.current);
      linkRefs.current.forEach((el) => el && ro.observe(el));
    } catch (e) {
      // ResizeObserver may not be available in old browsers; resize listener covers most cases.
    }

    return () => {
      window.removeEventListener("resize", onResize);
      if (ro) {
        try {
          if (linksContainerRef.current) ro.unobserve(linksContainerRef.current);
          linkRefs.current.forEach((el) => el && ro.unobserve(el));
          ro.disconnect();
        } catch (e) { }
      } 
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // Close sidebar on escape or when viewport >= md
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    
    <header
      className={`fixed top-4 left-1/2 z-[60] transform -translate-x-1/2 transition-all duration-300
    ${isScrolled ? "w-[90%] md:w-auto" : "w-[92%] md:w-[80%]"}`}
    >
      <nav
        className={`relative flex items-center justify-between px-4 md:px-6 py-3 transition-all duration-300 overflow-hidden
      ${isScrolled
            ? "backdrop-blur-xl bg-transparent rounded-full border border-transparent shadow-[0_8px_24px_rgba(0,0,0,0.35)] w-auto max-w-full"
            : "bg-gradient-to-r from-[#0f0f0f]/95 to-[#1a1a1a]/95 rounded-full border border-gray-800 shadow-[0_8px_30px_rgba(0,0,0,0.45)]"}`}
        aria-label="Main navigation"
      >
        {/* Logo: Hides on scroll */}
        <div
          className={`flex items-center space-x-2 text-white font-semibold text-lg transition-all duration-300 shrink-0 ${isScrolled ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"
            }`}
        >
         <div className="flex items-center space-x-2">
        {/* Replaced SVG and span with the image */}
        <img 
          src={TechSpreadLogo} 
          alt="TechSpread Logo" 
          className="h-8 md:h-10 object-contain" // Adjust height and object-contain for better fit
          // You might need to add specific width/height if the header's total width changes
          // style={{ height: '32px' }} // Example fixed height if needed
        />
        <span className="text-xl font-bolder ">TechSpread</span>
      </div>
        </div>

        {/* Desktop links container: Centered and compacted on scroll */}
        <div
          ref={linksContainerRef}
          className={`hidden md:flex items-center relative transition-all duration-300 mx-auto ${isScrolled ? "space-x-4" : "space-x-6"}`}
          style={{ minWidth: 0 }}
        >
          {links.map((link, idx) => (
            <NavLink
              key={link.path}
              to={link.path}
              ref={(el) => setLinkRef(el, idx)}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full font-semibold text-sm transition-all duration-200 relative z-10 whitespace-nowrap ${isActive ? "text-white" : "text-gray-300 hover:text-white hover:bg-[#222]/70"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Underline */}
          <span
            className={`absolute -bottom-1 h-[3px] bg-gradient-to-r from-purple-600 to-indigo-500 rounded-full transition-all duration-250 ease-out`}
            style={{
              left: activeLinkPos.width > 0 ? activeLinkPos.left : 0,
              width: activeLinkPos.width > 0 ? activeLinkPos.width : 0,
              opacity: activeLinkPos.width > 0 ? 1 : 0,
            }}
          />
        </div>

        {/* Desktop login: Hides on scroll */}
        {/* <div className={`hidden md:flex items-center ml-4 transition-opacity duration-300 shrink-0 ${isScrolled ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"}`}>
          <NavLink to="/login"
            className={`flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-semibold px-5 py-2
            rounded-full hover:scale-105 transition-transform duration-200 shadow-[0_6px_16px_rgba(139,92,246,0.35)]`} aria-label="Login">
            <ArrowRightCircle size={18} />
            <span className="text-sm">Login</span>
          </NavLink>
        </div> */}

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="relative w-10 h-10 flex items-center justify-center text-white"
          >
            {!menuOpen ? (
              <Menu size={24} />
            ) : (
              <div className="relative w-7 h-7 flex items-center justify-center">
                <X size={24} className="absolute text-white" />
                <X size={12} className="absolute text-purple-400" style={{ transform: "translate(5px,-5px) rotate(12deg)" }} />
              </div>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-screen md:hidden w-11/12 max-w-xs bg-[#0f0f0f]/95 backdrop-blur-xl border-l border-gray-800 z-[65]
      transform transition-transform duration-400 ease-in-out
      ${menuOpen ? "translate-x-0 opacity-100 pointer-events-auto" : "translate-x-full opacity-0 pointer-events-none"}`}
        aria-hidden={!menuOpen}
      >
        {/* internal close (double-X) */}
        <div className="flex items-center justify-end p-4">
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close sidebar"
            className="relative w-10 h-10 flex items-center justify-center text-white"
          >
            <X size={22} className="absolute text-white" />
            <X size={12} className="absolute text-purple-400" style={{ transform: "translate(-5px,5px) rotate(-12deg)" }} />
          </button>
        </div>

        <nav className="flex-1 flex flex-col items-center justify-center space-y-6 px-6">
          {links.map((l) => (
            <NavLink
              key={l.path}
              to={l.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `w-full text-center text-lg font-semibold px-4 py-3 rounded-lg transition-all ${isActive ? "text-white bg-[#222]/80" : "text-gray-300 hover:text-white hover:bg-[#222]/70"
                }`
              }
            >
              {l.name}
            </NavLink>
          ))}

          {/* <NavLink
            to="/login"
            onClick={() => setMenuOpen(false)}
            className="mt-4 w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-semibold px-5 py-3 rounded-lg hover:scale-[1.02] transition-transform duration-150 text-center"
          >
            <ArrowRightCircle size={18} />
            <span>Login</span>
          </NavLink> */}
        </nav>

        <div className="p-4 text-center text-xs text-gray-400">© {new Date().getFullYear()} TechSpread</div>
      </aside>
    </header>
  );
}

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
  const linkRefs = useRef([]);
  linkRefs.current = [];

  const setLinkRef = (el, idx) => {
    linkRefs.current[idx] = el;
  };

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

    const onResize = () => computeActive();
    window.addEventListener("resize", onResize);

    let ro;
    try {
      ro = new ResizeObserver(() => computeActive());
      if (linksContainerRef.current) ro.observe(linksContainerRef.current);
      linkRefs.current.forEach((el) => el && ro.observe(el));
    } catch (e) {}

    return () => {
      window.removeEventListener("resize", onResize);
      if (ro) {
        try {
          if (linksContainerRef.current) ro.unobserve(linksContainerRef.current);
          linkRefs.current.forEach((el) => el && ro.unobserve(el));
          ro.disconnect();
        } catch (e) {}
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

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
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
        isScrolled ? "py-2" : "py-4"
      }`}
    >
      <nav
        className={`relative flex items-center justify-between transition-all duration-500 ease-in-out overflow-hidden mx-auto max-w-7xl
        ${
          isScrolled
            ? "backdrop-blur-xl bg-black/30 border-b border-white/10 rounded-full border md:w-max md:px-6 md:py-2 w-12 h-12 p-0 ml-auto mr-6" 
            : "bg-gradient-to-r from-[#0f0f0f]/95 to-[#1a1a1a]/95 border-gray-800 shadow-[0_8px_30px_rgba(0,0,0,0.45)] rounded-full px-6 py-2"
        }`}
        aria-label="Main navigation"
      >
        <div
          className={`flex items-center space-x-3 transition-all duration-500 ease-in-out shrink-0 ${
            isScrolled
              ? "opacity-0 scale-95 pointer-events-none absolute"
              : "opacity-100 scale-100 "
          }`}
        >
          <img
            src={TechSpreadLogo}
            alt="TechSpread Logo"
            className="h-8 md:h-10 w-auto object-contain"
          />
          <span className="text-2xl md:text-3xl font-bold">
            <span className="bg-gradient-to-r from-[#00D4FF] via-[#5E9FE3] to-[#8B7AC8] bg-clip-text text-transparent">
              Tech
            </span>
            <span className="bg-gradient-to-r from-[#8B7AC8] via-[#A855F7] to-[#B24BF3] bg-clip-text text-transparent">
              Spread
            </span>
          </span>
        </div>

        <div
          ref={linksContainerRef}
          className={`hidden md:flex items-center relative transition-all duration-500 ease-in-out space-x-4 justify-around ${
            isScrolled ? "mx-auto border-rounded w-max" : "mx-auto"
          }`} 
        >
          {links.map((link, idx) => (
            <NavLink
              key={link.path}
              to={link.path}
              ref={(el) => setLinkRef(el, idx)}
              className={({ isActive }) =>
                `${
                  isScrolled ? "px-2 py-2  text-s" : "px-4 py-2 text-sm " 
                } rounded-full font-semibold transition-all duration-300 ease-in-out relative z-10 whitespace-nowrap last:mr-0 ${
                  isActive
                    ? "text-white"
                    : "text-gray-300 hover:text-white hover:bg-[#222]/70"
                } ${isScrolled ? "" : ""}`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <span
            className={`absolute -bottom-1 h-[3px] bg-gradient-to-r from-purple-600 to-indigo-500 rounded-full transition-all duration-400 ease-out`}
            style={{
              left: activeLinkPos.width > 0 ? activeLinkPos.left : 0,
              width: activeLinkPos.width > 0 ? activeLinkPos.width : 0,
              opacity: activeLinkPos.width > 0 ? 1 : 0,
            }}
          />
        </div>

        <div className={`md:hidden flex items-center justify-center transition-all duration-500 ease-in-out ${isScrolled ? "w-full h-full" : ""}`}>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="relative w-10 h-10 flex items-center justify-center text-white transition-transform duration-300 ease-in-out hover:scale-110 active:scale-95"
          >
            {!menuOpen ? (
              <Menu size={24} className="transition-transform duration-300 ease-in-out" />
            ) : (
              <div className="relative w-7 h-7 flex items-center justify-center">
                <X size={24} className="absolute text-white transition-all duration-300 ease-in-out animate-spin-slow" />
                <X
                  size={12}
                  className="absolute text-purple-400 transition-all duration-300 ease-in-out"
                  style={{ transform: "translate(5px,-5px) rotate(12deg)" }}
                />
              </div>
            )}
          </button>
        </div>
      </nav>

      <aside
        className={`fixed top-0 right-0 h-screen md:hidden w-11/12 max-w-xs bg-[#0f0f0f]/95 backdrop-blur-xl border-l border-gray-800 z-[65]
        transform transition-all duration-500 ease-in-out ${
          menuOpen
            ? "translate-x-0 opacity-100 pointer-events-auto"
            : "translate-x-full opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="flex items-center justify-end p-4">
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close sidebar"
            className="relative w-10 h-10 flex items-center justify-center text-white transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-90 active:scale-95"
          >
            <X size={22} className="absolute text-white transition-all duration-300 ease-in-out" />
            <X
              size={12}
              className="absolute text-purple-400 transition-all duration-300 ease-in-out"
              style={{ transform: "translate(-5px,5px) rotate(-12deg)" }}
            />
          </button>
        </div>

        <nav className="flex-1 flex flex-col items-center justify-center space-y-6 px-6">
          {links.map((l) => (
            <NavLink
              key={l.path}
              to={l.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `w-full text-center text-lg font-semibold px-4 py-3 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1 active:scale-95 ${
                  isActive
                    ? "text-white bg-[#222]/80"
                    : "text-gray-300 hover:text-white hover:bg-[#222]/70"
                }`
              }
            >
              {l.name}
            </NavLink>
          ))}
        </nav>

        <div className="p-4 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} TechSpread
        </div>
      </aside>
    </header>
  );
}

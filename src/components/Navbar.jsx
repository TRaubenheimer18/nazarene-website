import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Effect to handle the "Floating" look when the user scrolls
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper to highlight the active tab
  const isActive = (path) => location.pathname === path;

  return (
    <nav 
      className={`fixed w-full z-[100] transition-all duration-500 px-6 ${
        isScrolled ? "top-4" : "top-0"
      }`}
    >
      <div 
        className={`max-w-7xl mx-auto transition-all duration-500 flex justify-between items-center overflow-hidden ${
          isScrolled 
          ? "bg-white/80 backdrop-blur-xl shadow-2xl shadow-navy/10 rounded-[2rem] border border-white/20 p-4 px-8" 
          : "bg-transparent py-8 px-4"
        }`}
      >
        {/* Logo Section */}
        <Link to="/" className="flex flex-col group">
          <h1 className={`text-xl font-black tracking-tighter transition-colors duration-300 ${
            isScrolled ? "text-navy" : "text-navy"
          }`}>
            NAZARENE <span className={isScrolled ? "text-logo-teal" : "text-sunset"}>DISTRICT</span>
          </h1>
          <span className={`text-[8px] font-black uppercase tracking-[0.4em] transition-opacity ${
            isScrolled ? "text-fynbos opacity-60" : "text-fynbos opacity-80"
          }`}>
            Western Cape
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center space-x-1">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Churches", path: "/churches" },
            { name: "Ministries", path: "/ministries" },
            { name: "Events", path: "/events" },
            { name: "College", path: "/college" },
            { name: "Contact", path: "/contact" },
          ].map((tab) => (
            <Link
              key={tab.name}
              to={tab.path}
              className={`relative px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 rounded-xl hover:bg-sunset/10 ${
                isScrolled 
                  ? (isActive(tab.path) ? "text-sunset" : "text-navy hover:text-sunset") 
                  : (isActive(tab.path) ? "text-sunset" : "text-fynbos hover:text-sunset")
              }`}
            >
              {tab.name}
              {isActive(tab.path) && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-sunset rounded-full"></div>
              )}
            </Link>
          ))}
        </div>

        {/* Action Button - The "Give" or "Join" CTA */}
        {/* <Link 
          to="/contact" 
          className={`hidden md:block px-6 py-2.5 rounded-full font-black text-[10px] uppercase tracking-widest transition-all duration-300 ${
            isScrolled 
            ? "bg-navy text-white hover:bg-sunset shadow-lg" 
            : "bg-white text-navy hover:bg-sunset hover:text-white"
          }`}
        >
          Get Involved
        </Link> */}

        {/* Mobile Menu Icon Placeholder */}
        <div className="lg:hidden">
          <div className={`w-6 h-[2px] mb-1 ${isScrolled ? "bg-navy" : "bg-white"}`}></div>
          <div className={`w-6 h-[2px] ${isScrolled ? "bg-navy" : "bg-white"}`}></div>
        </div>
      </div>
    </nav>
  );
}
"use client";
import { motion } from "framer-motion";
import { useState } from "react";

interface NavbarProps {
  settings?: any;
}

export default function Navbar({ settings }: NavbarProps) {  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo - Mobile + Desktop */}
        <div className="flex items-center space-x-2">
          <span className="text-xl md:text-2xl font-light tracking-wider whitespace-nowrap">
            {settings?.logo || "∧∩"}
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-sm hover:text-primary transition">
            {settings?.navHome || "HOME"}  
          </a>
          <a href="#work" className="text-sm hover:text-primary transition">
            {settings?.navWork || "WORK"}  
          </a>
          <a href="#about" className="text-sm hover:text-primary transition">
            {settings?.navAbout || "ABOUT"} 
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button 
          className="md:hidden p-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-black/95 border-t border-gray-800"
        >
          <div className="px-6 py-4 space-y-4">
            <a 
              href="#home" 
              className="block text-sm hover:text-primary transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {settings?.navHome || "HOME"}
            </a>
            <a 
              href="#work" 
              className="block text-sm hover:text-primary transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {settings?.navWork || "WORK"}
            </a>
            <a 
              href="#about" 
              className="block text-sm hover:text-primary transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {settings?.navAbout || "ABOUT"}
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

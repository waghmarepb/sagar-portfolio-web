'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, SOCIALS } from "@/constants";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  
  const titles = ["Flutter Developer", "Full-Stack Dev"];

  const closeMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#03001427] backdrop-blur-md shadow-lg shadow-[#2A0E61]/50 z-50">
      <div className="flex items-center justify-between h-[70px] px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Logo & Name */}
        <Link 
          href="#about-me" 
          className="flex items-center gap-2" 
          onClick={closeMenu}
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={40}
            height={40}
            draggable={false}
            className="cursor-pointer"
          />
          <div className="hidden sm:flex items-center font-bold tracking-wide text-xs lg:text-sm">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 whitespace-nowrap">
              Sagar Kumbhar
            </span>
            <span className="text-gray-300 mx-2">|</span>
            <div className="relative overflow-hidden h-5 flex items-center min-w-[140px] w-[140px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentTitleIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ 
                    duration: 0.5,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 flex items-center text-gray-300 whitespace-nowrap"
                >
                  {titles[currentTitleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-3 bg-[rgba(3,0,20,0.37)] px-3 xl:px-4 py-1.5 rounded-full border border-[rgba(112,66,248,0.38)] text-gray-200">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.title} 
              href={link.link} 
              className="hover:text-[rgb(112,66,248)] transition font-medium flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-[rgba(112,66,248,0.1)] text-xs whitespace-nowrap"
            >
              <span className="text-xs">{link.icon}</span>
              <span>{link.title}</span>
            </Link>
          ))}
          
          {/* Resume Download Button - Integrated into navigation */}
          <Link 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-3 py-1.5 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 text-xs whitespace-nowrap ml-2"
          >
            📄 Resume
          </Link>
        </div>

        {/* Social Links (Desktop) */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-4">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link 
              key={name} 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Icon className="h-6 w-6 text-white hover:text-[rgb(112,66,248)] transition" />
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white text-3xl flex items-center justify-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 w-3/4 sm:w-1/2 h-screen bg-[#030014]/80 backdrop-blur-lg shadow-lg flex flex-col items-center justify-center text-gray-300 lg:hidden"
          >
            {/* Close Button */}
            <button
              className="absolute top-5 right-6 text-white text-3xl"
              onClick={closeMenu}
            >
              ✖
            </button>

            {/* Mobile Links */}
            <div className="flex flex-col items-center space-y-8 text-lg font-medium">
              {NAV_LINKS.map((link) => (
                <Link 
                  key={link.title} 
                  href={link.link} 
                  onClick={closeMenu} 
                  className="hover:text-[rgb(112,66,248)] transition flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-[rgba(112,66,248,0.1)]"
                >
                  <span className="text-xl">{link.icon}</span>
                  <span>{link.title}</span>
                </Link>
              ))}
              
              {/* Mobile Resume Button - Integrated into navigation */}
              <Link 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-2 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 text-lg flex items-center gap-3"
              >
                <span className="text-xl">📄</span>
                <span>Resume</span>
              </Link>
            </div>

            {/* Mobile Social Icons */}
            <div className="flex space-x-6 mt-8">
              {SOCIALS.map(({ link, name, icon: Icon }) => (
                <Link 
                  key={name} 
                  href={link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Icon className="h-8 w-8 text-white hover:text-[rgb(112,66,248)] transition" />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

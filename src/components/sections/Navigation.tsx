"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

/**
 * Navigation Component
 * 
 * A pixel-perfect clone of the LaCrosse Wagon Hitch header.
 * Features:
 * - Top navigation bar with #EDDCC4 background.
 * - Site title on the left.
 * - Desktop menu with dropdown and mobile responsive hamburger menu.
 * - Light theme consistent with the "Rustic Elegance" design system.
 */

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  return (
    <header className="w-full bg-[#EDDCC4] border-b border-[#EDDCC4] z-50">
      <div className="container mx-auto max-w-[1200px] px-5 h-[70px] flex items-center justify-between">
        
        {/* Left Side: Site Title */}
        <div className="flex items-center">
          <Link 
            href="/" 
            className="text-[24px] font-semibold leading-[1.2] text-black hover:text-[#A66B3F] transition-colors duration-200"
          >
            LaCrosse Wagon Hitch
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-[20px]">
          <div 
            className="relative group"
            onMouseEnter={() => setIsAboutDropdownOpen(true)}
            onMouseLeave={() => setIsAboutDropdownOpen(false)}
          >
            <div className="flex items-center cursor-pointer text-[14px] font-medium leading-[1.5] text-black hover:text-[#A66B3F] transition-colors duration-200 py-2">
              <Link href="/">About LaCrosse Wagon Hitch</Link>
              <ChevronDown className="ml-1 w-4 h-4 opacity-50" strokeWidth={2.5} />
            </div>

            {/* Dropdown Menu */}
            {isAboutDropdownOpen && (
              <ul className="absolute left-0 top-full bg-white min-w-[150px] shadow-md py-2 border border-gray-100 z-50">
                <li>
                  <Link 
                    href="/about/contact" 
                    className="block px-4 py-2 text-[14px] text-black hover:bg-gray-50 hover:text-[#A66B3F] transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <Link 
            href="/our-wagons-carriage" 
            className="text-[14px] font-medium leading-[1.5] text-black hover:text-[#A66B3F] transition-colors duration-200"
          >
            Our Carriage & Wagons
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-black"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#EDDCC4] border-t border-black/5 pb-6">
          <nav className="flex flex-col px-5 pt-4 space-y-4">
            <div>
              <div className="flex items-center justify-between text-[14px] font-medium text-black py-2">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                  About LaCrosse Wagon Hitch
                </Link>
                <button 
                  onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                  className="p-1"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform ${isAboutDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
              
              {isAboutDropdownOpen && (
                <div className="pl-4 mt-2 flex flex-col space-y-2 border-l border-black/10">
                  <Link 
                    href="/about/contact" 
                    className="text-[13px] text-black/80 py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </div>
              )}
            </div>

            <Link 
              href="/our-wagons-carriage" 
              className="text-[14px] font-medium text-black py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Carriage & Wagons
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;
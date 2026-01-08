"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="w-full bg-[#F0D9BC] border-b border-[#CCBCA4] font-sans">
      {/* Desktop Header Container */}
      <div className="max-w-[1240px] mx-auto px-5 lg:px-10 h-[80px] flex items-center justify-between">
        {/* Site Identity */}
        <div className="flex items-center">
          <Link
            href="/"
            className="text-[24px] font-semibold tracking-[-0.01em] text-black hover:opacity-80 transition-opacity"
          >
            LaCrosse Wagon Hitch
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 h-full">
          <div 
            className="relative h-full flex items-center group"
            onMouseEnter={() => setIsAboutDropdownOpen(true)}
            onMouseLeave={() => setIsAboutDropdownOpen(false)}
          >
            <Link
              href="/"
              className="text-[14px] font-normal text-black flex items-center gap-1 hover:text-[#A16A46] transition-colors"
            >
              About LaCrosse Wagon Hitch
              <ChevronDown className="w-4 h-4 text-[#000000]" />
            </Link>
            
            {/* Dropdown Menu */}
            {isAboutDropdownOpen && (
              <div className="absolute top-[80px] left-0 bg-[#FBF0E2] border border-[#CCBCA4] min-w-[180px] z-50 shadow-sm">
                <ul className="py-2">
                  <li>
                    <Link
                      href="/about/contact"
                      className="block px-4 py-2 text-[14px] text-black hover:bg-[#F0D9BC] hover:text-[#A16A46] transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <Link
            href="/our-wagons-carriage"
            className="text-[14px] font-normal text-black hover:text-[#A16A46] transition-colors"
          >
            Our Carriage & Wagons
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="p-2 text-black"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#FBF0E2] border-t border-[#CCBCA4] w-full">
          <nav className="px-5 py-4 flex flex-col space-y-4">
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <Link
                  href="/"
                  className="text-[14px] font-normal text-black py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About LaCrosse Wagon Hitch
                </Link>
                <button 
                  onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                  className="p-2"
                >
                  <ChevronDown className={`w-4 h-4 transform transition-transform ${isAboutDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
              {isAboutDropdownOpen && (
                <ul className="pl-4 border-l border-[#CCBCA4] mt-2 mb-2">
                  <li>
                    <Link
                      href="/about/contact"
                      className="block py-2 text-[14px] text-black hover:text-[#A16A46]"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              )}
            </div>
            <Link
              href="/our-wagons-carriage"
              className="text-[14px] font-normal text-black py-2"
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

export default Header;
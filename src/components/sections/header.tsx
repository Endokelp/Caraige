"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header
      id="masthead"
      className="site-header w-full bg-[#EDD6C0] border-b border-transparent"
    >
      <div className="container mx-auto max-w-[1200px] px-5">
        <div className="flex items-center justify-between h-[70px]">
          {/* Site Title */}
          <div className="site-branding">
            <span className="site-title text-[24px] font-normal tracking-tight">
              <a
                href="/"
                className="text-black hover:no-underline transition-colors duration-200"
              >
                LaCrosse Wagon Hitch
              </a>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-6">
              <li
                className="relative group"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <div className="flex items-center cursor-pointer">
                  <a
                    href="/"
                    className="nav-link text-[14px] text-black hover:text-[#A16038] hover:no-underline transition-colors duration-200 py-2"
                  >
                    About LaCrosse Wagon Hitch
                  </a>
                  <ChevronDown
                    className={`ml-1 w-4 h-4 text-black group-hover:text-[#A16038] transition-transform duration-200 ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <ul className="absolute left-0 top-full w-48 bg-[#EDD6C0] border border-[#d6bca3] shadow-sm z-50 animate-in fade-in slide-in-from-top-1 duration-200">
                    <li className="border-b border-[#d6bca3] last:border-0">
                      <a
                        href="/about/contact"
                        className="block px-4 py-3 text-[14px] text-black hover:bg-[#f5e4d4] hover:text-[#A16038] hover:no-underline transition-colors"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <a
                  href="/our-wagons-carriage"
                  className="nav-link text-[14px] text-black hover:text-[#A16038] hover:no-underline transition-colors duration-200 py-2"
                >
                  Our Carriage & Wagons
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-black focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Content */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#EDD6C0] border-t border-[#d6bca3] py-4">
          <ul className="flex flex-col px-5 space-y-4">
            <li>
              <div className="flex flex-col">
                <div className="flex items-center justify-between border-b border-[#d6bca3] pb-2">
                  <a
                    href="/"
                    className="text-[14px] text-black font-normal"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About LaCrosse Wagon Hitch
                  </a>
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="p-1"
                  >
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-200 ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
                {isDropdownOpen && (
                  <ul className="pl-4 mt-2 space-y-2 border-l border-[#d6bca3]">
                    <li>
                      <a
                        href="/about/contact"
                        className="text-[13px] text-black block py-1"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                )}
              </div>
            </li>
            <li className="border-b border-[#d6bca3] pb-2">
              <a
                href="/our-wagons-carriage"
                className="text-[14px] text-black font-normal"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Carriage & Wagons
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
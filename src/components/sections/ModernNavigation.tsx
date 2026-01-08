"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Our Wagons & Carriages", href: "/wagons" },
  { name: "Contact", href: "/contact" },
];

export default function ModernNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = pathname === "/";

  // To avoid hydration mismatch, we determine the transparency after mount
  // On server and initial client render, we default to the solid/colored state
  // This ensures consistency and then we "fade in" the transparency on the home page
  const [isTransparent, setIsTransparent] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsTransparent(isHomePage && !scrolled);
  }, [isHomePage, scrolled]);

  // The effective "scrolled" state for styling purposes
  // If not transparent, we use the "scrolled" (solid) style
  const isScrolledStyle = !isTransparent;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#FBF0E2] z-[60] transition-all duration-300 md:hidden flex flex-col items-center justify-center ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8 pointer-events-none"
          }`}
      >
        <div className="flex flex-col items-center justify-center space-y-10 p-8 w-full">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-3xl font-serif tracking-wide transition-colors ${pathname === link.href ? "text-[#A16A46]" : "text-[#1A1A1A] hover:text-[#A16A46]"
                }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="bg-[#1A1A1A] text-white py-4 px-12 text-center font-medium tracking-widest uppercase text-sm w-full max-w-[280px] mt-6 hover:bg-[#A16A46] transition-colors shadow-lg"
          >
            Book Now
          </Link>
        </div>
      </div>

      <nav
        className={`fixed top-0 left-0 right-0 z-[70] transition-all duration-300 ${isOpen
          ? "bg-transparent py-4 text-foreground"
          : (isHomePage
            ? (scrolled
              ? "bg-[#F0D9BC]/95 backdrop-blur-md shadow-sm py-4 text-foreground"
              : "bg-transparent py-6 text-white")
            : "bg-[#F0D9BC]/95 backdrop-blur-md shadow-sm py-4 text-foreground")
          }`}
      >
        <div className="container flex items-center justify-between">
          <Link
            href="/"
            className="flex flex-col relative z-[100] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <span className={`font-serif text-2xl md:text-3xl font-semibold tracking-tight leading-none ${(isTransparent && !isOpen) ? "drop-shadow-md" : ""}`}>
              LaCrosse
            </span>
            <span className={`text-[10px] md:text-xs uppercase tracking-[0.3em] font-light mt-1 ${((isScrolledStyle || isOpen)) ? "text-muted-foreground" : "text-white/80 drop-shadow-sm"
              }`}>
              Wagon Hitch
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm uppercase tracking-widest font-medium transition-colors hover:text-accent ${pathname === link.href
                  ? "text-accent"
                  : (isScrolledStyle ? "text-foreground" : "text-white drop-shadow-sm")
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contact" className="button-primary text-xs py-2 px-6">
              Book Now
            </Link>
          </div>

          <button
            className={`md:hidden flex items-center justify-center w-12 h-12 transition-all duration-300 relative z-[100] rounded-sm border-2 ${isOpen
              ? "border-[#A16A46] bg-transparent text-foreground"
              : (isScrolledStyle ? "border-transparent text-foreground" : "border-transparent text-white")
              }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} strokeWidth={1.5} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>
    </>
  );
}

"use client";

import { useState, useEffect } from "react";
import { HiMenu, HiX, HiSun, HiMoon } from "react-icons/hi";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { name: "Paslaugos", href: "#paslaugos" },
  { name: "Mūsų darbai", href: "#darbai" },
  { name: "Kainos", href: "#kainos" },
  { name: "DUK", href: "#duk" },
  { name: "Kontaktai", href: "#kontaktai" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg dark:shadow-gray-900/50"
          : "bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <Image
              src="/icon.webp"
              alt="WEBZY"
              width={280}
              height={90}
              className="h-16 md:h-20 w-auto transition-all duration-300 brightness-0 dark:brightness-100"
              priority
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <HiSun className="w-5 h-5 text-yellow-400" />
              ) : (
                <HiMoon className="w-5 h-5" />
              )}
            </button>

            <a
              href="#kontaktai"
              className="btn-primary text-sm !py-2 !px-5"
            >
              Nemokama konsultacija
            </a>
          </div>

          {/* Mobile: theme toggle + hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 transition-all"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <HiSun className="w-5 h-5 text-yellow-400" />
              ) : (
                <HiMoon className="w-5 h-5" />
              )}
            </button>
            <button
              className="text-2xl text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Meniu"
            >
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-4 space-y-2 bg-white dark:bg-gray-900 border-t dark:border-gray-800">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#kontaktai"
            onClick={() => setIsOpen(false)}
            className="block text-center btn-primary text-sm !py-2 !px-5 mt-3"
          >
            Nemokama konsultacija
          </a>
        </div>
      </div>
    </nav>
  );
}

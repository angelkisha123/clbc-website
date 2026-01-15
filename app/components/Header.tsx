"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-slate-900 shadow-lg"
          : "bg-slate-900/70 backdrop-blur-sm"
      } py-3 px-5`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <img
            src="/images/logo.png"
            alt="CLBC Logo"
            width={70}
            height={55}
            className="transition-all duration-100
              group-hover:scale-105
              group-hover:drop-shadow-[0_0_12px_rgba(236,72,153,0.9)]"
          />
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-white mb-1" />
          <span className="block w-6 h-0.5 bg-white mb-1" />
          <span className="block w-6 h-0.5 bg-white" />
        </button>

        {/* Nav */}
        <nav
          className={`
            flex flex-col md:flex-row gap-4 md:gap-10
            absolute md:static top-full left-0 w-full md:w-auto
            bg-slate-900/95 md:bg-transparent
            transition-all duration-300
            ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}
            md:opacity-100 md:visible
            py-6 md:py-0
          `}
        >
          <Link href="/" className="hover:text-pink-400">HOME</Link>
          <Link href="/#about" className="hover:text-pink-400">ABOUT</Link>
          <Link href="/#ministry" className="hover:text-pink-400">MINISTRIES</Link>
          <Link href="/#event" className="hover:text-pink-400">EVENTS</Link>
          <Link href="/#giving" className="hover:text-pink-400">GIVING</Link>
          <Link href="/osk" className="hover:text-pink-400">OSK</Link>
        </nav>
      </div>
    </header>
  );
}

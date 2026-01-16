"use client";

import styles from "./Header.module.css";
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

  // Close menu when clicking a link
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Backdrop */}
      {menuOpen && (
        <div className={styles.backdrop} onClick={() => setMenuOpen(false)} />
      )}

      <header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
      >
        <div className={styles.container}>
          {/* Logo */}
          <Link href="/" className={styles.logo} onClick={handleLinkClick}>
            <img
              src="/images/logo.png"
              alt="CLBC Logo"
              width={70}
              height={55}
            />
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`${styles.hamburger} ${menuOpen ? styles.active : ""}`}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>

          {/* Nav */}
          <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
            <Link href="/" onClick={handleLinkClick}>
              HOME
            </Link>
            <Link href="/#about" onClick={handleLinkClick}>
              ABOUT
            </Link>
            <Link href="/#ministry" onClick={handleLinkClick}>
              MINISTRIES
            </Link>
            <Link href="/#osk" onClick={handleLinkClick}>
              OSK
            </Link>
            <Link href="/#event" onClick={handleLinkClick}>
              EVENTS
            </Link>
            <Link href="/#giving" onClick={handleLinkClick}>
              GIVING
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}

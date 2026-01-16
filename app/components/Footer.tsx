"use client";

import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {/* Animated glow accents */}
      <div className={styles.glowPink} />
      <div className={styles.glowCyan} />
      <div className={styles.glowPurple} />

      <div className={styles.container}>
        {/* Top grid */}
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brand}>
            <a href="#" className={styles.logoLink}>
              <img
                src="/images/logo.png"
                alt="City Life Building Church"
                width={70}
                height={55}
              />
            </a>
            <p className={styles.description}>
              City Life Building Church is committed to building lives,
              strengthening families, and sharing God's love through worship,
              discipleship, and community outreach.
            </p>
            
            {/* Social Media Links */}
            <div className={styles.socialLinks}>
              <a href="https://www.facebook.com/profile.php?id=61565433265005" className={styles.socialIcon} aria-label="Facebook">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.links}>
            <h4>Quick Links</h4>
            <Link href="/#about">About</Link>
            <Link href="/#ministry">Ministries</Link>
            <Link href="/#osk">OSK</Link>
            <Link href="/#event">Events</Link>
            <Link href="/#giving">Giving</Link>
          </div>

          {/* Service Info */}
          <div className={styles.info}>
            <h4>Service Schedule</h4>
            <div className={styles.infoItem}>
              <svg className={styles.icon} width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                <path strokeWidth="2" strokeLinecap="round" d="M12 6v6l4 2"/>
              </svg>
              <p>Sunday Worship: 9:00 AM & 4:00 PM</p>
            </div>
            <div className={styles.infoItem}>
              <svg className={styles.icon} width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <p>Poblacion Oriental Consolacion, Cebu</p>
            </div>

            <h4 className={styles.infoTitle}>Contact</h4>
            <div className={styles.infoItem}>
              <svg className={styles.icon} width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <p>citylifebuildingchurch@gmail.com</p>
            </div>
            <div className={styles.infoItem}>
              <svg className={styles.icon} width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <p>+63 966 166 6997</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Bottom */}
        <div className={styles.bottom}>
          <p>
            © {year} City Life Building Church Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
"use client";

import { useEffect, useState } from "react";
import styles from "../styles/join-us.module.css";

export default function JoinUs() {
  const [timeLeft, setTimeLeft] = useState(" ");

  useEffect(() => {
    const getNextSundayPH = () => {
      const now = new Date();

      // Convert current time to PH time (UTC+8)
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const phNow = new Date(utc + 8 * 60 * 60000);

      // Find next Sunday
      const daysUntilSunday = (7 - phNow.getDay()) % 7;
      phNow.setDate(phNow.getDate() + daysUntilSunday);

      // Set to 3:00 PM PH time
      phNow.setHours(15, 0, 0, 0);

      return phNow;
    };

    const target = getNextSundayPH();

    const timer = setInterval(() => {
      const now = new Date();
      const diff = target.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft("Happening Now!");
        clearInterval(timer);
        return;
      }

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / (1000 * 60)) % 60);
      const s = Math.floor((diff / 1000) % 60);

      setTimeLeft(`${d}d ${h}h ${m}m ${s}s`);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="join-us" className={styles.join}>
      <div className={styles.overlay} />

      <p className={styles.countdown}>
        Next Service Starts In: <span>{timeLeft}</span>
      </p>

      <div className={styles.container}>
        <h2 className={styles.title}>Join Us This Sunday</h2>

        <p className={styles.description}>
          We'd love to worship with you! Whether it's your first time or your
          church home, City Life Building Church is a place where you belong.
        </p>

        <div className={styles.grid}>
          {[
            {
              title: "Oras Sa Kaayohan",
              time: "Sunday – 10:00 AM",
              icon: "🙏",
              desc: "A life-changing series that brings hope, faith, and healing through powerful messages.",
            },
            {
              title: "Sunday Worship Service",
              time: "3:00 PM – 6:00 PM",
              icon: "⛪",
              desc: "A powerful time of worship, teaching, and fellowship for the whole family.",
            },
            {
              title: "Kids Ministry",
              time: "During Service",
              icon: "👨‍👩‍👧‍👦",
              desc: "Engaging and faith-filled programs for kids to grow in Christ.",
            },
          ].map((item, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.icon}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.time}>{item.time}</p>
              <p className={styles.cardDesc}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Facebook CTA Button */}
        <div className={styles.fbSection}>
          <div className={styles.fbGlow} />
          <p className={styles.fbText}>
            Stay connected with our church community
          </p>
          <a 
            href="https://www.facebook.com/profile.php?id=61565433265005" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.fbButton}
          >
            <svg className={styles.fbIcon} width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span>Follow Us on Facebook</span>
            <svg className={styles.arrow} width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <p className={styles.fbSubtext}>
            Get updates on events, sermons, and community news
          </p>
        </div>

        <div className={styles.mapWrapper}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.634860819313!2d123.9516379967895!3d10.371052299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a9a2a11335ef55%3A0x3d2979c4a2caea68!2sJCIL-EHM%20CONSOLACION%20-%20CLBC!5e0!3m2!1sen!2sph!4v1768288163796!5m2!1sen!2sph"
            loading="lazy"
          />
        </div>

        <div className={styles.location}>
          <div className={styles.divider} />
          <p>
            📍 <span>Location:</span> City Life Building Church, Thomas P. Go Road
            Riverside, Poblacion Oriental Consolacion, Cebu, Philippines
          </p>
        </div>
      </div>
    </section>
  );
}
"use client";

import { useEffect, useState } from "react";
import styles from "../styles/hero.module.css";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <section className={styles.hero}>
      {/* Particle Layer */}
      <div className={styles.particles}>
        {Array.from({ length: 100 }).map((_, i) => (
          <span
            key={i}
            className={styles.particle}
            style={
              {
                "--x": `${Math.random() * 100}vw`,
                "--size": `${Math.random() * 10 + 6}px`,
                "--duration": `${Math.random() * 10 + 8}s`,
                "--delay": `${Math.random() * -10}s`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      <div className={styles.overlay} />

      <main className={styles.content}>
        <h1 className={styles.title}>Welcome</h1>

        <p className={styles.subtitle}>
          Experience faith, community, and the presence of God at <br />
          <span>City Life Building Church</span>
        </p>

        <a href="#join-us" className={styles.cta}>
          There’s a Place for You Here
        </a>
      </main>
    </section>
  );
}

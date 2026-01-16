"use client";

import styles from "../styles/about.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      {/* Background glows */}
      <div className={styles.glowTop} />
      <div className={styles.glowBottom} />

      <div className={styles.container}>
        {/* Title */}
        <h2 className={styles.title}>About Us</h2>

        {/* Description */}
        <p className={styles.description}>
          City Life Building Church (CLBC) is a Christ-centered community where
          people from all walks of life can encounter the love and truth of
          Jesus. We exist to build lives, strengthen families, and impact our
          city through faith, hope, and love.
        </p>

        {/* Content Card */}
        <div className={styles.card}>
          {/* Image */}
          <img
            src="/images/clbc.jpg"
            alt="Vision"
            className={styles.image}
          />

          {/* Vision Title */}
          <h3 className={styles.visionTitle}>Vision</h3>

          {/* Vision Text */}
          <p className={styles.visionText}>
            Connecting and empowering individual talents driven by God's love
            to become a good witness in the family, community, and beyond.
          </p>
        </div>
      </div>
    </section>
  );
}

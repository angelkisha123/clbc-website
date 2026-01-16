"use client";

import Link from "next/link";
import styles from "../styles/osk.module.css";

export default function Osk() {
  return (
    <section id="osk" className={styles.osk}>
      {/* Background layers */}
      <div className={styles.gridBg} />
      <div className={styles.gradientOverlay} />
      <div className={styles.glowCyan} />
      <div className={styles.glowPink} />
      <div className={styles.scanlines} />

      {/* Content */}
      <div className={styles.container}>
        <h2 className={styles.title}>
         <img src="/images/osk.png" alt="osk"/>
        </h2>

        <p className={styles.description}>
          A weekly life-changing series that brings hope, faith, and
          encouragement through powerful messages and real-life testimonies.
          Be inspired and strengthened in your walk with God as we share
          stories of transformation and purpose every week.
        </p>

        <p className={styles.verse}>
          "Be transformed by the renewing of your mind." — Romans 12:2
        </p>

        <Link href="/osk" className={styles.cta}>
          View All Lessons
        </Link>
      </div>
    </section>
  );
}

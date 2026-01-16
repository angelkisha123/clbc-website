"use client";

import styles from "../styles/programs.module.css";

export default function Programs() {
  const programs = [
    {
      name: "One2One Program",
      icon: "🙏",
      description:
        "Personal discipleship and mentorship journey, walking alongside you in faith and spiritual growth.",
      accent: "cyan",
    },
    {
      name: "Lovers Counseling",
      icon: "💕",
      description:
        "Pre-marital guidance rooted in biblical principles, preparing couples for a Christ-centered relationship.",
      accent: "pink",
    },
    {
      name: "Couples Counseling",
      icon: "💑",
      description:
        "Strengthening marriages through faith-based counseling, communication, and mutual understanding in Christ.",
      accent: "purple",
    },
    {
      name: "Pastor's Maker",
      icon: "📖",
      description:
        "Pastor’s Maker exists to uplift and support pastors through prayer, encouragement, and resources—building a strong spiritual foundation for the entire church.",
      accent: "cyan",
    },
  ];

  return (
    <section id="program" className={styles.programs}>
      {/* Background layers */}
      <div className={styles.overlay} />
      <div className={styles.gridBg} />
      <div className={styles.glowTop} />
      <div className={styles.glowBottom} />

      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>Programs & Counseling</h2>
          <p className={styles.subtitle}>
            Guiding individuals and families in faith, love, and purpose.
          </p>
        </div>

        {/* Program cards */}
        <div className={styles.grid}>
          {programs.map((program, i) => (
            <div key={i} className={styles.card}>
              <div
                className={`${styles.accent} ${styles[program.accent]}`}
              />

              <div className={styles.icon}>{program.icon}</div>

              <h3 className={styles.cardTitle}>{program.name}</h3>

              <p className={styles.description}>
                {program.description}
              </p>

              <div className={styles.corner} />
            </div>
          ))}
        </div>

        {/* Bottom decorative line */}
        <div className={styles.footerLine}>
          <span />
        </div>
      </div>
    </section>
  );
}

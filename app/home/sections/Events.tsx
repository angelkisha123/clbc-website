"use client";

import styles from "../styles/events.module.css";

const events = [
  {
    name: "Family Camp",
    desc: "Strengthening family bonds through worship, teaching, and quality time together in God's presence.",
    icon: "👨‍👩‍👧‍👦",
  },
  {
    name: "Youth Events",
    desc: "Empowering the next generation through worship, fellowship, and discipleship activities.",
    icon: "🙏",
  },
  {
    name: "Youth Camp",
    desc: "A transformative retreat experience focused on spiritual growth and building lasting friendships.",
    icon: "⛺",
  },
  {
    name: "Kids Feeding Program",
    desc: "Sharing God's love through nourishing meals and care for children in our community.",
    icon: "🍞",
  },
  {
    name: "Kids Gift Giving",
    desc: "Bringing joy and hope to children by sharing blessings and celebrating God's generosity.",
    icon: "🎁",
  },
  {
    name: "Church Anniversary",
    desc: "Celebrating God's faithfulness and the journey of our church community throughout the years.",
    icon: "🎉",
  },
];

export default function Events() {
  return (
    <section id="event" className={styles.section}>
      {/* BOKEH BACKGROUND */}
      <div className={styles.bokeh}>
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} />
        ))}
      </div>

      {/* CONTENT */}
      <div className={styles.contentWrapper}>
        <div className={styles.header}>
          <h2 className={styles.title}>Upcoming Events</h2>
          <p className={styles.subtitle}>
            Be part of life-changing events that strengthen faith and build
            community.
          </p>
        </div>

        <div className={styles.timelineWrapper}>
          <div className={styles.centerLine} />

          <div className={styles.timeline}>
            {events.map((event, i) => (
              <div
                key={i}
                className={`${styles.row} ${
                  i % 2 === 0 ? styles.rowNormal : styles.rowReverse
                }`}
              >
                <div className={styles.content}>
                  <div className={styles.card}>
                    <h3 className={styles.cardTitle}>{event.name}</h3>
                    <p className={styles.cardDesc}>{event.desc}</p>
                  </div>
                </div>

                <div className={styles.iconWrapper}>
                  <div className={styles.icon}>{event.icon}</div>
                  <div className={styles.iconPing} />
                </div>

                <div className={styles.spacer} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

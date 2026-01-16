"use client";

import { useState } from "react";
import styles from "../styles/ministries.module.css";

export default function Ministries() {
  const [activeImage, setActiveImage] = useState<{
    ministryIndex: number;
    imageIndex: number;
  } | null>(null);

  const ministries = [
    {
      name: "Youth Ministry",
      images: [
        "/images/youth3.jpg",
        "/images/youth2.jpg",
        "/images/youth1.jpg",
      ],
    },
    {
      name: "Kids Ministry",
      images: [
        "/images/kids3.jpg",
        "/images/kids2.jpg",
        "/images/kids1.jpg",
      ],
    },
    {
      name: "Worship Team",
      images: [
        "/images/wt3.jpg",
        "/images/wt2.jpg",
        "/images/wt1.jpg",
      ],
    },
  ];

  return (
    <section
      id="ministry"
      className={styles.ministry}
      onClick={() => setActiveImage(null)}
    >
      {/* Background layers */}
      <div className={styles.bgGrid} />
      <div className={styles.bgGlowPink} />
      <div className={styles.bgGlowCyan} />

      <div className={styles.container}>
        <h2 className={styles.title}>Our Ministries</h2>

        <p className={styles.subtitle}>
          Serving God and people through passion, purpose, and love
        </p>

        <div className={styles.grid}>
          {ministries.map((ministry, i) => (
            <div
              key={i}
              className={styles.card}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.stack}>
                {ministry.images.map((img, index) => {
                  const isActive =
                    activeImage?.ministryIndex === i &&
                    activeImage?.imageIndex === index;

                  return (
                    <img
                      key={index}
                      src={img}
                      alt={`${ministry.name} ${index + 1}`}
                      className={`${styles.image} ${
                        styles[`img${index}`]
                      } ${isActive ? styles.active : ""}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveImage({
                          ministryIndex: i,
                          imageIndex: index,
                        });
                      }}
                    />
                  );
                })}
              </div>

              <h3 className={styles.name}>{ministry.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

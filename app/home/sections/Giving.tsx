"use client";

import { useState } from "react";
import styles from "../styles/giving.module.css";

export default function Giving() {
  const [activeQR, setActiveQR] = useState<number | null>(null);

  const items = [
    {
      title: "Tithes",
      description:
        "A faithful act of worship that honors God and supports the ministry of the church.",
      image: "/images/tithe.jpeg",
      qr: "/images/qr-gcash.jpg",
      details: "Send your Tithes via GCash: 09661666997\nAccount Name: Lara B.",
    },
    {
      title: "Offerings",
      description:
        "Freewill gifts that empower outreach, missions, and church growth.",
      image: "/images/offering.jpg",
      qr: "/images/qr-gcash.jpg",
      details: "Offerings via GCash: 09661666997\nAccount Name: Lara B.",
    },
    {
      title: "Donations",
      description: "Support community programs and special causes.",
      image: "/images/donation.avif",
      qr: "/images/qr-gcash.jpg",
      details:
        "Donations via GCash: 09661666997\nAccount Name: Lara B.",
    },
  ];

  return (
    <section id="giving" className={styles.giving}>
    

      <div className={styles.container}>
        <h2 className={styles.title}>Giving</h2>
        <p className={styles.subtitle}>
          Your generosity helps us continue building lives, serving our
          community, and sharing God’s love through{" "}
          <span>City Life Building Church</span>.
        </p>

        <div className={styles.grid}>
          {items.map((item, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.imageWrap}>
                <img src={item.image} alt={item.title} />
              </div>

              <div className={styles.cardBody}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <button
                  className={styles.button}
                  onClick={() =>
                    setActiveQR(activeQR === i ? null : i)
                  }
                >
                  {activeQR === i ? "Close" : "Give Now"}
                </button>

                {/* QR Reveal */}
                {activeQR === i && (
                  <div className={styles.qrBox}>
                    <img src={item.qr} alt="QR Code" />
                    <p className={styles.qrText}>
                      {item.details.split("\n").map((line, idx) => (
                        <span key={idx}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className={styles.note}>
          Prefer giving in person? You can also give through{" "}
          <strong>GCash, PayPal, or Bank Transfer</strong>. For more details,
          please contact our finance team or visit our church office.
        </p>
      </div>
    </section>
  );
}

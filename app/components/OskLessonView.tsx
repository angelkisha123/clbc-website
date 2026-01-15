"use client";

import styles from "@/app/osk/[id]/OskLesson.module.css";

export default function OskLessonView({ lesson }: { lesson: any }) {
  return (
    <div className={styles.wrapper}>
      {/* Header */}
      <header>
        <p className={styles.lessonNumber}>OSK {lesson.osk_number}</p>

        <h1 className={styles.title}>{lesson.title}</h1>

        {lesson.facebook_url && (
          <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
            <a
              href={lesson.facebook_url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "0.2rem 1.5rem",
                borderRadius: "999px",
                background: "linear-gradient(90deg, #1877f2, #3b82f6)",
                color: "white",
                fontWeight: 600,
                fontSize: "0.9rem",
                textDecoration: "none",
              }}
            >
              ▶ Watch on Facebook
            </a>
          </div>
        )}

        <div className={styles.divider} />
      </header>

      {/* Content */}
      <main>
        {lesson.content_blocks?.map((block: any, i: number) => {
          if (block.type === "intro") {
            return (
              <div key={i} className={styles.intro}>
                {block.text}
              </div>
            );
          }

          if (block.type === "points_title") {
            return (
              <h2 key={i} className={styles.pointsTitle}>
                {block.title}
              </h2>
            );
          }

          if (block.type === "point") {
            return (
              <section key={i} className={styles.point}>
                <h3 className={styles.pointTitle}>{block.title}</h3>

                {block.verses?.map((v: any, j: number) => (
                  <div key={j} className={styles.verse}>
                    <div className={styles.verseReference}>{v.reference}</div>
                    <div className={styles.verseText}>{v.text}</div>
                  </div>
                ))}
              </section>
            );
          }

          if (block.type === "verse") {
            return (
              <div
                key={i}
                className={`${styles.verse} ${styles.standaloneVerse}`}
              >
                <div className={styles.verseReference}>{block.reference}</div>
                <div className={styles.verseText}>{block.text}</div>
              </div>
            );
          }

          if (block.type === "conclusion") {
            return (
              <div key={i} className={styles.conclusion}>
                {block.text}
              </div>
            );
          }

          return null;
        })}
      </main>
    </div>
  );
}

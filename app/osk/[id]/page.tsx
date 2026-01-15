import { supabaseServer } from "@/lib/supabase-server";
import { notFound } from "next/navigation";
import Link from "next/link";
import styles from "./OskEpisode.module.css";

export default async function OskEpisode({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const oskNumber = Number(id);
  if (Number.isNaN(oskNumber)) return notFound();

  const { data: episode, error } = await supabaseServer
    .from("osk")
    .select("*")
    .eq("osk_number", oskNumber)
    .single();

  if (error || !episode) return notFound();

  return (
    <section className="relative min-h-screen bg-slate-950 text-white py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:18px_18px] pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-pink-500/15 blur-[140px]" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-cyan-500/15 blur-[140px]" />

      <div className={styles.wrapper}>
        <Link
          href="/osk"
          className="inline-block mb-10 text-sm text-gray-400 hover:text-white"
        >
          ← Back to Episodes
        </Link>

        {/* Header */}
        <header className="osk-page-header">
          <p className={styles.episodeNumber}>OSK {episode.osk_number}</p>

          <h1 className={styles.title}>{episode.title}</h1>

          <div className={styles.divider} />
        </header>

        {/* Content */}
        <main>
          {episode.content_blocks?.map((block: any, i: number) => {
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
    </section>
  );
}

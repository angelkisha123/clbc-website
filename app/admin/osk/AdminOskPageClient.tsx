"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Pencil, Trash2, Plus } from "lucide-react";
import Modal from "@/app/components/Modal";
import AddOskForm from "@/app/components/AddOskForm";
import styles from "./AdminOskPageClient.module.css";

type Lesson = {
  id: string;
  osk_number: number;
  title: string;
  created_at: string;
};

export default function AdminOskPageClient({
  lessons,
}: {
  lessons: Lesson[];
}) {
  const [open, setOpen] = useState(false);

  const sortedLessons = useMemo(
    () => [...lessons].sort((a, b) => a.osk_number - b.osk_number),
    [lessons]
  );

  return (
    <section
      className="relative min-h-screen text-white px-6"
      style={{ paddingTop: "25px" }}
    >
      <div className={styles.background} />
      <div className={styles.blurPurple} />
      <div className={styles.blurCyan} />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight">
              OSK Lessons
            </h1>
            <p className="text-slate-400 text-sm mt-2">
              Manage lessons and content
            </p>
          </div>

          <button onClick={() => setOpen(true)} className={styles.addButton}>
            <Plus size={18} />
            Add Lesson
          </button>
        </div>

        {/* Table */}
        {sortedLessons.length > 0 && (
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  {["Lesson", "Title", "Created", "Actions"].map((label) => (
                    <th key={label} className={styles.th}>
                      <span>{label}</span>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {sortedLessons.map((ep) => (
                  <tr key={ep.id} className={styles.tr}>
                    <td className={styles.td} align="center">
                      <span className={styles.lessonBadge}>
                        {ep.osk_number}
                      </span>
                    </td>

                    <td className={styles.td}>
                      <p className={styles.title}>{ep.title}</p>
                    </td>

                    <td className={`${styles.td} ${styles.date}`}>
                      {new Date(ep.created_at).toLocaleDateString()}
                    </td>

                    <td className={styles.td}>
                      <div className={styles.actions}>
                        <Link
                          href={`/admin/osk/${ep.id}/edit`}
                          className={styles.iconButton}
                        >
                          <Pencil size={16} />
                        </Link>

                        <button
                          className={`${styles.iconButton} ${styles.delete}`}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Modal */}
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Add OSK Lesson"
        >
          <AddOskForm
            onSuccess={() => {
              setOpen(false);
              window.location.reload();
            }}
          />
        </Modal>
      </div>
    </section>
  );
}

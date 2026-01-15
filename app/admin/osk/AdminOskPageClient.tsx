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
  facebook_url: string | null;
};

export default function AdminOskPageClient({ lessons }: { lessons: Lesson[] }) {
  const [open, setOpen] = useState(false);

  const sortedLessons = useMemo(
    () => [...lessons].sort((a, b) => a.osk_number - b.osk_number),
    [lessons]
  );
  const [deleteTarget, setDeleteTarget] = useState<{
    id: string;
    title: string;
  } | null>(null);

  const [deleting, setDeleting] = useState(false);

  const handleConfirmDelete = async () => {
    if (!deleteTarget) return;

    setDeleting(true);

    try {
      const res = await fetch("/api/admin/osk/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: deleteTarget.id }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Delete failed");
      }

      setDeleteTarget(null);
      window.location.reload();
    } catch (err: any) {
      alert(err.message || "Something went wrong");
    } finally {
      setDeleting(false);
    }
  };

  return (
    <section
      className="relative min-h-screen text-white px-6 overflow-hidden"
      style={{ paddingTop: "25px", paddingBottom: "50px" }}
    >
      <div className={styles.background} />

      <div className="relative z-10 max-w-6xl mx-auto">
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
                  {["Lesson", "Title", "Facebook", "Created", "Actions"].map(
                    (label) => (
                      <th key={label} className={styles.th}>
                        <span>{label}</span>
                      </th>
                    )
                  )}
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

                    <td className={styles.td} style={{ textAlign: "center" }}>
                      {ep.facebook_url ? (
                        <a
                          href={ep.facebook_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "#60a5fa", fontSize: "0.85rem" }}
                        >
                          View
                        </a>
                      ) : (
                        <span style={{ color: "#64748b", fontSize: "0.8rem" }}>
                          —
                        </span>
                      )}
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
                          onClick={() =>
                            setDeleteTarget({ id: ep.id, title: ep.title })
                          }
                          className={`${styles.iconButton} ${styles.delete}`}
                          title="Delete Lesson"
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

        <Modal
          open={!!deleteTarget}
          onClose={() => !deleting && setDeleteTarget(null)}
          title="Delete Lesson"
        >
          <div style={{ textAlign: "center" }}>
            <p style={{ color: "#e5e7eb", marginBottom: "0.75rem" }}>
              Are you sure you want to delete:
            </p>

            <p
              style={{
                fontWeight: 600,
                color: "#f87171",
                marginBottom: "1.25rem",
              }}
            >
              “{deleteTarget?.title}”
            </p>

            <p
              style={{
                fontSize: "0.8rem",
                color: "#94a3b8",
                marginBottom: "1.5rem",
              }}
            >
              This action cannot be undone.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "0.75rem",
              }}
            >
              <button
                onClick={() => setDeleteTarget(null)}
                disabled={deleting}
                style={{
                  padding: "0.5rem 1.25rem",
                  borderRadius: "0.6rem",
                  background: "rgba(255,255,255,0.08)",
                  color: "#e5e7eb",
                  border: "1px solid rgba(255,255,255,0.15)",
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>

              <button
                onClick={handleConfirmDelete}
                disabled={deleting}
                style={{
                  padding: "0.5rem 1.25rem",
                  borderRadius: "0.6rem",
                  background: "#dc2626",
                  color: "white",
                  fontWeight: 600,
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {deleting ? "Deleting…" : "Delete"}
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </section>
  );
}

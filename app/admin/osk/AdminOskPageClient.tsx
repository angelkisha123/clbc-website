export const dynamic = "force-dynamic";

("use client");

import { useMemo, useState } from "react";
import Link from "next/link";
import { Pencil, Trash2, Plus } from "lucide-react";
import Modal from "@/app/components/Modal";
import AddOskForm from "@/app/components/AddOskForm";
import styles from "./AdminOskPageClient.module.css";

type Episode = {
  id: string;
  osk_number: number;
  title: string;
  created_at: string;
};

export default function AdminOskPageClient({
  episodes,
}: {
  episodes: Episode[];
}) {
  const [open, setOpen] = useState(false);

  const sortedEpisodes = useMemo(
    () => [...episodes].sort((a, b) => a.osk_number - b.osk_number),
    [episodes]
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
              OSK Episodes
            </h1>
            <p className="text-slate-400 text-sm mt-2">
              Manage episodes and content
            </p>
          </div>

          <button onClick={() => setOpen(true)} className={styles.addButton}>
            <Plus size={18} />
            Add Episode
          </button>
        </div>

        {/* Table */}
        {sortedEpisodes.length > 0 && (
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  {["Episode", "Title", "Created", "Actions"].map((label) => (
                    <th key={label} className={styles.th}>
                      <span>{label}</span>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {sortedEpisodes.map((ep) => (
                  <tr key={ep.id} className={styles.tr}>
                    <td className={styles.td} align="center">
                      <span className={styles.episodeBadge}>
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
          title="Add OSK Episode"
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

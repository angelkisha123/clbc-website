"use client";

import { ReactNode } from "react";
import { X } from "lucide-react";
import styles from "./Modal.module.css";

export default function Modal({
  open,
  onClose,
  children,
  title,
}: {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}) {
  if (!open) return null;

  return (
    <div className={styles.overlay}>
      {/* Backdrop */}
      <div
        className={styles.backdrop}
        onClick={onClose}
      />

      {/* Modal */}
      <div className={styles.modal}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            {title ?? "Modal"}
          </h2>

          <button
            onClick={onClose}
            className={styles.close}
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className={styles.body}>
          {children}
        </div>
      </div>
    </div>
  );
}

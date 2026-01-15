"use client";

import { useState } from "react";
import {
  Trash2,
  GripVertical,
  ChevronDown,
  BookOpen,
  Quote,
  List,
  Flag,
  Layers,
  Upload,
} from "lucide-react";
import { supabase } from "@/lib/supabase";
import styles from "./AddOskForm.module.css";

import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useRouter } from "next/navigation";

/* ================= Types ================= */

type Verse = {
  reference: string;
  text: string;
};

type Block =
  | { id: string; type: "intro"; text: string }
  | { id: string; type: "verse"; reference: string; text: string }
  | { id: string; type: "points_title"; title: string }
  | { id: string; type: "point"; title: string; verses: Verse[] }
  | { id: string; type: "conclusion"; text: string };

type AddOskFormProps = {
  initialData?: {
    id: string;
    osk_number: number;
    title: string;
    facebook_url: string | null;
    content_blocks: any[];
  };
  onSuccess?: () => void;
};

/* ================= Block Factory ================= */

const BLOCKS = {
  intro: (): Block => ({
    id: crypto.randomUUID(),
    type: "intro",
    text: "",
  }),

  verse: (): Block => ({
    id: crypto.randomUUID(),
    type: "verse",
    reference: "",
    text: "",
  }),

  points_title: (): Block => ({
    id: crypto.randomUUID(),
    type: "points_title",
    title: "",
  }),

  point: (): Block => ({
    id: crypto.randomUUID(),
    type: "point",
    title: "",
    verses: [{ reference: "", text: "" }],
  }),

  conclusion: (): Block => ({
    id: crypto.randomUUID(),
    type: "conclusion",
    text: "",
  }),
};

/* ================= Sortable Wrapper ================= */

function SortableBlock({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  return (
    <div
      ref={setNodeRef}
      style={{ transform: CSS.Transform.toString(transform), transition }}
      {...attributes}
      className={styles.sortable}
    >
      <div {...listeners} className={styles.dragHandle}>
        <GripVertical size={16} />
      </div>
      {children}
    </div>
  );
}

/* ================= Main Form ================= */

export default function AddOskForm({
  initialData,
  onSuccess,
}: AddOskFormProps) {
  const router = useRouter();
  /* ---------- State ---------- */

  const [oskNumber, setOskNumber] = useState(
    initialData ? String(initialData.osk_number) : ""
  );

  const [title, setTitle] = useState(initialData?.title ?? "");
  const [facebookUrl, setFacebookUrl] = useState(
    initialData?.facebook_url ?? ""
  );

  const [image, setImage] = useState<File | null>(null);

  const [blocks, setBlocks] = useState<Block[]>(
    initialData?.content_blocks?.length
      ? (initialData.content_blocks ?? []).map((b: any) => ({
          id: crypto.randomUUID(),
          ...b,
        }))
      : []
  );

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /* ---------- Drag ---------- */

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = blocks.findIndex((b) => b.id === active.id);
    const newIndex = blocks.findIndex((b) => b.id === over.id);

    const copy = [...blocks];
    const [moved] = copy.splice(oldIndex, 1);
    copy.splice(newIndex, 0, moved);
    setBlocks(copy);
  };

  /* ---------- Submit ---------- */

  const handleSubmit = async () => {
    setError(null);

    if (!oskNumber || !title) {
      setError("Lesson number and title are required.");
      return;
    }

    setLoading(true);

    try {
      let imageUrl: string | null = null;

      // Upload image (only if a new one was selected)
      if (image) {
        const ext = image.name.split(".").pop();
        const path = `osk/${Date.now()}.${ext}`;

        const { error: uploadError } = await supabase.storage
          .from("osk-images")
          .upload(path, image);

        if (uploadError) throw uploadError;

        imageUrl = supabase.storage.from("osk-images").getPublicUrl(path)
          .data.publicUrl;
      }

      const payload = {
        osk_number: Number(oskNumber),
        title,
        facebook_url: facebookUrl || null,
        content_blocks: blocks.map(({ id, ...rest }) => rest),
        ...(imageUrl ? { image_url: imageUrl } : {}),
      };

      console.log("Submitting OSK:", {
        mode: initialData ? "EDIT" : "ADD",
        id: initialData?.id,
        payload,
      });

      if (initialData) {
        // ✅ EDIT
        const { error } = await supabase
          .from("osk")
          .update(payload)
          .eq("id", initialData.id);

        if (error) throw error;
      } else {
        // ✅ ADD
        const { error } = await supabase.from("osk").insert({
          ...payload,
          published: true,
        });

        if (error) throw error;
      }

      onSuccess?.();
    } catch (err: any) {
      console.error("OSK submit error:", err);
      setError(err.message ?? "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  /* ================= UI ================= */

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="number"
        placeholder="Lesson Number"
        value={oskNumber}
        onChange={(e) => setOskNumber(e.target.value)}
      />

      <input
        className={styles.input}
        placeholder="Lesson Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        className={styles.input}
        placeholder="Facebook Video Link (optional)"
        value={facebookUrl}
        onChange={(e) => setFacebookUrl(e.target.value)}
      />

      {/* Image upload */}
      <div className={styles.field}>
        <label className={styles.label}>Lesson Image</label>
        <label className={styles.upload}>
          <Upload size={18} />
          <span>{image ? image.name : "Click to upload image"}</span>
          <input
            type="file"
            hidden
            accept="image/*"
            onChange={(e) => setImage(e.target.files?.[0] || null)}
          />
        </label>
      </div>

      {/* Toolbar */}
      <div className={styles.toolbar}>
        <button
          type="button"
          onClick={() => setBlocks([...blocks, BLOCKS.intro()])}
        >
          <BookOpen size={14} /> Intro
        </button>
        <button
          type="button"
          onClick={() => setBlocks([...blocks, BLOCKS.verse()])}
        >
          <Quote size={14} /> Verse
        </button>
        <button
          type="button"
          onClick={() => setBlocks([...blocks, BLOCKS.points_title()])}
        >
          <Layers size={14} /> Points Title
        </button>
        <button
          type="button"
          onClick={() => setBlocks([...blocks, BLOCKS.point()])}
        >
          <List size={14} /> Point
        </button>
        <button
          type="button"
          onClick={() => setBlocks([...blocks, BLOCKS.conclusion()])}
        >
          <Flag size={14} /> Conclusion
        </button>
      </div>

      {/* Blocks */}
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext
          items={blocks.map((b) => b.id)}
          strategy={verticalListSortingStrategy}
        >
          {blocks.map((block) => (
            <SortableBlock key={block.id} id={block.id}>
              <BlockEditor
                block={block}
                onChange={(updated) =>
                  setBlocks(
                    blocks.map((b) => (b.id === block.id ? updated : b))
                  )
                }
                onDelete={() =>
                  setBlocks(blocks.filter((b) => b.id !== block.id))
                }
              />
            </SortableBlock>
          ))}
        </SortableContext>
      </DndContext>

      {error && <p className={styles.error}>{error}</p>}

      <button
        type="button"
        className={styles.submit}
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? "Saving…" : initialData ? "Update Lesson" : "Save Lesson"}
      </button>
    </form>
  );
}

/* ================= Block Editor ================= */

function BlockEditor({
  block,
  onChange,
  onDelete,
}: {
  block: Block;
  onChange: (b: Block) => void;
  onDelete: () => void;
}) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={styles.block}>
      <div className={styles.blockHeader}>
        <strong>{block.type.replace("_", " ")}</strong>
        <div>
          <button type="button" onClick={() => setCollapsed(!collapsed)}>
            <ChevronDown size={16} />
          </button>
          <button type="button" onClick={onDelete}>
            <Trash2 size={16} />
          </button>
        </div>
      </div>

      {!collapsed && (
        <div className={styles.blockBody}>
          {(block.type === "intro" || block.type === "conclusion") && (
            <textarea
              className={styles.input}
              value={block.text}
              onChange={(e) => onChange({ ...block, text: e.target.value })}
            />
          )}

          {block.type === "verse" && (
            <>
              <input
                className={styles.input}
                placeholder="Verse Reference"
                value={block.reference}
                onChange={(e) =>
                  onChange({ ...block, reference: e.target.value })
                }
              />
              <textarea
                className={styles.input}
                placeholder="Verse Text"
                value={block.text}
                onChange={(e) => onChange({ ...block, text: e.target.value })}
              />
            </>
          )}

          {block.type === "points_title" && (
            <input
              className={styles.pointsTitle}
              placeholder="Points Section Title"
              value={block.title}
              onChange={(e) => onChange({ ...block, title: e.target.value })}
            />
          )}

          {block.type === "point" &&
            block.verses.map((v, i) => (
              <div key={i} className={styles.verseGroup}>
                <input
                  className={styles.input}
                  placeholder="Verse Reference"
                  value={v.reference}
                  onChange={(e) => {
                    const verses = [...block.verses];
                    verses[i].reference = e.target.value;
                    onChange({ ...block, verses });
                  }}
                />
                <textarea
                  className={styles.input}
                  placeholder="Verse Text"
                  value={v.text}
                  onChange={(e) => {
                    const verses = [...block.verses];
                    verses[i].text = e.target.value;
                    onChange({ ...block, verses });
                  }}
                />
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

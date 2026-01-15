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

/* ================= Block Factory ================= */

const BLOCKS: Record<
  "intro" | "verse" | "points_title" | "point" | "conclusion",
  () => Block
> = {
  intro: () => ({
    id: crypto.randomUUID(),
    type: "intro",
    text: "",
  }),

  verse: () => ({
    id: crypto.randomUUID(),
    type: "verse",
    reference: "",
    text: "",
  }),

  points_title: () => ({
    id: crypto.randomUUID(),
    type: "points_title",
    title: "",
  }),

  point: () => ({
    id: crypto.randomUUID(),
    type: "point",
    title: "",
    verses: [{ reference: "", text: "" }],
  }),

  conclusion: () => ({
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

export default function AddOskForm({ onSuccess }: { onSuccess: () => void }) {
  const [oskNumber, setOskNumber] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [facebookUrl, setFacebookUrl] = useState("");
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
    const { data: existing } = await supabase
      .from("osk")
      .select("id")
      .eq("osk_number", Number(oskNumber))
      .maybeSingle();

    if (existing) {
      setError(`OSK number ${oskNumber} already exists.`);
      setLoading(false);
      return;
    }

    if (!oskNumber || !title) {
      setError("Lesson number and title are required.");
      return;
    }

    setLoading(true);

    try {
      let imageUrl: string | null = null;

      if (image) {
        const ext = image.name.split(".").pop();
        const path = `osk/${Date.now()}.${ext}`;

        const { error } = await supabase.storage
          .from("osk-images")
          .upload(path, image);

        if (error) throw error;

        imageUrl = supabase.storage.from("osk-images").getPublicUrl(path)
          .data.publicUrl;
      }

      await supabase.from("osk").insert({
        osk_number: Number(oskNumber),
        title,
        image_url: imageUrl,
        facebook_url: facebookUrl || null,
        published: true,
        content_blocks: blocks.map(({ id, ...rest }) => rest),
      });

      onSuccess();
    } catch (err: any) {
      setError(err.message ?? "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  /* ================= UI ================= */

  return (
    <form className={styles.form}>
      {/* Lesson meta */}
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

      {/* Image upload (NOT sticky) */}
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

      {/* Sticky content toolbar */}
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

      {/* Blocks editor */}
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
        {loading ? "Saving…" : "Save Lesson"}
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
              placeholder="Points Section Title (e.g. Key Teachings)"
              value={block.title}
              onChange={(e) => onChange({ ...block, title: e.target.value })}
            />
          )}

          {block.type === "point" && (
            <>
              <input
                className={styles.input}
                placeholder="Point Title"
                value={block.title}
                onChange={(e) => onChange({ ...block, title: e.target.value })}
              />

              {block.verses.map((v, i) => (
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
            </>
          )}
        </div>
      )}
    </div>
  );
}

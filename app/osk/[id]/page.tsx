import { createClient } from "@/lib/supabase-server";
import { notFound } from "next/navigation";
import OskLessonView from "@/app/components/OskLessonView";

export default async function OskLesson({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = await createClient();

  const oskNumber = Number(id);
  if (Number.isNaN(oskNumber)) return notFound();

  const { data: lesson } = await supabase
    .from("osk")
    .select("*")
    .eq("osk_number", oskNumber)
    .single();

  if (!lesson) return notFound();

  return (
    <section className="relative min-h-screen bg-slate-950 text-white px-6 py-6">
      <OskLessonView lesson={lesson} />
    </section>
  );
}

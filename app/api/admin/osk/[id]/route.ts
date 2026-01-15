import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase-server";

export async function GET(
  _: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params; // ✅ THIS IS THE FIX

  const { data, error } = await supabaseServer
    .from("osk")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !data) {
    return NextResponse.json(
      { error: "Lesson not found" },
      { status: 404 }
    );
  }

  return NextResponse.json({
    ...data,
    content_blocks: data.content_blocks ?? [],
  });
}

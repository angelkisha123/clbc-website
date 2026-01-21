import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase-server";

export async function GET(
  _: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  
  const supabase = await createClient(); // ✅ Create client instance

  const { data, error } = await supabase
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
import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase-server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(req: Request) {
  try {
    // 1️⃣ Create server client with cookie access
    const supabase = await createClient();

    // 2️⃣ Check logged-in user
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (!user || authError) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    // 3️⃣ Check admin role
    const { data: admin } = await supabase
      .from("admins")
      .select("user_id")
      .eq("user_id", user.id)
      .single();

    if (!admin) {
      return NextResponse.json(
        { error: "Forbidden" },
        { status: 403 }
      );
    }

    // 4️⃣ Validate request body
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        { error: "Missing lesson ID" },
        { status: 400 }
      );
    }

    // 5️⃣ Perform admin action
    const { error } = await supabaseAdmin
      .from("osk")
      .update({
        deleted_at: new Date().toISOString(),
      })
      .eq("id", id);

    if (error) {
      console.error("SOFT DELETE OSK ERROR:", error);
      return NextResponse.json(
        { error: "Failed to delete lesson" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("SOFT DELETE OSK API ERROR:", err);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
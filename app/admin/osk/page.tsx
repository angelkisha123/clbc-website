import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase-server";
import AdminOskPageClient from "./AdminOskPageClient";

export default async function AdminOskPage() {
  const supabase = await createClient(); // ← Now it's a function

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  const { data: admin } = await supabase
    .from("admins")
    .select("user_id")
    .eq("user_id", user.id)
    .single();

  if (!admin) {
    redirect("/");
  }

  const { data: lessons } = await supabase
    .from("osk")
    .select("id, osk_number, title, created_at, facebook_url")
    .is("deleted_at", null)
    .order("osk_number");

  return <AdminOskPageClient lessons={lessons ?? []} />;
}
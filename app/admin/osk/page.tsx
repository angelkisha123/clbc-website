import { supabaseAdmin } from "@/lib/supabase-admin";
import AdminOskPageClient from "./AdminOskPageClient";

export default async function AdminOskPage() {
  const { data: episodes, error } = await supabaseAdmin
    .from("osk")
    .select("*")
    .order("osk_number", { ascending: false });

  if (error) {
    console.error("ADMIN OSK FETCH ERROR:", error);
  }

  return (
    <AdminOskPageClient episodes={episodes ?? []} />
  );
}

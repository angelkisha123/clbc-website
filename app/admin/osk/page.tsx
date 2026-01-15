export const dynamic = "force-dynamic";

import { supabaseServer } from "@/lib/supabase-server";
import AdminOskPageClient from "./AdminOskPageClient";

export default async function AdminOskPage() {
  const { data: episodes, error } = await supabaseServer
    .from("osk")
    .select("id, osk_number, title, created_at")
    .order("osk_number", { ascending: true });

  if (error) {
    console.error("ADMIN OSK FETCH ERROR:", error);
  }

  return <AdminOskPageClient episodes={episodes ?? []} />;
}

export const dynamic = "force-dynamic";

import { supabaseServer } from "@/lib/supabase-server";
import AdminOskPageClient from "./AdminOskPageClient";

export default async function AdminOskPage() {
  const { data: lessons, error } = await supabaseServer
    .from("osk")
    .select("id, osk_number, title, created_at, facebook_url")
    .order("osk_number", { ascending: true });

  if (error) {
    console.error("ADMIN OSK FETCH ERROR:", error);
  }

  return <AdminOskPageClient lessons={lessons ?? []} />;
}

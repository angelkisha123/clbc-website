export const dynamic = "force-dynamic";

import { supabaseServer } from "@/lib/supabase-server";
import Link from "next/link";

export default async function OskPage() {
  const { data: lessons, error } = await supabaseServer
    .from("osk")
    .select("id, osk_number, title, image_url")
    .eq("published", true)
    .is("deleted_at", null)
    .order("osk_number", { ascending: true });

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-slate-950 via-black to-slate-950 text-white px-6 overflow-hidden" style={{ paddingTop: "50px", paddingBottom: "50px" }}>
      {/* subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(236,72,153,0.08),transparent_45%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(34,211,238,0.06),transparent_45%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Oras Sa Kaayohan
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            Weekly messages designed to encourage growth, faith, and reflection
            through God’s Word.
          </p>
        </div>

        {/* Lessons Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {lessons?.map((ep) => (
            <Link
              key={ep.id}
              href={`/osk/${ep.osk_number}`}
              className="
                group
                relative
                rounded-2xl
                overflow-hidden
                bg-slate-900/70
                border border-white/10
                transition-all duration-300
                hover:border-white/20
                hover:-translate-y-1
              "
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={ep.image_url || "/images/osk-placeholder.png"}
                  alt={ep.title}
                  className="
                    w-full h-full object-cover
                    transition-transform duration-500
                    group-hover:scale-105
                  "
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="block text-sm text-gray-400 mb-1">
                  OSK {ep.osk_number}
                </span>

                <h3 className="text-xl font-semibold leading-snug mb-4">
                  {ep.title}
                </h3>

                {/* CTA */}
                <div
                  className="
                    inline-flex items-center gap-2
                    text-sm font-medium text-cyan-300
                    transition-colors duration-300
                    group-hover:text-cyan-200
                  "
                >
                  View lesson
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

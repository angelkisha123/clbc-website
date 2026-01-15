import { createClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";

export const supabaseServer = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  {
    global: {
      fetch: async (url, options = {}) => {
        return fetch(url, {
          ...options,
          cache: "no-store", // 🔥 THIS FIXES PROD
        });
      },
    },
  }
);

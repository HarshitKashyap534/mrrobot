import { createClient as createSupabaseClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://icppztpdbmkqylhlimgl.supabase.co"
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImljcHB6dHBkYm1rcXlsaGxpbWdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM2MzE2MDksImV4cCI6MjA1OTIwNzYwOX0.l-fTCG1w4h2hzja9fuDQ1fI-Q0WAsXdXdCrcIOwWYz8"

export const createClient = () => {
  return createSupabaseClient(supabaseUrl, supabaseAnonKey)
}


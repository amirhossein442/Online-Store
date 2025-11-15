import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://zznwpvopunstpqshacfs.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6bndwdm9wdW5zdHBxc2hhY2ZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMxMzI0MjQsImV4cCI6MjA3ODcwODQyNH0.7vNNOpQXOpjfamLoa1do7ZBiAc1yB2_3_h1dgsSepAo"
);

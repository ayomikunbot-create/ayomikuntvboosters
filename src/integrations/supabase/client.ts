import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://jbqbdjkxlkcxldahbgle.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpicWJkamt4bGtjeGxkYWhiZ2xlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI1MDA2MDUsImV4cCI6MjA5ODA3NjYwNX0.9Hbv6b3Hkh4b4nHuF2jLM_FoKujq1Lth4142k5ms7mo";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: typeof window !== 'undefined' ? localStorage : undefined,
    persistSession: true,
    autoRefreshToken: true,
  }
});

import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL ?? '';
const SUPABASE_PUBLISHABLE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ?? '';

if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) {
  console.warn('[Supabase] Missing env vars — cloud sync disabled. Set VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY in Vercel.');
}

export const supabase = createClient<Database>(
  SUPABASE_URL || 'https://placeholder.supabase.co',
  SUPABASE_PUBLISHABLE_KEY || 'placeholder',
  {
    auth: {
      storage: typeof window !== 'undefined' ? localStorage : undefined,
      persistSession: true,
      autoRefreshToken: true,
    }
  }
);

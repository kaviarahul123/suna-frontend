import { createBrowserClient } from '@supabase/ssr';

export const createClient = () => {
  // Get URL and key from environment variables
  let supabaseUrl = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').trim();
  let supabaseAnonKey = (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').trim();

  // Fallback dummy values for build time / static generation if variables are missing
  if (!supabaseUrl) {
    supabaseUrl = 'https://placeholder-project.supabase.co';
  }
  if (!supabaseAnonKey) {
    supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.placeholder';
  }

  // Ensure the URL is in the proper format with http/https protocol
  if (!supabaseUrl.startsWith('http')) {
    supabaseUrl = `https://${supabaseUrl}`;
  }

  // console.log('Supabase URL:', supabaseUrl);
  // console.log('Supabase Anon Key:', supabaseAnonKey);

  return createBrowserClient(supabaseUrl, supabaseAnonKey);
};

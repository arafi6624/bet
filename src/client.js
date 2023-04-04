import { createClient } from '@supabase/supabase-js'

const URL = 'https://ccrdiwyjtszdzcnmates.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNjcmRpd3lqdHN6ZHpjbm1hdGVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA1NTMzODMsImV4cCI6MTk5NjEyOTM4M30.c8mjXmoCH3XzYB-Emfn5KgsurXA-PuYTcOhiRskND0M';

export const supabase = createClient(URL, API_KEY);
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ubjigtewmuxjwundlvoc.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InViamlndGV3bXV4and1bmRsdm9jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI4NDE3NTksImV4cCI6MjA1ODQxNzc1OX0.gJ7qxJxj1rZ7z7YKyZ0s7uG6csBUhLlSL9it2s4j9zY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

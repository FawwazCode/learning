
import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient, processLock } from '@supabase/supabase-js'

export const supabase = createClient(
    "https://kevxsvlpnwlpvdjqcdyj.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtldnhzdmxwbndscHZkanFjZHlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ2MTM2OTksImV4cCI6MjA3MDE4OTY5OX0.-KaOHLemylVWbdVgXnZOlas878mndsfAtsAzAFz_OM0",
  {
    auth: {
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
      lock: processLock,
    },
  })
        
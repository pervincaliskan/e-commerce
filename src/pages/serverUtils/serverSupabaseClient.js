import {createClient} from '@supabase/supabase-js';

export const getSupabaseClıent = () => {
    return createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.SUPABASE_SECRET_KEY
    );
}


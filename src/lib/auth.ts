import { createClient } from '@/utils/supabase/client';

export const signInWithKaKao = async () => {
  const supabase = createClient();

  await supabase.auth.signInWithOAuth({
    provider: 'kakao',
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/callback`,
    },
  });
};

export const signOut = async () => {
  const supabase = createClient();

  await supabase.auth.signOut();
};

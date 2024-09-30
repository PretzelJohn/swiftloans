'use client';

import { useSearchParams } from 'next/navigation';
import { trpc } from '@/utils/trpc/client';
import { LinkExpiredScreen } from '@/client/features/auth/components/link-expired-screen';
import { ResetPasswordScreen } from '@/client/features/auth/components/reset-password-screen';

export const ResetPasswordPage = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  const token = searchParams.get('token');

  if (!email || !token) {
    return <LinkExpiredScreen />;
  }

  const userToken = trpc.getToken.useQuery({
    email,
    token,
  });

  if (!userToken?.data?.token?.id) {
    return <LinkExpiredScreen />;
  }

  return <ResetPasswordScreen email={email} token={token} />;
};

'use client';

import { useSearchParams } from 'next/navigation';
import { trpc } from '@/utils/trpc/client';
import { LinkExpiredScreen } from '@/client/features/auth/components/link-expired-screen';
import { ResetPasswordForm } from '@/client/features/auth/components/reset-password-form';

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

  if (userToken.status === 'pending') {
    return <></>;
  }

  if (!userToken.data?.token?.id) {
    return <LinkExpiredScreen />;
  }

  return <ResetPasswordForm email={email} token={token} />;
};

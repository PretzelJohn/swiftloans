'use client';

import { useCallback, useState } from 'react';
import { CheckEmailScreen } from '@/client/features/login/components/check-email-screen';
import { ForgotPasswordScreen } from '@/client/features/login/components/forgot-password-screen';

export const ForgotPasswordPage = () => {
  const [email, setEmail] = useState<string>('');

  const resetEmail = useCallback(() => {
    setEmail('');
  }, [setEmail]);

  return (
    <div className='flex flex-col gap-8 max-w-[400px] w-full items-center'>
      {email ? (
        <CheckEmailScreen email={email} resetEmail={resetEmail} />
      ) : (
        <ForgotPasswordScreen setEmail={setEmail} />
      )}
    </div>
  );
};

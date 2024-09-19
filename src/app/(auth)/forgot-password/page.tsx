"use client";

import { useCallback, useState } from 'react';
import { CheckEmailPage } from '@/client/pages/auth/forgot-password/check-email';
import { ForgotPasswordPage } from '@/client/pages/auth/forgot-password/forgot-password';

export default function ForgotPassword() {
  const [email, setEmail] = useState<string>('');

  const resetEmail = useCallback(() => {
    setEmail('');
  }, [setEmail]);

  return (
    <div className='flex flex-col gap-8 max-w-[400px] w-full items-center'>
      {email ? (
        <CheckEmailPage email={email} tryAgain={resetEmail} />
      ) : (
        <ForgotPasswordPage setEmail={setEmail} />
      )}
    </div>
  );
}

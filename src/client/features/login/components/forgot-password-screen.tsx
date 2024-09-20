import type { Dispatch, SetStateAction } from 'react';
import { ForgotPasswordForm } from '@/client/features/login/components/forgot-password-form';

interface ForgotPasswordScreenProps {
  setEmail: Dispatch<SetStateAction<string>>;
}

export const ForgotPasswordScreen = ({
  setEmail,
}: ForgotPasswordScreenProps) => {
  return (
    <>
      <h1 className='text-subtitle text-center'>Forgot password?</h1>

      <p>
        No problem! Enter the email address registered on your account, and
        we'll send you a reset link.
      </p>

      <ForgotPasswordForm setEmail={setEmail} />
    </>
  );
};

import { ForgotPasswordForm } from '@/client/features/login/components/forgot-password-form';

interface ForgotPasswordPageProps {
  setEmail: (email: string) => void;
}

export const ForgotPasswordPage = ({ setEmail }: ForgotPasswordPageProps) => {
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

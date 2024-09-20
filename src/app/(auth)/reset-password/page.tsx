import type { Metadata } from 'next';
import { ResetPasswordPage } from '@/client/pages/auth/reset-password-page';

export const metadata: Metadata = {
  title: 'Reset Password',
};

export default async function ForgotPassword() {
  return <ResetPasswordPage />;
}

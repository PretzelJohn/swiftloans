import { ForgotPasswordPage } from '@/client/pages/auth/forgot-password-page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Forgot Password?',
};

export default async function ForgotPassword() {
  return <ForgotPasswordPage />;
}

import type { Metadata } from 'next';
import { LoginPage } from '@/client/pages/auth/login-page';

export const metadata: Metadata = {
  title: 'Login',
};

export default async function Login() {
  return <LoginPage />;
}

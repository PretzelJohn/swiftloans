import { LoginForm } from '@/client/components/forms/login-form';
import { Link } from '@/client/components/base/links/link';

export default function Login() {
  return (
    <div className='flex flex-col gap-8 max-w-[400px] w-full'>
      <h1 className='text-subtitle text-center'>Sign in</h1>

      <LoginForm />

      <span className='text-brand-secondary text-small'>
        By signing in, I agree to the{' '}
        <Link target='_blank'>Terms and Conditions</Link>
        {' '}and{' '}
        <Link target='_blank'>Privacy Policy</Link>.
      </span>
    </div>
  );
}

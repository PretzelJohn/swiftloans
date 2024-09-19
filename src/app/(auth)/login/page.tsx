import { LoginForm } from '@/client/components/forms/login-form';

export default function Login() {
  return (
    <div className='flex flex-col gap-8 max-w-[400px] w-full'>
      <h1 className='text-subtitle text-center'>Sign in</h1>

      <LoginForm />
    </div>
  );
}

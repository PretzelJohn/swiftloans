"use client";

import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from '@/components/link/link';
import { TextInput } from '@/components/fields/text-input';
import { Button } from '@/components/button/button';

interface FormData {
  email: string;
  password: string;
}

const UNAUTHORIZED = 'The email or password you entered is incorrect. Please try again, or reset your password.';

export default function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm<FormData>();

  const onSubmit = useCallback((data: FormData) => {
    console.log(data);
    setError('password', { type: 'value', message: UNAUTHORIZED });
  }, [setError]);

  return (
    <div className='flex flex-col gap-8 max-w-[360px] w-full'>
      <h1 className='text-subtitle text-center'>Sign in</h1>

      <form className='flex flex-col gap-6 w-full' onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          type='email'
          label="Email"
          placeholder='you@example.com'
          {...register('email', {
            required: 'Please enter your email address.',
          })}
          error={errors.email?.message}
        />
        <TextInput
          type='password'
          label="Password"
          placeholder='••••••••••'
          {...register('password', {
            required: 'Please enter your password.',
          })}
          error={errors.password?.message}
        />
        <Link href='/forgot-password'>Forgot password?</Link>
        <Button type='submit'>Sign in</Button>

        <span className='text-small text-brand-secondary'>By signing in, I agree to the <Link>Terms and Conditions</Link> and <Link>Privacy Policy</Link>.</span>
      </form>
    </div>
  );
}

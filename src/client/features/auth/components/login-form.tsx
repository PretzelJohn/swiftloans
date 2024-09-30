'use client';

import { useForm } from 'react-hook-form';
import { useCallback, useEffect, useState } from 'react';
import { TextInput } from '@/client/components/fields/text-input';
import { Link } from '@/client/components/links/link';
import { Button } from '@/client/components/button/button';
import { loginErrors, type LoginSchema } from '@/shared/schema/login';
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';

export const LoginForm = () => {
  const {
    register,
    formState: { errors },
    setError,
    handleSubmit,
    watch,
  } = useForm<LoginSchema>();

  const searchParams = useSearchParams();

  const email = watch('email');
  const password = watch('password');

  const [disabled, setDisabled] = useState<boolean>(true);

  useEffect(() => {
    setDisabled(!email || !password);
  }, [email, password]);

  const onSubmit = useCallback(
    async (data: LoginSchema) => {
      const result = await signIn('credentials', {
        ...data,
        redirect: true,
        redirectTo: '/overview',
      });

      if (!result || result?.code) {
        setError('password', {
          type: 'value',
          message: loginErrors[result?.code ?? 'none'],
        });
        return;
      }
    },
    [searchParams, setError]
  );

  return (
    <form
      className='flex flex-col gap-6 w-full'
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextInput
        type='email'
        label='Email'
        placeholder='you@example.com'
        {...register('email', {
          required: 'Please enter your email address.',
        })}
        error={errors.email?.message}
      />
      <TextInput
        type='password'
        label='Password'
        placeholder='••••••••••'
        {...register('password', {
          required: 'Please enter your password.',
        })}
        error={errors.password?.message}
      />
      <Link className='text-base' href='/forgot-password'>
        Forgot password?
      </Link>
      <Button type='submit' disabled={disabled}>
        Sign in
      </Button>
    </form>
  );
};

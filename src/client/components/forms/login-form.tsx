'use client';

import { useForm } from 'react-hook-form';
import { useCallback, useEffect, useState } from 'react';
import { TextInput } from '@/client/components/base/fields/text-input';
import { Link } from '@/client/components/base/links/link';
import { Button } from '@/client/components/base/button/button';

interface FormData {
  email: string;
  password: string;
}

const UNAUTHORIZED =
  'The email or password you entered is incorrect. Please try again, or reset your password.';

export const LoginForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
    watch,
  } = useForm<FormData>();

  const email = watch('email');
  const password = watch('password');

  const [disabled, setDisabled] = useState<boolean>(true);

  const onSubmit = useCallback(
    (data: FormData) => {
      console.log(data);
      // TODO: send POST request to tRPC API
      setError('password', { type: 'value', message: UNAUTHORIZED });
    },
    [setError]
  );

  useEffect(() => {
    setDisabled(!email || !password);
  }, [email, password]);

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

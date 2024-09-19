"use client";

import { useForm } from 'react-hook-form';
import { useCallback, useEffect, useState } from 'react';
import { TextInput } from '@/client/components/fields/text-input';
import { Button } from '@/client/components/button/button';

interface FormData {
  email: string;
}

interface ForgotPasswordFormProps {
  setEmail: (email: string) => void;
}

const ERROR = 'Something went wrong. Please wait a few minutes and try again.';

export const ForgotPasswordForm = ({ setEmail }: ForgotPasswordFormProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    setError,
  } = useForm<FormData>();

  const email = watch('email');

  const [disabled, setDisabled] = useState<boolean>(true);

  const onSubmit = useCallback((data: FormData) => {
    console.log(data);
    // TODO: send POST request to tRPC API
    setError('email', { type: 'value', message: ERROR });
    setEmail(email);
  }, [email, setEmail, setError]);

  useEffect(() => {
    setDisabled(!email);
  }, [email, setEmail]);

  return (
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

      <Button type='submit' disabled={disabled}>Send</Button>
    </form>
  );
}
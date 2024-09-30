'use client';

import { useForm } from 'react-hook-form';
import { useCallback, useEffect, useState } from 'react';
import { TextInput } from '@/client/components/fields/text-input';
import { Button } from '@/client/components/button/button';
import { trpc } from '@/utils/trpc/client';
import { useRouter } from 'next/navigation';

interface FormData {
  email: string;
  token: string;
  password: string;
}

interface ResetPasswordFormProps {
  email: string;
  token: string;
}

const ERROR = 'Something went wrong. Please wait a few minutes and try again.';

export const ResetPasswordForm = ({ email, token }: ResetPasswordFormProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    setError,
  } = useForm<FormData>({
    defaultValues: {
      email,
      token,
    },
  });

  const router = useRouter();

  const password = watch('password');

  const [disabled, setDisabled] = useState<boolean>(true);

  const resetPasswordMutation = trpc.resetPassword.useMutation({
    onSuccess: () => {
      return router.push('/login');
    },
    onError: () => {
      setError('password', { type: 'value', message: ERROR });
    },
  });

  const onSubmit = useCallback(
    (data: FormData) => {
      resetPasswordMutation.mutate(data);
    },
    [resetPasswordMutation]
  );

  useEffect(() => {
    setDisabled(!password);
  }, [password]);

  return (
    <form
      className='flex flex-col gap-6 w-full'
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextInput type='hidden' {...register('email')} />

      <TextInput type='hidden' {...register('token')} />

      <TextInput
        type='password'
        label='New password'
        placeholder='••••••••••'
        {...register('password', {
          required: 'Please enter a new password.',
        })}
        error={errors.password?.message}
      />

      <Button type='submit' disabled={disabled}>
        Save
      </Button>
    </form>
  );
};

'use client';

import { useForm } from 'react-hook-form';
import { useCallback, useEffect, useState } from 'react';
import { TextInput } from '@/client/components/base/fields/text-input';
import { Button } from '@/client/components/base/button/button';

interface FormData {
  password: string;
}

const ERROR = 'Something went wrong. Please wait a few minutes and try again.';

export const ResetPasswordForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    setError,
  } = useForm<FormData>();

  const password = watch('password');

  const [disabled, setDisabled] = useState<boolean>(true);

  const onSubmit = useCallback(
    (data: FormData) => {
      console.log(data);
      // TODO: send POST request to tRPC API
      setError('password', { type: 'value', message: ERROR });
    },
    [setError]
  );

  useEffect(() => {
    setDisabled(!password);
  }, [password]);

  return (
    <form
      className='flex flex-col gap-6 w-full'
      onSubmit={handleSubmit(onSubmit)}
    >
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

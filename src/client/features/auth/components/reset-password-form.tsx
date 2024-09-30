'use client';

import { useForm } from 'react-hook-form';
import {
  type ChangeEvent,
  type PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { TextInput } from '@/client/components/fields/text-input';
import { Button } from '@/client/components/button/button';
import { trpc } from '@/utils/trpc/client';
import { useRouter } from 'next/navigation';
import SuccessIcon from '@/shared/assets/icons/check.svg';
import { PasswordInput } from '@/client/components/fields/password-input';

interface FormData {
  email: string;
  token: string;
  password: string;
}

const ERROR = 'Something went wrong. Please wait a few minutes and try again.';

interface PasswordRequirementProps {
  valid: boolean;
}

const PasswordRequirement = ({
  valid,
  children,
}: PropsWithChildren<PasswordRequirementProps>) => {
  return valid ? (
    <div className='flex items-center gap-2 text-positive-tertiary'>
      <SuccessIcon className='h-4 w-4 shrink-0' />
      {children}
    </div>
  ) : (
    <li className='ml-5'>{children}</li>
  );
};

interface ResetPasswordFormProps {
  email: string;
  token: string;
}

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
      return router.push('/login?code=reset_success');
    },
    onError: () => {
      setError('password', { type: 'value', message: ERROR });
    },
  });

  const [hasMinCharacters, setHasMinCharacters] = useState<boolean>(false);
  const [hasNumber, setHasNumber] = useState<boolean>(false);
  const [hasUppercase, setHasUppercase] = useState<boolean>(false);
  const [hasLowercase, setHasLowercase] = useState<boolean>(false);
  const [hasSpecial, setHasSpecial] = useState<boolean>(false);

  const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setHasMinCharacters(value.length >= 8);
    setHasNumber(value.search(/\d/) >= 0);
    setHasUppercase(value.search(/[A-Z]/) >= 0);
    setHasLowercase(value.search(/[a-z]/) >= 0);
    setHasSpecial(value.search(/[@$!%*?&]/) >= 0);
  }, []);

  const onSubmit = useCallback(
    (data: FormData) => {
      resetPasswordMutation.mutate(data);
    },
    [resetPasswordMutation]
  );

  useEffect(() => {
    setDisabled(
      !hasMinCharacters ||
        !hasNumber ||
        !hasUppercase ||
        !hasLowercase ||
        !hasSpecial
    );
  }, [
    hasLowercase,
    hasMinCharacters,
    hasNumber,
    hasSpecial,
    hasUppercase,
    password,
  ]);

  return (
    <div className='flex flex-col max-w-[400px] w-full items-center'>
      <div className='flex flex-col gap-8 w-full'>
        <h1 className='text-subtitle text-center'>Reset password</h1>

        <div className='flex flex-col gap-2 w-full'>
          <p>Enter a new password for login. It must include:</p>
          <ul className='list-disc'>
            <PasswordRequirement valid={hasMinCharacters}>
              8 characters
            </PasswordRequirement>
            <PasswordRequirement valid={hasNumber}>
              1 number
            </PasswordRequirement>
            <PasswordRequirement valid={hasUppercase}>
              1 uppercase letter
            </PasswordRequirement>
            <PasswordRequirement valid={hasLowercase}>
              1 lowercase letter
            </PasswordRequirement>
            <PasswordRequirement valid={hasSpecial}>
              1 special character
            </PasswordRequirement>
          </ul>
        </div>
      </div>

      <form
        className='flex flex-col gap-6 w-full'
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextInput type='hidden' {...register('email')} />

        <TextInput type='hidden' {...register('token')} />

        <PasswordInput
          label='New password'
          {...register('password', {
            required: 'Please enter a new password.',
            onChange,
          })}
          error={errors.password?.message}
        />

        <Button type='submit' disabled={disabled}>
          Save
        </Button>
      </form>
    </div>
  );
};

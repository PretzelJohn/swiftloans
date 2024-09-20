import { ResetPasswordForm } from '@/client/features/login/components/reset-password-form';

export const ResetPasswordPage = () => {
  return (
    <div className='flex flex-col gap-8 max-w-[400px] w-full items-center'>
      <h1 className='text-subtitle text-center'>Reset password</h1>

      <div className='flex flex-col gap-2 w-full'>
        <p>Enter a new password for login. It must include:</p>
        <ul className='list-disc pl-5'>
          <li>8 characters</li>
          <li>1 number</li>
          <li>1 uppercase letter</li>
          <li>1 lowercase letter</li>
          <li>1 special character</li>
        </ul>
      </div>

      <ResetPasswordForm />
    </div>
  );
};

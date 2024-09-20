import { Link } from '@/client/components/links/link';

interface CheckEmailScreenProps {
  email: string;
  resetEmail: () => void;
}

export const CheckEmailScreen = ({
  email,
  resetEmail,
}: CheckEmailScreenProps) => {
  return (
    <>
      <h1 className='text-subtitle text-center'>Check your email</h1>

      <p className='text-center'>
        We sent an email to <span className='font-semibold'>{email}</span>.
        Please click the reset link to reset your password.
      </p>

      <div className='flex flex-col gap-2 items-center'>
        <h2 className='text-subheading'>Didn't get it yet?</h2>
        <span className='text-brand-secondary'>
          Please wait a few minutes, then{' '}
          <Link onClick={resetEmail}>try again</Link>.
        </span>
      </div>
    </>
  );
};

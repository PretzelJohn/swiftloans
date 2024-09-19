import { Link } from '@/client/components/base/links/link';

interface CheckEmailPageProps {
  email: string;
  tryAgain: () => void;
}

export const CheckEmailPage = ({ email, tryAgain }: CheckEmailPageProps) => {
  return (
    <>
      <h1 className='text-subtitle text-center'>Check your email</h1>

      <p className='text-center'>
        We sent an email to <span className='font-semibold'>{email}</span>. Please click the reset link to reset your password.
      </p>

      <div className='flex flex-col gap-2 items-center'>
        <h2 className='text-subheading'>Didn't get it yet?</h2>
        <span className='text-brand-secondary'>
          Please wait a few minutes, then <Link onClick={tryAgain}>try again</Link>.
        </span>
      </div>
    </>
  );
}
'use client';

import { Button } from '@/client/components/button/button';
import { useRouter } from 'next/navigation';

export const LinkExpiredScreen = () => {
  const router = useRouter();

  return (
    <div className='flex flex-col gap-8 max-w-[400px] w-full items-center'>
      <h1 className='text-subtitle text-center'>Link expired</h1>

      <div className='flex flex-col gap-12 w-full text-center'>
        <p>
          That link is either invalid or has expired. You can generate a new
          link by clicking on the button below.
        </p>
        <Button
          onClick={() => {
            return router.push('/forgot-password');
          }}
        >
          Try again
        </Button>
      </div>
    </div>
  );
};

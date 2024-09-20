import type { PropsWithChildren } from 'react';
import { CloseButton } from '@/client/components/modal/close-button';
import { createPortal } from 'react-dom';

export const Modal = ({ children }: PropsWithChildren) => {
  return (
    <>
      {createPortal(
        <div className='absolute inset-0 md:inset-5 flex items-center justify-center'>
          <div className='relative flex flex-col gap-8 md:rounded-lg md:border bg-white p-8 md:shadow-lg w-full h-full md:w-fit md:h-fit'>
            <CloseButton />

            {children}
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

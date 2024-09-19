import type { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import { CloseButton } from '@/client/components/base/modal/close-button';

export const Modal = ({ children }: PropsWithChildren) => {
  return (
    <>
      {createPortal(
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='relative flex flex-col gap-8 rounded-lg border bg-white p-8 shadow-lg w-fit h-fit'>
            <CloseButton />

            {children}
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

import type { PropsWithChildren } from 'react';

export const MenuHeader = ({ children }: PropsWithChildren) => {
  return (
    <h1 className='text-brand-tertiary'>
      {children}
    </h1>
  );
}
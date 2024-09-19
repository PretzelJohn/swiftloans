import type { PropsWithChildren } from 'react';

interface TitleBarProps {
  title: string;
}

export const TitleBar = ({
  title,
  children,
}: PropsWithChildren<TitleBarProps>) => {
  return (
    <header className='flex items-center justify-between'>
      <h1 className='text-heading'>{title}</h1>

      {children}
    </header>
  );
};

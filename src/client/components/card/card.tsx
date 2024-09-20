import type { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

interface CardProps {
  className?: string;
}

export const Card = ({ className, children }: PropsWithChildren<CardProps>) => {
  return (
    <div className={twMerge('border rounded overflow-clip', className)}>
      {children}
    </div>
  );
};

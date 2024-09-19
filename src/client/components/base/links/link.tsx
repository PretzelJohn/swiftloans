import { type AnchorHTMLAttributes, type PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  onClick?: () => void;
}

export const Link = ({ href = '', target = '_self', onClick, className, children }: PropsWithChildren<LinkProps>) => {
  return (
    <a className={twMerge('text-link hover:underline', className)} href={href} target={target} onClick={onClick}>
      {children}
    </a>
  );
}
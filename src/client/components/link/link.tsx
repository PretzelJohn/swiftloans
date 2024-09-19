import type { AnchorHTMLAttributes, PropsWithChildren } from 'react';
import clsx from 'clsx';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  onClick?: () => void;
}

export const Link = ({ href = '', target = '_self', onClick, className, children }: PropsWithChildren<LinkProps>) => {
  return (
    <a className={clsx('text-link hover:underline', className)} href={href} target={target} onClick={onClick}>
      {children}
    </a>
  );
}
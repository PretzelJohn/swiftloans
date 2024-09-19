import type { AnchorHTMLAttributes, PropsWithChildren } from 'react';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  onClick?: () => void;
}

export const Link = ({ href = '', target = '_self', onClick, children }: PropsWithChildren<LinkProps>) => {
  return (
    <a className="text-link text-small hover:underline" href={href} target={target} onClick={onClick}>
      {children}
    </a>
  );
}
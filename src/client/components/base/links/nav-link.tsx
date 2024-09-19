'use client';

import { type AnchorHTMLAttributes, type PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { usePathname } from 'next/navigation';

type NavLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;
type Variant = 'default' | 'active';

const variants: Record<Variant, string> = {
  default: 'text-brand-tertiary hover:text-brand-quaternary',
  active: 'text-on-brand',
};

export const NavLink = ({ href, children }: PropsWithChildren<NavLinkProps>) => {
  const pathname = usePathname();
  
  const active = href && pathname.startsWith(href);
  const variant = active ? 'active' : 'default';

  return (
    <a href={active ? undefined : href} className={twMerge('flex items-center gap-2 px-1 py-2 text-small', variants[variant])}>
      {children}
    </a>
  );
}
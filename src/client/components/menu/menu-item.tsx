import type { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

type Variant = 'default' | 'active';

const variants: Record<Variant, string> = {
  default: 'text-brand hover:bg-brand-secondary hover:text-on-brand-secondary',
  active: 'bg-link text-white',
};

interface MenuItemProps {
  active?: boolean;
  onClick?: () => void;
}

export const MenuItem = ({
  active,
  onClick,
  children,
}: PropsWithChildren<MenuItemProps>) => {
  const variant: Variant = active ? 'active' : 'default';

  return (
    <button
      className={twMerge(
        'flex items-center w-full gap-2 p-2 px-3 rounded-md text-small',
        variants[variant]
      )}
      onClick={onClick}
      disabled={active}
      type='button'
    >
      {children}
    </button>
  );
};

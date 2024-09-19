import type { PropsWithChildren } from 'react';
import clsx from 'clsx';

type Variant = 'positive' | 'danger';

const variants: Record<Variant, string> = {
  positive: 'bg-positive-secondary text-on-positive-secondary',
  danger: 'bg-danger-secondary text-on-danger-secondary',
};

interface TagProps {
  variant: Variant;
}

export const Tag = ({ variant, children }: PropsWithChildren<TagProps>) => {
  return (
    <div
      className={clsx(
        'flex gap-2 p-1 rounded-lg w-fit h-fit text-tiny font-semibold leading-none',
        variants[variant]
      )}
    >
      {children}
    </div>
  );
};

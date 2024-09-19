import type { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type Variant = 'primary' | 'secondary' | 'disabled';

const variants: Record<Variant, string> = {
  primary: 'bg-brand text-on-brand hover:bg-brand-hover',
  secondary: 'text-brand-secondary hover:text-brand',
  disabled: 'bg-disabled text-disabled border border-disabled',
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const Button = ({
  variant = 'primary',
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={twMerge(
        'h-10 rounded-lg',
        variants[disabled ? 'disabled' : variant]
      )}
      disabled={disabled}
      {...props}
    />
  );
};

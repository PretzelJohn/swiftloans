import type { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type Variant = 'primary' | 'secondary' | 'danger' | 'disabled';

const variants: Record<Variant, string> = {
  primary: 'bg-brand text-on-brand hover:bg-brand-hover',
  secondary: 'text-brand-tertiary hover:text-brand',
  danger: 'bg-danger text-on-danger',
  disabled: 'bg-disabled text-disabled border border-disabled',
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export const Button = ({
  variant = 'primary',
  className,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={twMerge(
        'h-10 rounded-lg flex items-center justify-center gap-2 p-3',
        variants[disabled ? 'disabled' : variant],
        className
      )}
      disabled={disabled}
      {...props}
    />
  );
};

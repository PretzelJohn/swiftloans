import type { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const variants: Record<string, string> = {
  primary: 'bg-brand text-on-brand hover:bg-brand-hover',
  neutral: '',
  disabled: '',
}

export const Button = ({
  variant = 'primary',
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        'h-10 rounded-lg bg-brand hover:bg-brand-hover',
        variants[disabled ? 'disabled' : variant]
      )}
      {...props}
    />
  );
}
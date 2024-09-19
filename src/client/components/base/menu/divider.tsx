import { twMerge } from 'tailwind-merge';

type Variant = 'default' | 'dark';

const variants: Record<Variant, string> = {
  default: 'bg-brand-hover-secondary',
  dark: 'bg-[#444444]',
}

interface DividerProps {
  variant?: 'default' | 'dark';
  className?: string;
}

export const Divider = ({ variant = 'default', className }: DividerProps) => {
  return (
    <div className={twMerge('w-full h-[1px] my-1', variants[variant], className)} />
  );
}
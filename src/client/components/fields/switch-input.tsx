import React, { type InputHTMLAttributes } from 'react';

interface SwitchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

// eslint-disable-next-line react/display-name
export const SwitchInput = React.forwardRef<HTMLInputElement, SwitchInputProps>(
  ({ label, error, ...props }: SwitchInputProps, ref) => {
    return (
      <div className='flex items-center justify-between gap-2 w-full max-w-[400px] h-10'>
        {label && <p>{label}</p>}
        <div className='relative flex items-center'>
          <input
            ref={ref}
            {...props}
            type='checkbox'
            className='peer appearance-none w-10 h-6 border rounded-full transition-all hover:border-hover focus:border-hover checked:border-none checked:bg-brand'
          />
          <div className='absolute transition-all inset-1 peer-checked:left-5 rounded-full bg-brand-secondary peer-checked:bg-white pointer-events-none h-4 w-4' />
        </div>
        {error && <p className='text-danger-tertiary'>{error}</p>}
      </div>
    );
  }
);

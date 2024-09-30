import React, { type InputHTMLAttributes, type ReactNode } from 'react';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: ReactNode;
}

// eslint-disable-next-line react/display-name
export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, error, icon, ...props }: TextInputProps, ref) => {
    return (
      <div className='flex flex-col gap-2 w-full max-w-[400px]'>
        {label && <p>{label}</p>}
        <div className='relative'>
          <input
            className='border rounded-lg h-10 px-4 py-3 pr-10 leading-none transition-colors placeholder:text-brand-quaternary focus:border-hover focus:outline-none w-full'
            ref={ref}
            {...props}
          />
          <div className='absolute right-4 top-3 pointer-events-none'>
            {icon}
          </div>
        </div>
        {error && <p className='text-danger-tertiary'>{error}</p>}
      </div>
    );
  }
);

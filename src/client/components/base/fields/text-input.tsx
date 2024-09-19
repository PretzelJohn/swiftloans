import React, { type InputHTMLAttributes } from 'react';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

// eslint-disable-next-line react/display-name
export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, error, ...props }: TextInputProps, ref) => {
    return (
      <div className='flex flex-col gap-2 text-base'>
        {label && <p>{label}</p>}
        <input
          className='border rounded-lg px-4 py-3 leading-none transition-colors placeholder:text-brand-quaternary focus:border-hover focus:outline-none'
          ref={ref}
          {...props}
        />
        {error && <p className='text-danger-tertiary'>{error}</p>}
      </div>
    );
  }
);

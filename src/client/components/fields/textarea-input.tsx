import React, { type TextareaHTMLAttributes } from 'react';

interface TextareaInputProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

// eslint-disable-next-line react/display-name
export const TextareaInput = React.forwardRef<
  HTMLTextAreaElement,
  TextareaInputProps
>(({ label, error, ...props }: TextareaInputProps, ref) => {
  return (
    <div className='flex flex-col gap-2 w-full'>
      {label && <p>{label}</p>}
      <textarea
        className='border rounded-lg px-4 py-3 leading-none transition-colors placeholder:text-brand-quaternary focus:border-hover focus:outline-none w-full'
        ref={ref}
        {...props}
      />
      {error && <p className='text-danger-tertiary'>{error}</p>}
    </div>
  );
});

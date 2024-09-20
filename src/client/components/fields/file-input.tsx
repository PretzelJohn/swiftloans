import React, { type InputHTMLAttributes } from 'react';
import clsx from 'clsx';

interface FileInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

// eslint-disable-next-line react/display-name
export const FileInput = React.forwardRef<HTMLInputElement, FileInputProps>(
  ({ label, error, ...props }: FileInputProps, ref) => {
    return (
      <div className='flex flex-col gap-2 w-full max-w-[400px]'>
        {label && <p>{label}</p>}
        <input
          className={clsx(
            'border rounded-lg pl-4 pr-10 py-3 leading-none transition-colors focus:border-hover focus:outline-none w-full',
            'file:flex file:rounded-lg file:border-none file:px-3 file:py-2 file:bg-link file:text-on-brand file:font-semibold file:cursor-pointer file:mb-2'
          )}
          ref={ref}
          {...props}
          type='file'
        />
        {error && <p className='text-danger-tertiary'>{error}</p>}
      </div>
    );
  }
);

import React, { type InputHTMLAttributes, useCallback } from 'react';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import EyeOffIcon from '@/shared/assets/icons/eye-off.svg';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

// eslint-disable-next-line react/display-name
export const PasswordInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, error, ...props }: TextInputProps, ref) => {
    const [hidden, setHidden] = React.useState<boolean>(true);

    const toggleHidden = useCallback(() => {
      setHidden((prev) => !prev);
    }, []);

    return (
      <div className='flex flex-col gap-2 w-full max-w-[400px]'>
        {label && <p>{label}</p>}
        <div className='relative'>
          <input
            type={hidden ? 'password' : 'text'}
            placeholder='••••••••••'
            className='border rounded-lg h-10 px-4 py-3 pr-10 leading-none transition-colors placeholder:text-brand-quaternary focus:border-hover focus:outline-none w-full'
            ref={ref}
            {...props}
          />
          <div
            className='absolute right-0 top-0 p-3 cursor-pointer text-brand-tertiary hover:text-brand-secondary'
            onClick={toggleHidden}
          >
            {hidden ? (
              <EyeIcon className='h-4 w-4 shrink-0' />
            ) : (
              <EyeOffIcon className='h-4 w-4 shrink-0' />
            )}
          </div>
        </div>
        {error && <p className='text-danger-tertiary'>{error}</p>}
      </div>
    );
  }
);

import React, { type SelectHTMLAttributes } from 'react';
import ChevronDownIcon from '@/assets/icons/chevron-down.svg';

export type SelectOption = {
  name: string;
  value: string;
};

interface SelectInputProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options?: SelectOption[];
}

// eslint-disable-next-line react/display-name
export const SelectInput = React.forwardRef<
  HTMLSelectElement,
  SelectInputProps
>(({ label, error, options, ...props }: SelectInputProps, ref) => {
  return (
    <div className='flex flex-col gap-2 w-full max-w-[400px]'>
      {label && <p>{label}</p>}
      <div className='relative flex items-center w-full'>
        <select
          className='border h-10 w-full rounded-lg pl-4 pr-10 py-3 leading-none transition-colors focus:border-hover focus:outline-none appearance-none'
          ref={ref}
          {...props}
        >
          {options?.map((option: SelectOption) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
        <ChevronDownIcon className='absolute right-3 h-4 w-4 shrink-0 pointer-events-none' />
      </div>
      {error && <p className='text-danger-tertiary'>{error}</p>}
    </div>
  );
});

import {
  type ChangeEvent,
  forwardRef,
  type InputHTMLAttributes,
  useCallback,
} from 'react';

import SearchIcon from '@/assets/icons/search.svg';

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  onSearch: (query: string) => void;
}

// eslint-disable-next-line react/display-name
export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ onSearch, ...props }: SearchInputProps, ref) => {
    const onChange = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        onSearch(event.target.value);
      },
      [onSearch]
    );

    return (
      <div className='relative w-full max-w-[280px]'>
        <input
          className='border rounded h-10 px-4 py-3 pr-10 leading-none transition-colors placeholder:text-brand-quaternary focus:border-hover focus:outline-none w-full'
          ref={ref}
          {...props}
          onChange={onChange}
          placeholder='Search...'
          type='search'
        />
        <SearchIcon className='absolute top-3 right-4 h-4 w-4 pointer-events-none' />
      </div>
    );
  }
);

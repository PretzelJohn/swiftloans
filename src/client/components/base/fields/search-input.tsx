import {
  type ChangeEvent,
  forwardRef,
  type InputHTMLAttributes,
  useCallback,
} from 'react';

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
      <div className='relative'>
        <input
          className='border rounded px-4 py-3 leading-none transition-colors placeholder:text-brand-quaternary focus:border-hover focus:outline-none'
          ref={ref}
          {...props}
          onChange={onChange}
          placeholder='Search...'
        />
      </div>
    );
  }
);

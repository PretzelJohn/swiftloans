import { forwardRef, type PropsWithChildren } from 'react';

interface PopoverTriggerProps extends PropsWithChildren {
  onClick?: () => void;
}

// eslint-disable-next-line react/display-name
export const PopoverTrigger = forwardRef<HTMLDivElement, PopoverTriggerProps>(({ onClick, children }: PopoverTriggerProps, ref) => {
  return (
    <div
      className='cursor-pointer'
      onClick={onClick}
      ref={ref}
    >
      {children}
    </div>
  );
});
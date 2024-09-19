import { createPortal } from 'react-dom';

interface PopoverContentProps {
  children?: JSX.Element;
}

export const PopoverContent = ({ children }: PopoverContentProps) => {
  return (
    <>
      {createPortal(<div className='absolute inset-0 bg-brand/50'/>, document.body)}

      <div className='z-10'>
        {children}
      </div>
    </>
  );
}
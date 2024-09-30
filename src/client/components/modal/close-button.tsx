import CloseIcon from '@/shared/assets/icons/close.svg';
import { usePopoverContext } from '@/client/features/popover/providers/popover-context-provider';

export const CloseButton = () => {
  const { close } = usePopoverContext();

  return (
    <button className='absolute right-2 top-2 text-brand-tertiary hover:text-brand'>
      <CloseIcon className='h-5 w-5 shrink-0' onClick={close} />
    </button>
  );
};

import { usePopoverContext } from '@/client/features/popover/providers/popover-context-provider';
import { Popover } from 'react-tiny-popover';
import { PopoverTrigger } from '@/client/features/popover/components/popover-trigger';
import { PopoverContent } from '@/client/features/popover/components/popover-content';
import type { Props } from '@/client/features/popover/components/popover';

export const PopoverContainer = ({
  children,
  content,
  ...props
}: Props) => {
  const { isOpen, open, close } = usePopoverContext();

  return (
    <Popover
      {...props}
      isOpen={isOpen}
      onClickOutside={close}
      padding={props.padding ?? 16}
      content={
        <PopoverContent>
          {content}
        </PopoverContent>
      }
    >
      <PopoverTrigger onClick={open}>
        {children}
      </PopoverTrigger>
    </Popover>
  );
}
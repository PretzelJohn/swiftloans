'use client';

import { PopoverContextProvider } from '@/client/features/popover/providers/popover-context-provider';
import { PopoverContainer } from '@/client/features/popover/components/popover-container';
import type { PopoverProps } from 'react-tiny-popover';

export type Props = Omit<PopoverProps, 'isOpen' | 'content'> & {
  content: React.ReactNode;
};

export const Popover = ({ children, ...props }: Props) => {
  return (
    <PopoverContextProvider>
      <PopoverContainer {...props}>{children}</PopoverContainer>
    </PopoverContextProvider>
  );
};

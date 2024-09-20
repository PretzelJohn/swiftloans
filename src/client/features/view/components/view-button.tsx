import { Button } from '@/client/components/button/button';
import { Popover } from '@/client/features/popover/components/popover';
import type { PropsWithChildren } from 'react';

interface ViewButtonProps {
  icon: ({ className }: { className: string }) => JSX.Element;
}

export const ViewButton = ({
  children,
  icon,
}: PropsWithChildren<ViewButtonProps>) => {
  const Icon = icon;

  return (
    <Popover
      align='end'
      padding={8}
      positions={['bottom', 'left', 'top', 'right']}
      content={children}
    >
      <Button variant='secondary'>
        <Icon className='h-5 w-5 shrink-0' />
      </Button>
    </Popover>
  );
};

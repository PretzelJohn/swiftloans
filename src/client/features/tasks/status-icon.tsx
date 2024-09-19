import TodoIcon from '@/assets/icons/todo.svg';
import InProgressIcon from '@/assets/icons/in-progress.svg';
import CompleteIcon from '@/assets/icons/complete.svg';
import CancelledIcon from '@/assets/icons/cancelled.svg';
import ErrorIcon from '@/assets/icons/error.svg';

export type Status =
  | 'notStarted'
  | 'inProgress'
  | 'done'
  | 'cancelled'
  | 'error';

type Component = ({ className }: { className: string }) => JSX.Element;

const icons: Record<Status, Component> = {
  notStarted: TodoIcon,
  inProgress: InProgressIcon,
  done: CompleteIcon,
  cancelled: CancelledIcon,
  error: ErrorIcon,
};

interface StatusIconProps {
  status: Status;
}

export const StatusIcon = ({ status }: StatusIconProps) => {
  const Icon = icons[status];

  return <Icon className='h-5 w-5 shrink-0' />;
};

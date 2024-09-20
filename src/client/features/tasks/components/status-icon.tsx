import { taskStatus, type TaskStatus } from '@/client/features/tasks/types';

interface StatusIconProps {
  status: TaskStatus;
}

export const StatusIcon = ({ status }: StatusIconProps) => {
  const Icon = taskStatus[status].icon;
  return <Icon className='h-5 w-5 shrink-0' />;
};

import type { Icon } from '@/client/components/types';
import TodoIcon from '@/shared/assets/icons/todo.svg';
import InProgressIcon from '@/shared/assets/icons/in-progress.svg';
import CompleteIcon from '@/shared/assets/icons/complete.svg';
import CancelledIcon from '@/shared/assets/icons/cancelled.svg';

export type TaskStatus = 'notStarted' | 'inProgress' | 'done' | 'cancelled';

export type TaskStatusValue = {
  id: string;
  name: string;
  icon: Icon;
};

export const taskStatus: Record<TaskStatus, TaskStatusValue> = {
  notStarted: {
    id: 'notStarted',
    name: 'Not Started',
    icon: TodoIcon,
  },
  inProgress: {
    id: 'inProgress',
    name: 'In Progress',
    icon: InProgressIcon,
  },
  done: {
    id: 'done',
    name: 'Done',
    icon: CompleteIcon,
  },
  cancelled: {
    id: 'cancelled',
    name: 'Cancelled',
    icon: CancelledIcon,
  },
};

export type Task = {
  id: string;
  name: string;
  description: string;
  reminder: number;
  status: TaskStatus;
};

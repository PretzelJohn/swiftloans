import type { Icon } from '@/client/components/types';
import TodoIcon from '@/assets/icons/todo.svg';
import InProgressIcon from '@/assets/icons/in-progress.svg';
import CompleteIcon from '@/assets/icons/complete.svg';
import CancelledIcon from '@/assets/icons/cancelled.svg';

export type ApplicationStatus = 'started' | 'pendingDocuments' | 'approved' | 'rejected';

export type ApplicationStatusValue = {
  id: string;
  name: string;
  icon: Icon;
}

export const applicationStatus: Record<ApplicationStatus, ApplicationStatusValue> = {
  started: {
    id: 'started',
    name: 'Started',
    icon: TodoIcon,
  },
  pendingDocuments: {
    id: 'pendingDocuments',
    name: 'Awaiting Documents',
    icon: InProgressIcon,
  },
  approved: {
    id: 'approved',
    name: 'Approved',
    icon: CompleteIcon,
  },
  rejected: {
    id: 'rejected',
    name: 'Rejected',
    icon: CancelledIcon,
  },
};

export type Application = {
  id: string;
  name: string;
  lender: string;
  events: string[];
  status: ApplicationStatus;
  files: string[];
};
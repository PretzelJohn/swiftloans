import type { Icon } from '@/client/components/types';
import ErrorIcon from '@/assets/icons/error.svg';
import InProgressIcon from '@/assets/icons/in-progress.svg';
import CompleteIcon from '@/assets/icons/complete.svg';

export type ContactCategory = 'error' | 'lead' | 'customer';

export type ContactCategoryValue = {
  id: string;
  name: string;
  icon: Icon;
}

export const contactCategory: Record<ContactCategory, ContactCategoryValue> = {
  error: {
    id: 'error',
    name: 'Missing Information',
    icon: ErrorIcon,
  },
  lead: {
    id: 'lead',
    name: 'Lead',
    icon: InProgressIcon,
  },
  customer: {
    id: 'customer',
    name: 'Customer',
    icon: CompleteIcon,
  },
};

export type ContactSource = 'email' | 'phone' | 'web';

export type ContactSourceValue = {
  id: string;
  name: string;
}

export const contactSource: Record<ContactSource, ContactSourceValue> = {
  email: {
    id: 'email',
    name: 'Email',
  },
  phone: {
    id: 'phone',
    name: 'Phone',
  },
  web: {
    id: 'web',
    name: 'Web',
  },
}

export type Contact = {
  firstName: string;
  lastName: string;
  email?: string;
  phone?: string;
  amountNeeded?: number;
  yearsInBusiness?: number;
  annualRevenue?: number;
  personalFico?: number;
  profitable?: boolean;
  category: ContactCategory;
  notes?: string;
  source?: ContactSource;
};
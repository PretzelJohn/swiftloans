'use client';

import { Profile } from '@/client/features/profile/components/profile';
import ChevronDownIcon from '@/shared/assets/icons/chevron-down.svg';
import { twMerge } from 'tailwind-merge';
import { usePopoverContext } from '@/client/features/popover/providers/popover-context-provider';

interface ProfileTriggerProps {
  avatarUrl?: string;
  name?: string;
  jobTitle?: string;
}

export const ProfileTrigger = ({
  avatarUrl,
  name,
  jobTitle,
}: ProfileTriggerProps) => {
  const { isOpen } = usePopoverContext();

  return (
    <div className='group flex items-center justify-between w-full'>
      <Profile avatarUrl={avatarUrl} name={name} jobTitle={jobTitle} />

      <ChevronDownIcon
        className={twMerge(
          'h-4 w-4 shrink-0 transition-all text-brand-tertiary group-hover:text-brand-quaternary',
          !isOpen && '-rotate-180'
        )}
      />
    </div>
  );
};

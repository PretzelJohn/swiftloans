import { Profile } from '@/client/components/navigation/profile';
import ChevronDownIcon from '@/assets/icons/chevron-down.svg';
import { twMerge } from 'tailwind-merge';
import { forwardRef } from 'react';

interface ProfileTriggerProps {
  avatarUrl?: string;
  name?: string;
  role?: string;
  open?: boolean;
  toggleOpen?: () => void;
}

// eslint-disable-next-line react/display-name
export const ProfileTrigger = forwardRef<HTMLDivElement, ProfileTriggerProps>(
  ({ avatarUrl, name, role, open, toggleOpen }: ProfileTriggerProps, ref) => {
    return (
      <div
        className='group flex gap-8 items-center justify-between w-full py-0.5 px-1 cursor-pointer'
        onClick={toggleOpen}
        ref={ref}
      >
        <Profile avatarUrl={avatarUrl} name={name} role={role} />

        <div className='text-brand-tertiary group-hover:text-brand-quaternary'>
          <ChevronDownIcon
            className={twMerge(
              'h-4 w-4 shrink-0 transition-all',
              !open && '-rotate-180'
            )}
          />
        </div>
      </div>
    );
  }
);

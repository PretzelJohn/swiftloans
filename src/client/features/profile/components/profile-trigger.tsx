import { Profile } from '@/client/features/profile/components/profile';
import ChevronDownIcon from '@/assets/icons/chevron-down.svg';
import { twMerge } from 'tailwind-merge';
import { usePopoverContext } from '@/client/features/popover/providers/popover-context-provider';

interface ProfileTriggerProps {
  avatarUrl?: string;
  name?: string;
  role?: string;
}

// eslint-disable-next-line react/display-name
export const ProfileTrigger = ({
  avatarUrl,
  name,
  role,
}: ProfileTriggerProps) => {
  const { isOpen } = usePopoverContext();

  return (
    <div className='group flex gap-8 items-center justify-between w-full py-0.5 px-1'>
      <Profile avatarUrl={avatarUrl} name={name} role={role} />

      <div className='text-brand-tertiary group-hover:text-brand-quaternary'>
        <ChevronDownIcon
          className={twMerge(
            'h-4 w-4 shrink-0 transition-all',
            !isOpen && '-rotate-180'
          )}
        />
      </div>
    </div>
  );
};

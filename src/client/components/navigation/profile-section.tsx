'use client';

import { useCallback, useState } from 'react';
import { Popover } from 'react-tiny-popover';
import { ProfileMenu } from '@/client/components/menus/profile-menu';
import ChevronDownIcon from '@/assets/icons/chevron-down.svg';
import { twMerge } from 'tailwind-merge';
import { Profile } from '@/client/components/navigation/profile';

export const ProfileSection = () => {
  // TODO: load profile section details from db
  const avatarUrl = '/favicon-32x32.png';
  const name = 'Alex Swift';
  const role = 'Loan Broker';

  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const closeProfileMenu = useCallback(() => {
    setProfileMenuOpen(false);
  }, []);

  const toggleProfileMenu = useCallback(() => {
    setProfileMenuOpen(!profileMenuOpen);
  }, [profileMenuOpen]);

  return (
    <Popover
      isOpen={profileMenuOpen}
      positions={['top', 'right', 'bottom', 'left']}
      padding={8}
      onClickOutside={closeProfileMenu}
      content={<ProfileMenu onClose={closeProfileMenu} />}
    >
      <div
        className='group flex gap-8 items-center justify-between w-full py-0.5 px-1 cursor-pointer'
        onClick={toggleProfileMenu}
      >
        <Profile
          avatarUrl={avatarUrl}
          name={name}
          role={role}
        />

        <div className='text-brand-tertiary group-hover:text-brand-quaternary'>
          <ChevronDownIcon className={twMerge('h-4 w-4 shrink-0 transition-all', !profileMenuOpen && '-rotate-180')} />
        </div>
      </div>
    </Popover>
  );
}
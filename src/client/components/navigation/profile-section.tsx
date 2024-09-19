'use client';

import { useCallback, useState } from 'react';
import { Popover } from 'react-tiny-popover';
import { ProfileMenu } from '@/client/components/menus/profile-menu';
import { ProfileTrigger } from '@/client/components/navigation/profile-trigger';

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
      <ProfileTrigger
        avatarUrl={avatarUrl}
        name={name}
        role={role}
        open={profileMenuOpen}
        toggleOpen={toggleProfileMenu}
      />
    </Popover>
  );
};

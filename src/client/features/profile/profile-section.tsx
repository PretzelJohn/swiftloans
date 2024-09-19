'use client';

import { ProfileTrigger } from '@/client/features/profile/profile-trigger';
import { Popover } from '@/client/features/popover/components/popover';
import { ProfileMenu } from '@/client/components/menus/profile-menu';

export const ProfileSection = () => {
  // TODO: load profile section details from db
  const avatarUrl = '/favicon-32x32.png';
  const name = 'Alex Swift';
  const role = 'Loan Broker';

  return (
    <Popover
      positions={['top', 'right', 'bottom', 'left']}
      content={<ProfileMenu />}
    >
      <ProfileTrigger
        avatarUrl={avatarUrl}
        name={name}
        role={role}
      />
    </Popover>
  );
};

'use client';

import { MenuItem } from '@/client/components/menu/menu-item';
import GearIcon from '@/assets/icons/gear.svg';
import UsersIcon from '@/assets/icons/users.svg';
import { Divider } from '@/client/components/menu/divider';
import PowerIcon from '@/assets/icons/power.svg';
import { Menu } from '@/client/components/menu/menu';
import { usePopoverContext } from '@/client/features/popover/providers/popover-context-provider';
import { useRouter } from 'next/navigation';

export const ProfileMenu = () => {
  const router = useRouter();
  const { close } = usePopoverContext();

  return (
    <Menu>
      <MenuItem onClick={close}>
        <GearIcon className='h-5 w-5 shrink-0' />
        Settings
      </MenuItem>
      <MenuItem onClick={close}>
        <UsersIcon className='h-5 w-5 shrink-0' />
        Manage Team
      </MenuItem>

      <Divider />

      <MenuItem
        onClick={() => {
          router.replace('/');
        }}
      >
        <PowerIcon className='h-5 w-5 shrink-0' />
        Sign Out
      </MenuItem>
    </Menu>
  );
};

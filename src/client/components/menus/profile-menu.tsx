import { MenuItem } from '@/client/components/base/menu/menu-item';
import GearIcon from '@/assets/icons/gear.svg';
import UsersIcon from '@/assets/icons/users.svg';
import { Divider } from '@/client/components/base/menu/divider';
import PowerIcon from '@/assets/icons/power.svg';
import { Menu } from '@/client/components/base/menu/menu';
import { usePopoverContext } from '@/client/features/popover/providers/popover-context-provider';

export const ProfileMenu = () => {
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

      <MenuItem onClick={close}>
        <PowerIcon className='h-5 w-5 shrink-0' />
        Sign Out
      </MenuItem>
    </Menu>
  );
};

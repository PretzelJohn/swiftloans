import { MenuItem } from '@/client/components/base/menu/menu-item';
import GearIcon from '@/assets/icons/gear.svg';
import UsersIcon from '@/assets/icons/users.svg';
import { Divider } from '@/client/components/base/menu/divider';
import PowerIcon from '@/assets/icons/power.svg';
import { Menu } from '@/client/components/base/menu/menu';

interface ProfileMenuProps {
  onClose: () => void;
}

export const ProfileMenu = ({ onClose }: ProfileMenuProps) => {
  return (
    <Menu>
      <MenuItem onClick={onClose}>
        <GearIcon className='h-5 w-5 shrink-0' />
        Settings
      </MenuItem>
      <MenuItem onClick={onClose}>
        <UsersIcon className='h-5 w-5 shrink-0' />
        Manage Team
      </MenuItem>

      <Divider />

      <MenuItem onClick={onClose}>
        <PowerIcon className='h-5 w-5 shrink-0' />
        Sign Out
      </MenuItem>
    </Menu>
  );
};

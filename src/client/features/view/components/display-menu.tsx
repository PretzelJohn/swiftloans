import { MenuItem } from '@/client/components/menu/menu-item';
import { Menu } from '@/client/components/menu/menu';
import { Divider } from '@/client/components/menu/divider';
import { MenuHeader } from '@/client/components/menu/menu-header';
import { useState } from 'react';

export const DisplayMenu = () => {
  const [selected, setSelected] = useState<string | undefined>(undefined);

  return (
    <Menu>
      <MenuHeader>View by...</MenuHeader>

      <Divider />

      <MenuItem
        onClick={() => setSelected('list')}
        active={selected === 'list'}
      >
        List
      </MenuItem>
      <MenuItem
        onClick={() => setSelected('board')}
        active={selected === 'board'}
      >
        Board
      </MenuItem>
    </Menu>
  );
};

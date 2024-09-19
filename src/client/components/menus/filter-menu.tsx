import { MenuItem } from '@/client/components/base/menu/menu-item';
import { Menu } from '@/client/components/base/menu/menu';
import { Divider } from '@/client/components/base/menu/divider';
import { MenuHeader } from '@/client/components/base/menu/menu-header';
import { useState } from 'react';

export const FilterMenu = () => {
  const [selected, setSelected] = useState<string | undefined>(undefined);

  return (
    <Menu>
      <MenuHeader>Filter by...</MenuHeader>

      <Divider />

      <MenuItem onClick={() => setSelected('createdOldest')} active={selected === 'createdOldest'}>
        Created (Oldest)
      </MenuItem>
      <MenuItem onClick={() => setSelected('createdNewest')} active={selected === 'createdNewest'}>
        Created (Newest)
      </MenuItem>
      <MenuItem onClick={() => setSelected('updatedOldest')} active={selected === 'updatedOldest'}>
        Updated (Oldest)
      </MenuItem>
      <MenuItem onClick={() => setSelected('updatedNewest')} active={selected === 'updatedNewest'}>
        Updated (Newest)
      </MenuItem>
    </Menu>
  );
};

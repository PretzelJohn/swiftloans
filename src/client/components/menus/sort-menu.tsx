import { MenuItem } from '@/client/components/base/menu/menu-item';
import { Menu } from '@/client/components/base/menu/menu';
import { Divider } from '@/client/components/base/menu/divider';
import { MenuHeader } from '@/client/components/base/menu/menu-header';
import { useState } from 'react';

type SortOption =
  | 'createdOldest'
  | 'createdNewest'
  | 'updatedOldest'
  | 'updatedNewest';

export const SortMenu = () => {
  const [selected, setSelected] = useState<SortOption>('createdOldest');

  return (
    <Menu>
      <MenuHeader>Sort by...</MenuHeader>

      <Divider />

      <MenuItem
        onClick={() => setSelected('createdOldest')}
        active={selected === 'createdOldest'}
      >
        Created (Oldest)
      </MenuItem>
      <MenuItem
        onClick={() => setSelected('createdNewest')}
        active={selected === 'createdNewest'}
      >
        Created (Newest)
      </MenuItem>
      <MenuItem
        onClick={() => setSelected('updatedOldest')}
        active={selected === 'updatedOldest'}
      >
        Updated (Oldest)
      </MenuItem>
      <MenuItem
        onClick={() => setSelected('updatedNewest')}
        active={selected === 'updatedNewest'}
      >
        Updated (Newest)
      </MenuItem>
    </Menu>
  );
};

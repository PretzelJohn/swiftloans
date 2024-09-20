import { SortMenu } from '@/client/features/view/components/sort-menu';
import { FilterMenu } from '@/client/features/view/components/filter-menu';
import FilterIcon from '@/assets/icons/filter.svg';
import { DisplayMenu } from '@/client/features/view/components/display-menu';
import LayoutIcon from '@/assets/icons/layout.svg';
import SortIcon from '@/assets/icons/repeat.svg';
import { ViewButton } from '@/client/features/view/components/view-button';

export const ViewOptions = () => {
  return (
    <div className='flex'>
      <ViewButton icon={SortIcon}>
        <SortMenu />
      </ViewButton>

      <ViewButton icon={FilterIcon}>
        <FilterMenu />
      </ViewButton>

      <ViewButton icon={LayoutIcon}>
        <DisplayMenu />
      </ViewButton>
    </div>
  );
};

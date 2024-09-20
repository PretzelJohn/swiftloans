'use client';

import { TitleBar } from '@/client/features/navigation/components/title-bar';
import { SearchInput } from '@/client/components/fields/search-input';
import { Popover } from '@/client/features/popover/components/popover';
import { Button } from '@/client/components/button/button';
import PlusIcon from '@/assets/icons/plus.svg';
import { View } from '@/client/features/view/components/view';
import type { Column } from '@/client/components/table/table';
import { ReportModal } from '@/client/features/reports/components/report-modal';

const defaultData: string[][] = [
  [
    'Leads Report - September 16, 2024',
    'Leads',
    '09/16/2024',
  ],
  [
    'Pipeline Report - September 16, 2024',
    'Pipeline',
    '09/16/2024',
  ],
  [
    'Sales Report - September 16, 2024',
    'Sales',
    '09/16/2024',
  ],
  [
    'Task Report - September 16, 2024',
    'Task',
    '09/16/2024',
  ],
  [
    'Leads Report - September 15, 2024',
    'Leads',
    '09/15/2024',
  ],
  [
    'Pipeline Report - September 15, 2024',
    'Pipeline',
    '09/15/2024',
  ],
  [
    'Sales Report - September 15, 2024',
    'Sales',
    '09/15/2024',
  ],
  [
    'Task Report - September 15, 2024',
    'Task',
    '09/15/2024',
  ],
];

const columns: Column[] = [
  {
    name: 'name',
    width: '0',
    align: 'left',
  },
  {
    name: 'category',
    width: '0',
    align: 'left',
  },
  {
    name: 'created',
    width: '90px',
    align: 'right',
  },
];

export default function Reports() {
  return (
    <>
      <TitleBar title='Reports'>
        <SearchInput onSearch={(query) => console.log(query)} />
      </TitleBar>

      <View columns={columns} data={defaultData}>
        <Popover
          onClickOutside={() => {}}
          content={<ReportModal />}
        >
          <Button>
            <PlusIcon className='h-5 w-5 shrink-0' />
            Create Report
          </Button>
        </Popover>
      </View>
    </>
  );
}

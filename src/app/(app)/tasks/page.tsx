'use client';

import { TitleBar } from '@/client/features/navigation/components/title-bar';
import { SearchInput } from '@/client/components/fields/search-input';
import { View } from '@/client/features/view/components/view';
import { TaskModal } from '@/client/features/tasks/components/task-modal';
import { Button } from '@/client/components/button/button';
import { Popover } from '@/client/features/popover/components/popover';
import PlusIcon from '@/assets/icons/plus.svg';
import type { Column } from '@/client/components/table/table';

const defaultData: string[][] = [
  [
    'Connect your Google Account',
    '-',
    '-',
    'In Progress',
    '09/05/2024',
  ],
  [
    'Follow up with Susan B.',
    '-',
    '-',
    'In Progress',
    '09/16/2024',
  ],
  [
    'Call new lead: Lucas Hussey',
    '-',
    '-',
    'Not Started',
    '09/19/2024',
  ],
  [
    'Call new lead: Lukas Haffer',
    '-',
    '-',
    'Done',
    '09/20/2024',
  ],
  [
    'Submit documents for Lukas Haffer',
    '-',
    '-',
    'Not Started',
    '09/20/2024',
  ],
];

const columns: Column[] = [
  {
    name: 'name',
    width: '0',
    align: 'left',
  },
  {
    name: 'description',
    width: '0',
    align: 'left',
  },
  {
    name: 'reminder',
    width: '120px',
    align: 'left',
  },
  {
    name: 'status',
    width: '80px',
    align: 'left',
  },
  {
    name: 'created',
    width: '90px',
    align: 'right',
  },
];

export default function Tasks() {
  return (
    <>
      <TitleBar title='Tasks'>
        <SearchInput onSearch={(query) => console.log(query)} />
      </TitleBar>

      <View columns={columns} data={defaultData}>
        <Popover
          onClickOutside={() => {}}
          content={<TaskModal />}
        >
          <Button>
            <PlusIcon className='h-5 w-5 shrink-0' />
            Create Task
          </Button>
        </Popover>
      </View>
    </>
  );
}

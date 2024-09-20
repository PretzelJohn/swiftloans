'use client';

import { TitleBar } from '@/client/features/navigation/components/title-bar';
import { SearchInput } from '@/client/components/fields/search-input';
import { Popover } from '@/client/features/popover/components/popover';
import { Button } from '@/client/components/button/button';
import PlusIcon from '@/assets/icons/plus.svg';
import { View } from '@/client/features/view/components/view';
import type { Column } from '@/client/components/table/table';
import { ContactModal } from '@/client/features/contacts/components/contact-modal';

const defaultData: string[][] = [
  [
    'Isaiah Williams',
    '(123) 456-7890',
    'isaiah.williams@cascading.ai',
    'Web',
    'Customer',
    '09/10/2024',
  ],
  [
    'Lukas Haffer',
    '(234) 567-8901',
    'lukas.haffer@cascading.ai',
    'Email',
    'Lead',
    '09/10/2024',
  ],
  [
    'Justin Norwood',
    '(345) 678-9012',
    'justin.norwood@cascading.ai',
    'Phone',
    'Customer',
    '09/11/2024',
  ],
  [
    'Elliot Chong',
    '(456) 789-0123',
    'elliot.chong@cascading.ai',
    'Web',
    'Missing Information',
    '09/11/2024',
  ],
  [
    'Serhii Nechyporchuck',
    '(567) 890-1234',
    'serhii.nechyporchuck@cascading.ai',
    'Email',
    'Missing Information',
    '09/11/2024',
  ],
  [
    'Lucas Hussey',
    '(678) 901-2345',
    'lucas.hussey@cascading.ai',
    'Phone',
    'Lead',
    '09/12/2024',
  ],
  [
    'John Smith',
    '(789) 012-3456',
    'john.smith@cascading.ai',
    'Web',
    'Customer',
    '09/13/2024',
  ],
];

const columns: Column[] = [
  {
    name: 'name',
    width: '0',
    align: 'left',
  },
  {
    name: 'phone',
    width: '180px',
    align: 'left',
  },
  {
    name: 'email',
    width: '0',
    align: 'left',
  },
  {
    name: 'source',
    width: '120px',
    align: 'left',
  },
  {
    name: 'status',
    width: '180px',
    align: 'left',
  },
  {
    name: 'created',
    width: '90px',
    align: 'right',
  },
];

export default function Contacts() {
  return (
    <>
      <TitleBar title='Contacts'>
        <SearchInput onSearch={(query) => console.log(query)} />
      </TitleBar>

      <View columns={columns} data={defaultData}>
        <Popover
          onClickOutside={() => {}}
          content={<ContactModal />}
        >
          <Button>
            <PlusIcon className='h-5 w-5 shrink-0' />
            Create Contact
          </Button>
        </Popover>
      </View>
    </>
  );
}

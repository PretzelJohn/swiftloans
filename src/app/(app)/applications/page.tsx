'use client';

import { TitleBar } from '@/client/features/navigation/components/title-bar';
import { SearchInput } from '@/client/components/fields/search-input';
import { View } from '@/client/features/view/components/view';
import type { Column } from '@/client/components/table/table';

const defaultData: string[][] = [
  [
    'Justin Norwood',
    'Swift Loans',
    'Rejected',
    '09/12/2024',
  ],
  [
    'Lucas Hussey',
    'Fidelity',
    'Awaiting Documents',
    '09/16/2024',
  ],
  [
    'Lukas Haffer',
    'Miland',
    'Awaiting Documents',
    '09/19/2024',
  ],
  [
    'Serhii Nechyporchuck',
    'Bank of America',
    'Started',
    '09/19/2024',
  ],
  [
    'Isaiah Williams',
    'Fidelity',
    'Approved',
    '09/20/2024',
  ],
  [
    'Elliott Chong',
    'Swift Loans',
    'Started',
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
    name: 'lender',
    width: '0',
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

export default function Applications() {
  return (
    <>
      <TitleBar title='Applications'>
        <SearchInput onSearch={(query) => console.log(query)} />
      </TitleBar>

      <View columns={columns} data={defaultData} />
    </>
  );
}

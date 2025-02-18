import { useState } from 'react';
import { type Column, Table } from '@/client/components/table/table';
import { titles } from '@/client/features/dashboard/providers/metric-context-provider';

const defaultData: string[][] = [
  [
    'Serhii Nechyporchuck',
    '(567) 890-1234',
    'serhii.nechyporchuck@cascading.ai',
    'Email',
    '09/11/2024',
  ],
  [
    'Lucas Hussey',
    '(678) 901-2345',
    'lucas.hussey@cascading.ai',
    'Phone',
    '09/12/2024',
  ],
  [
    'John Smith',
    '(789) 012-3456',
    'john.smith@cascading.ai',
    'Web',
    '09/13/2024',
  ],
  [
    'Isaiah Williams',
    '(123) 456-7890',
    'isaiah.williams@cascading.ai',
    'Web',
    '09/10/2024',
  ],
  [
    'Lukas Haffer',
    '(234) 567-8901',
    'lukas.haffer@cascading.ai',
    'Email',
    '09/10/2024',
  ],
  [
    'Justin Norwood',
    '(345) 678-9012',
    'justin.norwood@cascading.ai',
    'Phone',
    '09/11/2024',
  ],
  [
    'Elliot Chong',
    '(456) 789-0123',
    'elliot.chong@cascading.ai',
    'Web',
    '09/11/2024',
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
    width: '120px',
    align: 'left',
  },
  {
    name: 'email',
    width: '0',
    align: 'left',
  },
  {
    name: 'source',
    width: '60px',
    align: 'left',
  },
  {
    name: 'created',
    width: '90px',
    align: 'right',
  },
];

export const SalesTable = () => {
  const [data, _setData] = useState(() => [...defaultData]);

  return (
    <>
      <div className='flex justify-between items-center gap-2 w-full p-4 border-b'>
        <h2 className='font-semibold'>{titles.sales}</h2>
      </div>

      <Table columns={columns} data={data} />
    </>
  );
};

import type { TableProps } from '@/client/components/table/table';

export const TableHead = ({ columns }: TableProps) => {
  return (
    <thead className='border-b'>
      <tr className='flex gap-2 px-4 py-2 pt-2.5 w-full'>
        {columns.map((column, index) => (
          <th
            key={index}
            className='text-brand-tertiary text-small font-normal uppercase'
            style={{
              textAlign: column.align ?? 'left',
              width: column.width,
              flexGrow: column.width === '0' ? 1 : 0,
              flexShrink: 0,
            }}
          >
            {column.name}
          </th>
        ))}
      </tr>
    </thead>
  );
};

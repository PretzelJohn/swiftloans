import type { TableProps } from '@/client/components/base/table/table';
import { TableRow } from '@/client/components/base/table/table-row';

export const TableBody = ({ columns, data }: TableProps) => {
  return (
    <tbody className='flex flex-col px-4'>
      {data.map((row, index) => (
        <TableRow
          key={index}
          columns={columns}
          row={row}
          isLastRow={index === data.length - 1}
          data={data}
        />
      ))}
    </tbody>
  );
};

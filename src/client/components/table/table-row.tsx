import type { TableProps } from '@/client/components/table/table';
import { TableCell } from '@/client/components/table/table-cell';
import { twMerge } from 'tailwind-merge';

interface TableRowProps extends TableProps {
  row: string[];
  isLastRow: boolean;
}

export const TableRow = ({ columns, row, isLastRow, data }: TableRowProps) => {
  return (
    <tr className={twMerge('flex gap-2 py-4 w-full', !isLastRow && 'border-b')}>
      {row.map((column, index) => (
        <TableCell
          key={index}
          value={column}
          index={index}
          columns={columns}
          data={data}
        />
      ))}
    </tr>
  );
};

import type { TableProps } from '@/client/components/table/table';

interface TableCellProps extends TableProps {
  value: string;
  index: number;
}

export const TableCell = ({ value, index, columns }: TableCellProps) => {
  return (
    <td
      className='text-small truncate'
      style={{
        textAlign: columns[index]?.align ?? 'left',
        width: columns[index]?.width,
        flexGrow: columns[index]?.width === '0' ? 1 : 0,
        flexShrink: 0,
      }}
    >
      {value}
    </td>
  );
};

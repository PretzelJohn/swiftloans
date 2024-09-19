import { TableHead } from '@/client/components/base/table/table-head';
import { TableBody } from '@/client/components/base/table/table-body';

export type Column = {
  name: string;
  width: string;
  align: 'left' | 'center' | 'right';
};

export interface TableProps {
  columns: Column[];
  data: string[][];
}

export const Table = ({ columns, data }: TableProps) => {
  return (
    <table className='flex flex-col w-full'>
      <TableHead columns={columns} data={data} />
      <TableBody columns={columns} data={data} />
    </table>
  );
};

import { type Column, Table } from '@/client/components/table/table';
import { Card } from '@/client/components/card/card';
import { ViewOptions } from '@/client/features/view/components/view-options';
import {
  useViewContext,
  ViewContextProvider,
} from '@/client/features/view/providers/view-context-provider';
import type { PropsWithChildren } from 'react';

interface ViewTableProps {
  columns: Column[];
}

const ViewTable = ({ columns }: ViewTableProps) => {
  const { data } = useViewContext();

  return (
    <Card>
      <Table columns={columns} data={data} />
    </Card>
  );
};

interface ViewProps extends ViewTableProps {
  data: string[][];
}

export const View = ({
  columns,
  data,
  children,
}: PropsWithChildren<ViewProps>) => {
  return (
    <ViewContextProvider defaultData={data}>
      <div className='flex justify-between items-center gap-2 w-full'>
        <div>{children}</div>

        <ViewOptions />
      </div>

      <ViewTable columns={columns} />
    </ViewContextProvider>
  );
};

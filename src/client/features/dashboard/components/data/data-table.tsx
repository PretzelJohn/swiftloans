import {
  type MetricOption,
  useMetricContext,
} from '@/client/features/dashboard/providers/metric-context-provider';
import { LeadsTable } from '@/client/components/tables/dashboard/leads-table';
import { ApplicationsTable } from '@/client/components/tables/dashboard/applications-table';
import { DealsTable } from '@/client/components/tables/dashboard/deals-table';
import { SalesTable } from '@/client/components/tables/dashboard/sales-table';
import { Card } from '@/client/components/base/card/card';

export const tables: Record<MetricOption, () => JSX.Element> = {
  leads: LeadsTable,
  applications: ApplicationsTable,
  deals: DealsTable,
  sales: SalesTable,
};

export const DataTable = () => {
  const { selected } = useMetricContext();

  const Table = tables[selected];

  return (
    <Card className='col-span-1 xl:col-span-3 2xl:col-span-4 flex flex-col overflow-y-hidden'>
      <Table />
    </Card>
  );
};

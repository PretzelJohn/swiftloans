import {
  type MetricOption,
  useMetricContext,
} from '@/client/features/dashboard/providers/metric-context-provider';
import { NewLeadsTable } from '@/client/features/dashboard/components/data/tables/new-leads-table';
import { NewApplicationsTable } from '@/client/features/dashboard/components/data/tables/new-applications-table';
import { DealsTable } from '@/client/features/dashboard/components/data/tables/deals-table';
import { SalesTable } from '@/client/features/dashboard/components/data/tables/sales-table';
import { Card } from '@/client/components/card/card';

export const tables: Record<MetricOption, () => JSX.Element> = {
  leads: NewLeadsTable,
  applications: NewApplicationsTable,
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

'use client';

import { DataTable } from '@/client/features/dashboard/components/data/data-table';
import { TasksCard } from '@/client/features/dashboard/components/data/tasks-card';
import { ReportsCard } from '@/client/features/dashboard/components/data/reports-card';

export const DataSection = () => {
  return (
    <div className='grid grid-cols-1 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
      <DataTable />

      <div className='col-span-1 xl:col-span-2 2xl:col-span-2 flex flex-col lg:flex-row xl:flex-col gap-8 w-full'>
        <TasksCard />
        <ReportsCard />
      </div>
    </div>
  );
};

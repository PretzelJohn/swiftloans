'use client';

import { TitleBar } from '@/client/features/navigation/components/title-bar';
import { MetricSection } from '@/client/features/dashboard/components/metrics/metric-section';
import { DataSection } from '@/client/features/dashboard/components/data/data-section';
import { MetricContextProvider } from '@/client/features/dashboard/providers/metric-context-provider';

export const OverviewPage = () => {
  return (
    <MetricContextProvider>
      <TitleBar title='Overview'></TitleBar>

      <div className='flex flex-col gap-8'>
        <MetricSection />
        <DataSection />
      </div>
    </MetricContextProvider>
  );
};

'use client';

import { MetricCardGroup } from '@/client/features/dashboard/components/metrics/metric-card-group';
import { Chart } from '@/client/features/dashboard/components/metrics/chart';
import { Card } from '@/client/components/base/card/card';

export const MetricSection = () => {
  return (
    <Card className='grid grid-cols-1 lg:grid-cols-4 2xl:grid-cols-5'>
      <MetricCardGroup />
      <Chart />
    </Card>
  );
};

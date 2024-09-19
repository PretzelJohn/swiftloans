import { MetricCard } from '@/client/features/dashboard/components/metrics/metric-card';
import { useMetricContext } from '@/client/features/dashboard/providers/metric-context-provider';

export const MetricCardGroup = () => {
  const { selected, setSelected } = useMetricContext();

  return (
    <div className='col-span-1 lg:col-span-2 grid grid-cols-1 md:grid-cols-2 w-full'>
      <MetricCard
        name='New Leads'
        value='14'
        change={7}
        active={selected === 'leads'}
        onClick={() => setSelected('leads')}
      />
      <MetricCard
        name='New Applications'
        value='4'
        change={33}
        active={selected === 'applications'}
        onClick={() => setSelected('applications')}
      />
      <MetricCard
        name='Closed Deals'
        value='1'
        change={-50}
        active={selected === 'deals'}
        onClick={() => setSelected('deals')}
      />
      <MetricCard
        name='Sales'
        value='$10,000'
        change={-60}
        active={selected === 'sales'}
        onClick={() => setSelected('sales')}
      />
    </div>
  );
};

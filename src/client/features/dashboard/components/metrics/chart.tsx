import {
  titles,
  useMetricContext,
} from '@/client/features/dashboard/providers/metric-context-provider';
import { Card } from '@/client/components/base/card/card';

export const Chart = () => {
  const { selected } = useMetricContext();

  return (
    <div className='col-span-1 lg:col-span-2 2xl:col-span-3 flex flex-col w-full gap-2 p-4'>
      <h2 className='font-semibold text-brand'>{titles[selected]}</h2>

      <Card className='flex flex-col gap-4 p-4 w-full h-full'>
        <>{/* TODO: add chart */}</>
      </Card>
    </div>
  );
};

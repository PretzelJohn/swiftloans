import { twMerge } from 'tailwind-merge';
import ActivityIcon from '@/assets/icons/activity.svg';
import { Tag } from '@/client/components/tag/tag';

type Variant = 'default' | 'active';

const variants: Record<Variant, string> = {
  default: 'text-brand border-r border-b',
  active: 'text-white bg-link',
};

interface MetricCardProps {
  active?: boolean;
  name: string;
  value: string;
  change: number;
  onClick: () => void;
}

export const MetricCard = ({
  active,
  name,
  value,
  change,
  onClick,
}: MetricCardProps) => {
  const variant = active ? 'active' : 'default';
  const isPositive = change >= 0;

  return (
    <button
      type='button'
      className={twMerge(
        'flex flex-col w-full gap-4 p-6 mb-[-1px]',
        variants[variant]
      )}
      onClick={onClick}
    >
      <div className='flex w-full items-center justify-between gap-2'>
        <h2 className='text-small font-semibold truncate'>{name}</h2>

        <div className={twMerge('p-1 rounded', active && 'bg-white')}>
          <ActivityIcon className='h-4 w-4 shrink-0 text-link' />
        </div>
      </div>

      <div className='flex flex-col gap-2 text-left'>
        <h3 className='text-heading'>{value}</h3>

        <Tag variant={isPositive ? 'positive' : 'danger'}>
          {isPositive && '+'}
          {change}%
        </Tag>
      </div>
    </button>
  );
};

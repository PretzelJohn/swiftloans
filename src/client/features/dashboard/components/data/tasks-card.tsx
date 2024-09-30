import { Card } from '@/client/components/card/card';
import LayerIcon from '@/shared/assets/icons/layers.svg';
import { Link } from '@/client/components/links/link';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useCallback } from 'react';
import { StatusIcon } from '@/client/features/tasks/components/status-icon';
import type { TaskStatus } from '@/client/features/tasks/types';

dayjs.extend(relativeTime);

type Task = {
  status: TaskStatus;
  name: string;
  lastUpdated: number;
};

const tasks: Task[] = [
  {
    status: 'inProgress',
    name: 'Connect your Google Account',
    lastUpdated: Date.now() - 2 * 7 * 24 * 60 * 60 * 1000,
  },
  {
    status: 'inProgress',
    name: 'Follow up with Susan B.',
    lastUpdated: Date.now() - 4 * 24 * 60 * 60 * 1000,
  },
  {
    status: 'notStarted',
    name: 'Call new lead: Lucas Hussey',
    lastUpdated: Date.now() - 18 * 60 * 60 * 1000,
  },
  {
    status: 'notStarted',
    name: 'Submit documents for Lukas Haffer',
    lastUpdated: Date.now() - 37 * 60 * 1000,
  },
];

export const TasksCard = () => {
  const formatTime = useCallback((date: number) => {
    const fromNow = dayjs(date).fromNow();
    const tokens = fromNow.split(' ');

    return (tokens[0] ?? '') + tokens[1]?.slice(0, 1);
  }, []);

  return (
    <Card className='w-full'>
      <div className='flex flex-wrap items-center justify-between gap-2 px-4 py-3 border-b w-full'>
        <h2 className='flex items-center gap-2 font-semibold'>
          <LayerIcon className='h-4 w-4 shrink-0' />
          Tasks
        </h2>

        <Link href='/tasks'>All tasks &rarr;</Link>
      </div>

      <div className='flex flex-col gap-4 p-4'>
        {tasks.map((task, index) => (
          <div key={index} className='flex items-center gap-2'>
            <StatusIcon status={task.status} />
            <p className='grow truncate'>{task.name}</p>
            <p className='text-brand-tertiary'>
              {formatTime(task.lastUpdated)}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
};

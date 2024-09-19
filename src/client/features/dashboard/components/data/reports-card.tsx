import { Card } from '@/client/components/base/card/card';
import FileTextIcon from '@/assets/icons/file-text.svg';
import { Link } from '@/client/components/base/links/link';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useCallback } from 'react';

dayjs.extend(relativeTime);

type Task = {
  name: string;
  createdAt: number;
};

const reports: Task[] = [
  {
    name: 'Leads Report',
    createdAt: Date.now() - 6 * 60 * 60 * 1000,
  },
  {
    name: 'Pipeline Report',
    createdAt: Date.now() - 7 * 60 * 60 * 1000,
  },
  {
    name: 'Sales Report',
    createdAt: Date.now() - 7 * 60 * 60 * 1000,
  },
  {
    name: 'Task Report',
    createdAt: Date.now() - 8 * 60 * 60 * 1000,
  },
];

export const ReportsCard = () => {
  const formatTime = useCallback((date: number) => {
    const fromNow = dayjs(date).fromNow();
    const tokens = fromNow.split(' ');

    return (tokens[0] ?? '') + tokens[1]?.slice(0, 1);
  }, []);

  return (
    <Card className='w-full'>
      <div className='flex flex-wrap items-center justify-between gap-2 px-4 py-3 border-b w-full'>
        <h2 className='flex items-center gap-2 font-semibold'>
          <FileTextIcon className='h-4 w-4 shrink-0' />
          Reports
        </h2>

        <Link href='/reports'>All reports &rarr;</Link>
      </div>

      <div className='flex flex-col gap-4 p-4'>
        {reports.map((report, index) => (
          <div key={index} className='flex items-center gap-2'>
            <p className='grow truncate'>{report.name}</p>
            <p className='text-brand-tertiary'>
              {formatTime(report.createdAt)}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
};

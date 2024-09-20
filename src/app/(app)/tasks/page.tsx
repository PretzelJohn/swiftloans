import { TasksPage } from '@/client/pages/app/tasks-page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tasks',
};

export default async function Tasks() {
  return <TasksPage />;
}

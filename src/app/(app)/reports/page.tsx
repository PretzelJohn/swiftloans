import { ReportsPage } from '@/client/pages/app/reports-page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reports',
};

export default async function Reports() {
  return <ReportsPage />;
}

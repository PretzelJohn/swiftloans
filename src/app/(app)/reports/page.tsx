import { ReportsPage } from '@/client/pages/app/reports-page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reports',
};

export default function Reports() {
  return <ReportsPage />;
}

import type { Metadata } from 'next';
import { OverviewPage } from '@/client/pages/app/overview-page';

export const metadata: Metadata = {
  title: 'Overview',
};

export default async function Overview() {
  return <OverviewPage />;
}

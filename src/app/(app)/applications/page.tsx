import { ApplicationsPage } from '@/client/pages/app/applications-page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Applications',
};

export default function Applications() {
  return <ApplicationsPage />;
}

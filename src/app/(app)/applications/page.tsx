import { ApplicationsPage } from '@/client/pages/app/applications-page';
import type { Metadata } from 'next';
import { HydrateClient } from '@/utils/trpc/server';

export const metadata: Metadata = {
  title: 'Applications',
};

export default async function Applications() {
  return (
    <HydrateClient>
      <ApplicationsPage />
    </HydrateClient>
  );
}

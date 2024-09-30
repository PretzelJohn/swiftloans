import { ContactsPage } from '@/client/pages/app/contacts-page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacts',
};

export default async function Contacts() {
  return <ContactsPage />;
}

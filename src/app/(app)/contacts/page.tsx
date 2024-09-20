import { ContactsPage } from '@/client/pages/app/contacts-page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacts',
};

export default function Contacts() {
  return <ContactsPage />;
}

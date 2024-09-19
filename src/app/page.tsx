import { redirect } from 'next/navigation';

export default function Index() {
  //TODO: redirect to overview if logged in
  redirect('/login');
}

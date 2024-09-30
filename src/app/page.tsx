import { redirect } from 'next/navigation';
import { auth } from '@/utils/auth/auth';

export default async function Index() {
  const session = await auth();

  if (session?.user) {
    return redirect('/overview');
  } else {
    return redirect('/login');
  }
}

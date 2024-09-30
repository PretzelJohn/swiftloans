import { NavbarSide } from '@/client/features/navigation/components/navbar-side';
import type { PropsWithChildren } from 'react';
import { redirect, RedirectType } from 'next/navigation';
import { trpc } from '@/utils/trpc/server';
import { auth } from '@/utils/auth/auth';

export default async function Layout({ children }: PropsWithChildren) {
  const session = await auth();

  if (!session?.user?.id) {
    return redirect(`/login`, RedirectType.replace);
  }

  const userData = await trpc.getUser({
    id: session.user.id,
  });

  return (
    <div className='flex flex-col sm:flex-row overflow-y-hidden'>
      <NavbarSide user={userData.user ?? undefined} />
      <main className='flex flex-col gap-6 min-h-svh w-full px-8 py-10 overflow-y-scroll max-h-svh'>
        {children}
      </main>
    </div>
  );
}

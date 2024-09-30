import { NavbarTop } from '@/client/features/navigation/components/navbar-top';
import type { PropsWithChildren } from 'react';
import { auth } from '@/utils/auth/auth';
import { redirect, RedirectType } from 'next/navigation';

export default async function Layout({ children }: PropsWithChildren) {
  const session = await auth();

  if (session?.user?.id) {
    return redirect('/overview', RedirectType.replace);
  }

  return (
    <>
      <NavbarTop />
      <main className='flex flex-col min-h-[calc(100svh-56px)] w-full items-center justify-center p-4'>
        {children}
      </main>
    </>
  );
}

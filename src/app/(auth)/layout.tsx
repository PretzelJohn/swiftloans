import { NavbarTop } from '@/client/features/navigation/components/navbar-top';
import type { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <NavbarTop />
      <main className='flex flex-col min-h-[calc(100svh-56px)] w-full items-center justify-center p-4'>
        {children}
      </main>
    </>
  );
}

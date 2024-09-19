import { NavbarSide } from '@/client/features/navigation/components/navbar-side';
import type { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className='flex overflow-y-hidden'>
      <NavbarSide />
      <main className='flex flex-col gap-6 min-h-svh w-full px-8 py-10 overflow-y-scroll max-h-svh'>
        {children}
      </main>
    </div>
  );
}

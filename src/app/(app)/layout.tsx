import { NavbarSide } from '@/client/components/navigation/navbar-side';
import type { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className='flex'>
      <NavbarSide />
      <main className='flex flex-col min-h-svh w-full p-4'>{children}</main>
    </div>
  );
}

'use client';

import Logo from '@/assets/images/logo-white.svg';
import GridIcon from '@/assets/icons/grid.svg';
import LayersIcon from '@/assets/icons/layers.svg';
import UsersIcon from '@/assets/icons/users.svg';
import PaperclipIcon from '@/assets/icons/paperclip.svg';
import FileIcon from '@/assets/icons/file-text.svg';
import Link from 'next/link';
import { NavLink } from '@/client/components/base/links/nav-link';
import { Divider } from '@/client/components/base/menu/divider';
import { ProfileSection } from '@/client/components/navigation/profile-section';

export const NavbarSide = () => {
  return (
    <nav className='flex flex-col gap-4 justify-between h-svh py-8 px-6 bg-brand text-on-brand min-w-60'>
      <div className='flex flex-col gap-12'>
        <Link href='/'>
          <Logo className='h-6 shrink-0' />
        </Link>

        <div className='flex flex-col gap-2 w-full'>
          <NavLink href='/overview'>
            <GridIcon className='h-5 w-5 shrink-0' />
            Overview
          </NavLink>
          <NavLink href='/tasks'>
            <LayersIcon className='h-5 w-5 shrink-0' />
            Tasks
          </NavLink>
          <NavLink href='/contacts'>
            <UsersIcon className='h-5 w-5 shrink-0' />
            Contacts
          </NavLink>
          <NavLink href='/applications'>
            <PaperclipIcon className='h-5 w-5 shrink-0' />
            Applications
          </NavLink>
          <NavLink href='/reports'>
            <FileIcon className='h-5 w-5 shrink-0' />
            Reports
          </NavLink>
        </div>
      </div>

      <div className='flex flex-col gap-4'>
        <Divider variant='dark' />
        <ProfileSection />
      </div>
    </nav>
  );
};

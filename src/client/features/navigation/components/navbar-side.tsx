import Logo from '@/shared/assets/images/logo-white.svg';
import GridIcon from '@/shared/assets/icons/grid.svg';
import LayersIcon from '@/shared/assets/icons/layers.svg';
import UsersIcon from '@/shared/assets/icons/users.svg';
import PaperclipIcon from '@/shared/assets/icons/paperclip.svg';
import FileIcon from '@/shared/assets/icons/file-text.svg';
import Link from 'next/link';
import { NavLink } from '@/client/components/links/nav-link';
import { Divider } from '@/client/components/menu/divider';
import { ProfileSection } from '@/client/features/profile/components/profile-section';
import type { AppUser } from '@/shared/schema/user';

interface NavbarSideProps {
  user?: AppUser;
}

export const NavbarSide = ({ user }: NavbarSideProps) => {
  return (
    <nav className='flex flex-col gap-4 justify-between sm:h-svh py-8 px-6 bg-brand text-on-brand w-full sm:w-72'>
      <div className='flex flex-col gap-12'>
        <Link href='/'>
          <Logo className='h-6 shrink-0' name='Logo' />
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
        <ProfileSection user={user} />
      </div>
    </nav>
  );
};

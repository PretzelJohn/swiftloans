import Logo from '@/shared/assets/images/logo.svg';
import Link from 'next/link';

export const NavbarTop = () => {
  return (
    <nav className='w-full h-fit py-4 px-6'>
      <Link href='/'>
        <Logo className='h-6 shrink-0' name='Logo' />
      </Link>
    </nav>
  );
};

import Logo from '@/assets/images/logo.svg';
import Link from 'next/link';

export const NavbarTop = () => {
  return (
    <nav className='w-full h-fit py-4 px-6'>
      <Link href='/public'>
        <Logo className='h-6 shrink-0' />
      </Link>
    </nav>
  );
};

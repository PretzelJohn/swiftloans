import Logo from '@/assets/images/logo.svg';
import Image from 'next/image';
import Link from 'next/link';

export const NavbarTop = () => {
  return (
    <nav className='w-full h-fit py-4 px-6'>
      <Link href='/'>
        <Image src={Logo} alt='Swift Loans' width={133} height={24} />
      </Link>
    </nav>
  );
};

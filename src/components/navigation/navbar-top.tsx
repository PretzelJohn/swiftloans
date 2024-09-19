import Logo from '@/assets/images/logo.svg';
import Image from 'next/image';

export const NavbarTop = () => {
  return (
    <nav className='w-full h-fit p-4 px-6'>
      <Image src={Logo} alt='Swift Loans' height={24} priority />
    </nav>
  );
};

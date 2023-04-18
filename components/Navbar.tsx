import Link from 'next/link';

import { Logo } from './Icons';
import { LinkButton } from './Links';

function Navbar() {
  return (
    <nav className='flex items-center justify-between py-6 md:py-8'>
      <Link href='/' className='block focus:outline-none'>
        <Logo className='w-auto h-8' />
      </Link>
      <LinkButton href='/signin'>Sign in</LinkButton>
    </nav>
  );
}

export default Navbar;

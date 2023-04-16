import Link from 'next/link';
import { Logo } from './Icons';

function Navbar() {
  return (
    <nav className='py-6 md:py-8'>
      <Link href='/' className='block'>
        <Logo className='h-8 w-auto' />
      </Link>
    </nav>
  );
}

export default Navbar;

import Link from 'next/link';
import { Logo } from './Icons';
import { ButtonSolid } from './Buttons';

function Navbar() {
  return (
    <nav className='flex items-center justify-between py-6 md:py-8'>
      <Link
        href='/'
        className='block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:rounded focus:ring-slate-700'
      >
        <Logo className='h-8 w-auto' />
      </Link>
      <ButtonSolid>Sign in</ButtonSolid>
    </nav>
  );
}

export default Navbar;

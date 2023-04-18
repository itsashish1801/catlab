import Link from 'next/link';

interface LinkProps {
  children: string;
  href: string;
}

export function LinkButton({ children, href }: LinkProps) {
  return (
    <Link
      href={href}
      className='inline-flex items-center justify-center py-2 font-semibold rounded group px-7 focus:outline-none bg-slate-800 text-slate-50 hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 '
    >
      {children}
    </Link>
  );
}

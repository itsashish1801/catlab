import Image from 'next/image';
import Link from 'next/link';
import { ReactElement } from 'react';

interface TestStatsCardProps {
  title: string;
  testAttempted: number;
  totalTests: number;
  Icon: () => ReactElement;
}

interface TestSectionCardProps {
  image: string;
  title: string;
  imageAlt: string;
  contentCount: number;
  href: string;
}

export function TestStatsCard({
  title,
  testAttempted,
  totalTests,
  Icon,
}: TestStatsCardProps) {
  return (
    <div className='flex items-center p-6 bg-white rounded-lg shadow-md gap-x-5'>
      <Icon />
      <div>
        <h4 className='font-semibold'>{title}</h4>
        <p className='text-sm text-slate-600'>
          <span className='font-semibold text-emerald-500'>
            {testAttempted}
          </span>{' '}
          out of {totalTests} attempted
        </p>
      </div>
    </div>
  );
}

export function TestSectionCard({
  title,
  image,
  imageAlt,
  contentCount,
  href,
}: TestSectionCardProps) {
  return (
    <Link href={href} className='relative block group'>
      <div className='absolute z-0 w-full h-full transition scale-95 rounded-md opacity-0 bg-slate-200/60 group-hover:scale-110 group-hover:opacity-100' />
      <div className='relative'>
        <Image src={image} alt={imageAlt} className='rounded-md shadow-md' />
        <h2 className='mt-3 font-semibold cursor-pointer'>{title}</h2>
        <p className='text-sm mt-0.5 cursor-pointer'>{contentCount} content</p>
      </div>
    </Link>
  );
}

import Head from 'next/head';
import { ReactElement } from 'react';

import Navbar from './Navbar';

interface LayoutProps {
  children: ReactElement;
  className?: string;
}

function Layout({ children, className }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Catlab - CAT tests on steroids</title>
        <meta
          name='description'
          content='Preparing for CAT? Give your preparation a boost using Catlab.'
        />
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <div className={`container max-w-7xl mx-auto px-5 ${className}`}>
        <Navbar />
        <main>{children}</main>
      </div>
    </>
  );
}

export default Layout;

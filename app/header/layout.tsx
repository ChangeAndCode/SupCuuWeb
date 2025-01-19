'use client';

import React, { ReactNode } from 'react';
import dynamic from 'next/dynamic';

const Logo = dynamic(() => import('./components/Logo'), { ssr: false });
const NavLinks = dynamic(() => import('./components/NavLink'), { ssr: false });

interface HeaderLayoutClientProps {
  children?: React.ReactNode;
}

const HeaderLayout: React.FC<HeaderLayoutClientProps> = ({ children }) => {
  return (
    <>
      <header className="fixed top-0 left-0 w-full flex items-center justify-between py-6 px-14 bg-ColorPrincipal z-50">
        <Logo />
        <NavLinks />
      </header>
      <div>{children}</div>
    </>
  );
};

export default HeaderLayout;

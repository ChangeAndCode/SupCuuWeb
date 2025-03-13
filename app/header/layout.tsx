// HeaderLayout.tsx
'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import LocaleSelector from '@components/Localization/LocaleSelector';
import { NavLink } from '@/types/umbraco';

const Logo = dynamic(() => import('./components/Logo'), { ssr: false });
const NavLinks = dynamic(() => import('./components/NavLink'), { ssr: false });

interface HeaderLayoutProps {
  navLinks: NavLink[];
}

const HeaderLayout: React.FC<HeaderLayoutProps> = ({ navLinks }) => {
  return (
    <header className="fixed top-0 left-0 w-full flex items-center py-6 px-14 bg-ColorPrincipal z-50">
      {/* Left section with logo */}
      <div className="flex-shrink-0">
        <Logo />
      </div>

      {/* Right section with nav links and locale selector */}
      <div className="flex items-center ml-auto">
        <LocaleSelector />
        <div className="ml-4">
          <NavLinks navLinks={navLinks} />
        </div>
      </div>
    </header>
  );
};

export default HeaderLayout;

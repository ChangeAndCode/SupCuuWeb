// HeaderLayout.tsx
import React from 'react';
import LocaleSelector from '@components/Localization/LocaleSelector';
import { NavLink, UmbracoImage } from '@/types/umbraco';
import Logo from './components/Logo';
import NavLinks from './components/NavLink';

interface HeaderLayoutProps {
  navLinks: NavLink[];
  companyLogo?: UmbracoImage | null;
}

const HeaderLayout: React.FC<HeaderLayoutProps> = ({ navLinks, companyLogo }) => {
  const companyLogoUrl = companyLogo?.[0]?.url;
  
  return (
    <header className="fixed top-0 left-0 w-full flex items-center py-6 pl-14 pr-6 bg-ColorPrincipal z-50">
      {/* Left section with logo */}
      <div className="flex-shrink-0">
        <Logo logoUrl={companyLogoUrl ?? null} />
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

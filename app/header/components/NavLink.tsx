// components/NavLink.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { NavLink } from '@/types/umbraco';

interface NavLinksProps {
  navLinks: NavLink[];
}

const NavLinks: React.FC<NavLinksProps> = ({ navLinks }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const menuRef = useRef<HTMLUListElement | null>(null);

  const toggleSubMenu = (label: string) => {
    setActiveSubMenu(activeSubMenu === label ? null : label);
  };

  const handleSubLinkClick = () => {
    setActiveSubMenu(null);
    if (isMobile) {
      setIsOpen(false);
    }
  };

  const handleScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setActiveSubMenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <button
        type="button"
        className="block xl:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
          />
        </svg>
      </button>

      <nav
        className={`${
          isOpen ? 'block' : 'hidden'
        } xl:block absolute xl:static top-16 left-0 w-full xl:w-auto bg-ColorPrincipal xl:bg-transparent shadow-md xl:shadow-none z-10`}
      >
        <ul
          ref={menuRef}
          className="flex flex-col xl:flex-row space-y-4 xl:space-y-0 xl:space-x-6 p-4 xl:p-0"
        >
          {navLinks.map((link) => (
            <li
              key={link.label}
              className={`relative ${
                isMobile && link.label === activeSubMenu ? 'mb-12' : ''
              }`}
            >
              {link.subLinks ? (
                <button
                  onClick={() => toggleSubMenu(link.label)}
                  className="text-white font-poppins hover:text-blue-200 font-semibold uppercase transition-colors"
                >
                  {link.label}
                </button>
              ) : link.external ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-poppins hover:text-blue-200 font-semibold uppercase transition-colors"
                >
                  {link.label}
                </a>
              ) : link.href?.startsWith('#') ? (
                <button
                  onClick={() => handleScrollTo(link.href!.substring(1))}
                  className="text-white font-poppins hover:text-blue-200 font-semibold uppercase transition-colors"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  href={link.href as string}
                  className="text-white font-poppins hover:text-blue-200 font-semibold uppercase transition-colors"
                >
                  {link.label}
                </Link>
              )}

              {link.subLinks && activeSubMenu === link.label && (
                <ul
                  className={`absolute left-0 mt-2 bg-white shadow-md text-black p-4 rounded-lg space-y-2 z-20 ${
                    link.label === 'About us' ? 'w-64' : 'w-full'
                  }`}
                >
                  {link.subLinks.map((subLink) => (
                    <li key={subLink.label}>
                      {subLink.href?.startsWith('#') ? (
                        <button
                          onClick={() => {
                            handleScrollTo(subLink.href!.substring(1));
                            handleSubLinkClick();
                          }}
                          className="block w-full text-left text-black font-poppins hover:text-blue-500 font-semibold uppercase transition-colors"
                        >
                          {subLink.label}
                        </button>
                      ) : (
                        <Link
                          href={subLink.href as string}
                          className="block text-black font-poppins hover:text-blue-500 font-semibold uppercase transition-colors"
                          onClick={handleSubLinkClick}
                        >
                          {subLink.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavLinks;

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
  const subMenuRefs = useRef<Map<string, HTMLUListElement>>(new Map());

  const toggleSubMenu = (id: string, event: React.MouseEvent) => {
    event.stopPropagation();
    setActiveSubMenu(activeSubMenu === id ? null : id);
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

  // Position submenu based on available screen space
  useEffect(() => {
    if (activeSubMenu) {
      const subMenu = subMenuRefs.current.get(activeSubMenu);
      if (subMenu) {
        const rect = subMenu.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        
        // Reset position first
        subMenu.style.left = '0';
        subMenu.style.right = 'auto';
        
        // Calculate if submenu goes beyond right edge
        if (rect.right > viewportWidth) {
          // Position from right instead of left
          subMenu.style.left = 'auto';
          subMenu.style.right = '0';
        }
        
        // Ensure minimum width for the submenu
        subMenu.style.minWidth = '200px';
        
        // If mobile, make it full width of parent
        if (isMobile) {
          subMenu.style.width = '100%';
        }
      }
    }
  }, [activeSubMenu, isMobile]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveSubMenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
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
          {navLinks.map((link, index) => {
            // Generate a unique ID for each link
            const linkId = `nav-link-${index}`;
            const displayLabel = link.label || 'Menu Item';
            
            return (
              <li
                key={linkId}
                className={`relative ${
                  isMobile && activeSubMenu === linkId ? 'mb-16' : ''
                }`}
              >
                {link.subLinks && link.subLinks.length > 0 ? (
                  <button
                    onClick={(e) => toggleSubMenu(linkId, e)}
                    className="text-white font-poppins hover:text-blue-200 font-semibold uppercase transition-colors"
                  >
                    {displayLabel}
                  </button>
                ) : link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-poppins hover:text-blue-200 font-semibold uppercase transition-colors"
                  >
                    {displayLabel}
                  </a>
                ) : link.href?.startsWith('#') ? (
                  <button
                    onClick={() => handleScrollTo(link.href!.substring(1))}
                    className="text-white font-poppins hover:text-blue-200 font-semibold uppercase transition-colors"
                  >
                    {displayLabel}
                  </button>
                ) : (
                  <Link
                    href={link.href || '#'}
                    className="text-white font-poppins hover:text-blue-200 font-semibold uppercase transition-colors"
                  >
                    {displayLabel}
                  </Link>
                )}

                {link.subLinks && link.subLinks.length > 0 && activeSubMenu === linkId && (
                  <ul
                    ref={(el) => {
                      if (el) subMenuRefs.current.set(linkId, el);
                    }}
                    className="absolute mt-2 bg-white shadow-md text-black p-4 rounded-lg space-y-2 z-20"
                    style={{ 
                      minWidth: '200px',
                      maxWidth: '300px',
                      boxSizing: 'border-box'
                    }}
                  >
                    {link.subLinks.map((subLink, subIndex) => {
                      const subLinkId = `${linkId}-sublink-${subIndex}`;
                      const subLinkLabel = subLink.label || 'Submenu Item';
                      
                      return (
                        <li key={subLinkId}>
                          {subLink.href?.startsWith('#') ? (
                            <button
                              onClick={() => {
                                handleScrollTo(subLink.href!.substring(1));
                                handleSubLinkClick();
                              }}
                              className="block w-full text-left text-black font-poppins hover:text-blue-500 font-semibold uppercase transition-colors"
                            >
                              {subLinkLabel}
                            </button>
                          ) : (
                            <Link
                              href={subLink.href || '#'}
                              className="block text-black font-poppins hover:text-blue-500 font-semibold uppercase transition-colors"
                              onClick={handleSubLinkClick}
                            >
                              {subLinkLabel}
                            </Link>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default NavLinks;

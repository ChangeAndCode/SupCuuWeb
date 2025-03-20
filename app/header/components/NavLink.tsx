'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { NavLink } from '@/types/umbraco';

interface NavLinksProps {
  navLinks: NavLink[];
}

const NavLinks: React.FC<NavLinksProps> = ({ navLinks }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenus, setActiveMenus] = useState<Set<string>>(new Set());
  const [isMobile, setIsMobile] = useState(false);
  const menuRef = useRef<HTMLUListElement | null>(null);
  const subMenuRefs = useRef<Map<string, HTMLUListElement>>(new Map());

  const toggleMenu = (id: string, event: React.MouseEvent) => {
    event.stopPropagation();
    
    setActiveMenus(prevActiveMenus => {
      const newActiveMenus = new Set(prevActiveMenus);
      
      if (newActiveMenus.has(id)) {
        // Find and remove this menu and all its children
        const toRemove = Array.from(newActiveMenus).filter(
          menu => menu === id || menu.startsWith(`${id}-`)
        );
        toRemove.forEach(menu => newActiveMenus.delete(menu));
      } else {
        newActiveMenus.add(id);
      }
      
      return newActiveMenus;
    });
  };

  const handleSubLinkClick = () => {
    setActiveMenus(new Set());
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

  // Position submenus based on available screen space
  useEffect(() => {
    subMenuRefs.current.forEach((subMenu, id) => {
      if (activeMenus.has(id)) {
        const rect = subMenu.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        
        // Handle horizontal overflow
        if (rect.right > viewportWidth) {
          if (id.includes('-')) {
            // For nested submenus, position to the left of parent
            subMenu.style.left = 'auto';
            subMenu.style.right = '100%';
          } else {
            // For top-level, align to right of parent
            subMenu.style.left = 'auto';
            subMenu.style.right = '0';
          }
        }
        
        // Handle vertical overflow
        if (rect.bottom > viewportHeight) {
          const overflow = rect.bottom - viewportHeight;
          // Ensure the submenu doesn't go below viewport
          if (id.includes('-')) {
            // For nested submenus
            subMenu.style.top = 'auto';
            subMenu.style.bottom = '0';
          } else {
            // For top-level, scroll if needed
            subMenu.style.maxHeight = `${rect.height - overflow - 20}px`;
            subMenu.style.overflowY = 'auto';
          }
        }
      }
    });
  }, [activeMenus, isMobile]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenus(new Set());
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

  // Recursive function to render menu items
  const renderMenuItem = (link: NavLink, parentId: string = '', index: number = 0) => {
    const hasSubLinks = link.subLinks && link.subLinks.length > 0;
    const id = parentId ? `${parentId}-${index}` : `nav-${index}`;
    const isActive = activeMenus.has(id);
    const displayLabel = link.label || 'Menu Item';
    
    // Check if this is a top-level menu item (no parent) or an item in a dropdown
    const isInDropdown = parentId !== '';
    
    // Apply styling based on whether item is in a dropdown
    const textColorClass = isInDropdown 
      ? "text-black hover:text-blue-500" 
      : "text-white hover:text-blue-200";

    return (
      <li 
        key={id} 
        className={`relative ${isMobile && isActive && hasSubLinks ? 'mb-16' : ''}`}
      >
        {hasSubLinks ? (
          // It's a dropdown menu
          <button
            onClick={(e) => toggleMenu(id, e)}
            className={`${textColorClass} font-poppins font-semibold uppercase transition-colors`}
          >
            {displayLabel}
          </button>
        ) : link.external ? (
          // It's an external link
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${textColorClass} font-poppins font-semibold uppercase transition-colors`}
          >
            {displayLabel}
          </a>
        ) : link.href?.startsWith('#') ? (
          // It's an anchor link
          <button
            onClick={() => handleScrollTo(link.href!.substring(1))}
            className={`${textColorClass} font-poppins font-semibold uppercase transition-colors`}
          >
            {displayLabel}
          </button>
        ) : (
          // It's a normal internal link
          <Link
            href={link.href || '#'}
            className={`${textColorClass} font-poppins font-semibold uppercase transition-colors`}
          >
            {displayLabel}
          </Link>
        )}

        {/* Render submenu if it has children and is active */}
        {hasSubLinks && isActive && (
          <ul
            ref={(el) => {
              if (el) subMenuRefs.current.set(id, el);
            }}
            className="absolute bg-white shadow-md text-black p-4 rounded-lg space-y-2 z-20"
            style={{ 
              minWidth: '200px',
              maxWidth: '300px',
              left: isInDropdown ? '100%' : '0',
              top: isInDropdown ? '0' : 'auto',
              marginLeft: isInDropdown ? '1px' : '0',
              marginTop: isInDropdown ? '0' : '8px',
              boxSizing: 'border-box' 
            }}
          >
            {link.subLinks!.map((subLink, subIndex) => 
              renderMenuItem(subLink, id, subIndex)
            )}
          </ul>
        )}
      </li>
    );
  };

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
          {navLinks.map((link, index) => renderMenuItem(link, '', index))}
        </ul>
      </nav>
    </div>
  );
};

export default NavLinks;

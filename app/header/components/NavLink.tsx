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
    setActiveMenus((prevActiveMenus) => {
      const newActiveMenus = new Set(prevActiveMenus);
      if (newActiveMenus.has(id)) {
        // Find and remove this menu and all its children
        const toRemove = Array.from(newActiveMenus).filter(
          (menu) => menu === id || menu.startsWith(`${id}-`),
        );
        toRemove.forEach((menu) => newActiveMenus.delete(menu));
      } else {
        // Mobile/Tablet: Just toggle the clicked menu, don't close siblings
        if (isMobile) {
          newActiveMenus.add(id);
        } else {
          // Desktop: Close sibling menus at the same level
          const parentPrefix = id.includes('-')
            ? id.substring(0, id.lastIndexOf('-'))
            : '';
          // Remove menus that share the same parent but are not this menu or its children
          Array.from(newActiveMenus).forEach((menu) => {
            // For top-level menus (no parent)
            if (!parentPrefix && !menu.includes('-') && menu !== id) {
              newActiveMenus.delete(menu);
            }
            // For nested menus with the same parent
            else if (
              parentPrefix &&
              menu.startsWith(parentPrefix + '-') &&
              !menu.startsWith(id) && // Don't close children of the menu being opened
              menu.substring(0, menu.lastIndexOf('-')) === parentPrefix // Ensure it's a direct sibling
            ) {
              // Close the sibling and its children
              const siblingToRemove = Array.from(newActiveMenus).filter(
                (m) => m === menu || m.startsWith(`${menu}-`),
              );
              siblingToRemove.forEach((m) => newActiveMenus.delete(m));
            }
          });
          // Add the current menu
          newActiveMenus.add(id);
        }
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
    } else {
      console.warn(`[handleScrollTo] Element not found: ${elementId}`);
    }
    handleSubLinkClick();
  };

  // Desktop submenu positioning
  useEffect(() => {
    // Only run positioning logic for desktop view
    if (isMobile || activeMenus.size === 0) return;

    const positionSubmenus = () => {
      // Process from top level to deepest nested to avoid cascade effects
      const sortedMenuIds = Array.from(activeMenus).sort((a, b) => 
        (a.match(/-/g) || []).length - (b.match(/-/g) || []).length
      );
      
      for (const id of sortedMenuIds) {
        const subMenu = subMenuRefs.current.get(id);
        if (!subMenu) continue;
        
        // First reset all styles to get accurate measurements
        subMenu.style.visibility = 'hidden'; // Hide during positioning
        subMenu.style.left = '';
        subMenu.style.right = '';
        subMenu.style.top = '';
        subMenu.style.bottom = '';
        subMenu.style.maxHeight = '';
        subMenu.style.overflowY = '';
        subMenu.style.position = 'absolute'; // Ensure this is set
        
        // Check if this is a first-level dropdown or a nested submenu
        // First-level: only has "nav-N" format (starts with "nav-" and has no other hyphens)
        // Nested: has at least one more hyphen beyond the initial "nav-" prefix
        const isFirstLevel = id.startsWith('nav-') && !id.substring(4).includes('-');
        const isNestedSubmenu = !isFirstLevel;
        
        // Apply initial positioning based on menu level
        if (isNestedSubmenu) {
          // Nested submenus appear to the right
          subMenu.style.left = '100%';
          subMenu.style.top = '1.5rem';
          subMenu.style.marginLeft = '1px';
        } else {
          // First-level menus appear below the parent
          subMenu.style.left = '0';
          subMenu.style.top = '100%';
          subMenu.style.marginTop = '8px';
        }
        
        // Force layout calculation
        void subMenu.offsetHeight;
        
        // Now get accurate measurements
        const rect = subMenu.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        
        // Handle horizontal overflow with priority direction
        if (rect.right > viewportWidth - 20) {
          if (isNestedSubmenu) {
            // Try left side first for nested menus
            subMenu.style.left = 'auto';
            subMenu.style.right = '100%';
            subMenu.style.marginLeft = '0';
            subMenu.style.marginRight = '1px';
            
            // Check if it now overflows to the left
            void subMenu.offsetHeight;
            const newRect = subMenu.getBoundingClientRect();
            if (newRect.left < 20) {
              // If it overflows left too, choose the side with more space
              if (rect.right - viewportWidth < newRect.left) {
                // Reset to right side with scroll if needed
                subMenu.style.left = '100%';
                subMenu.style.right = 'auto';
                subMenu.style.marginLeft = '1px';
                subMenu.style.marginRight = '0';
                subMenu.style.maxWidth = `${viewportWidth - rect.left - 40}px`;
                subMenu.style.overflowX = 'auto';
              }
            }
          } else {
            // For top-level menus, align right if overflows
            subMenu.style.left = 'auto';
            subMenu.style.right = '0';
          }
        }
        
        // Handle vertical overflow
        void subMenu.offsetHeight;
        const updatedRect = subMenu.getBoundingClientRect();
        if (updatedRect.bottom > viewportHeight - 20) {
          const availableHeight = viewportHeight - updatedRect.top - 20;
          
          if (isNestedSubmenu) {
            if (availableHeight < 100) {
              // If there's very little space below, position above
              subMenu.style.top = 'auto';
              subMenu.style.bottom = '0';
            } else {
              // Otherwise, constrain height and add scroll
              subMenu.style.maxHeight = `${availableHeight}px`;
              subMenu.style.overflowY = 'auto';
            }
          } else {
            // For top level, just constrain height
            subMenu.style.maxHeight = `${availableHeight}px`;
            subMenu.style.overflowY = 'auto';
          }
        }
        
        // Make visible again
        subMenu.style.visibility = 'visible';
      }
    };

    // Position after a slight delay to ensure the DOM has updated
    const timer = setTimeout(positionSubmenus, 0);
    return () => clearTimeout(timer);
  }, [activeMenus, isMobile]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenus(new Set());
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      // Consider everything below xl breakpoint (1280px) as mobile/tablet for navigation
      const newIsMobile = window.innerWidth < 1280;
      // If transitioning between mobile and desktop, reset active menus
      if (newIsMobile !== isMobile) {
        setActiveMenus(new Set());
      }
      setIsMobile(newIsMobile);
      if (!newIsMobile) {
        setIsOpen(false); // Close mobile overlay if resizing to desktop
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

  // Recursive function to render menu items
  const renderMenuItem = (
    link: NavLink,
    parentId: string = '',
    index: number = 0,
  ): React.ReactNode => {
    const id = parentId ? `${parentId}-${index}` : `nav-${index}`;
    const hasSubLinks = link.subLinks && link.subLinks.length > 0;
    const isActive = activeMenus.has(id);
    const displayLabel = link.label || 'Menu Item';

    const isInDropdown = parentId !== '';
    const textColorClass = isInDropdown
      ? 'text-black hover:text-blue-500'
      : 'text-white hover:text-blue-200';

    // Count nesting level for mobile indentation
    const nestingLevel = parentId ? parentId.split('-').length : 0;
    
    let renderedElement: React.ReactNode;

    if (hasSubLinks) {
      renderedElement = (
        <button
          onClick={(e) => toggleMenu(id, e)}
          className={`${textColorClass} font-poppins font-semibold uppercase transition-colors flex items-center justify-between w-full`}
        >
          <span>{displayLabel}</span>
          
          {/* Show chevron only for mobile/tablet - improved alignment */}
          {isMobile && (
            <svg 
              className={`flex-shrink-0 w-5 h-5 mr-4 transition-transform duration-200 ${isActive ? 'transform rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
             
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M19 9l-7 7-7-7"
              />
            </svg>
          )}
        </button>
      );
    } else if (link.external) {
      renderedElement = (
        <a
          href={link.href || '#'} // Added fallback just in case
          target="_blank"
          rel="noopener noreferrer"
          className={`${textColorClass} font-poppins font-semibold uppercase transition-colors w-full block`}
          onClick={handleSubLinkClick} // Close menu on click
        >
          {displayLabel}
        </a>
      );
      if (!link.href) {
        console.warn(
          `[renderMenuItem] Warning: Rendering external link id ${id} with fallback href="#" because link.href is null or undefined.`,
          link,
        );
      }
    } else if (link.href?.startsWith('#')) {
      renderedElement = (
        <button
          onClick={() => handleScrollTo(link.href!.substring(1))}
          className={`${textColorClass} font-poppins font-semibold uppercase transition-colors w-full text-left`}
        >
          {displayLabel}
        </button>
      );
    } else {
      if (!link.href) {
        console.warn(
          `[renderMenuItem] Warning: Rendering internal link id ${id} with fallback href="#" because link.href is null or undefined.`,
          link,
        );
      }
      renderedElement = (
        <Link
          href={link.href || '#'} // Fallback to '#'
          className={`${textColorClass} font-poppins font-semibold uppercase transition-colors w-full block`}
          onClick={handleSubLinkClick} // Close menu on click
        >
          {displayLabel}
        </Link>
      );
    }

    // Prepare submenu rendering logic, different for mobile vs desktop
    let subMenu = null;
    if (hasSubLinks && isActive) {
      if (isMobile) {
        // Mobile/Tablet: accordion style menu with white background and black text
        subMenu = (
          <ul className="mt-2 space-y-2 bg-white rounded-md overflow-hidden text-black">
            {link.subLinks!.map((subLink, subIndex) =>
              renderMenuItem(subLink, id, subIndex),
            )}
          </ul>
        );
      } else {
        // Desktop: flyout menu
        subMenu = (
          <ul
            ref={(el) => {
              if (el) {
                subMenuRefs.current.set(id, el);
              } else {
                subMenuRefs.current.delete(id);
              }
            }}
            className="absolute bg-white shadow-md text-black p-4 rounded-lg space-y-2 z-20"
            style={{
              minWidth: '200px',
              maxWidth: '300px',
              visibility: 'hidden', // Start hidden, will be made visible by useEffect
              boxSizing: 'border-box',
            }}
          >
            {link.subLinks!.map((subLink, subIndex) =>
              renderMenuItem(subLink, id, subIndex),
            )}
          </ul>
        );
      }
    }

    return (
      <li
        key={id}
        className={`relative ${isMobile ? 'w-full' : ''}`}
        style={{
          position: 'relative',
          isolation: isMobile ? 'auto' : 'isolate',
          // For mobile/tablet: add padding based on nesting level
          ...(isMobile && isInDropdown ? { paddingLeft: `${nestingLevel * 12}px` } : {})
        }}
      >
        {/* Improved mobile menu item container for better alignment */}
        <div className={isMobile ? 'py-2' : ''}>
          {renderedElement}
        </div>
        {subMenu}
      </li>
    );
  };

  return (
    <div>
      {/* Mobile/Tablet hamburger button - visible below xl breakpoint */}
      <button
        type="button"
        className="block xl:hidden text-white"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
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

      {/* Navigation container */}
      <nav
        className={`${
          isOpen ? 'block' : 'hidden'
        } xl:block absolute xl:static top-16 left-0 w-full xl:w-auto bg-ColorPrincipal xl:bg-transparent shadow-md xl:shadow-none z-10`}
        style={{ 
          maxHeight: isOpen ? 'calc(100vh - 64px)' : 'none',
          overflowY: isOpen ? 'auto' : 'visible'
        }}
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

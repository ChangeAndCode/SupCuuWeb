'use client'; 
import { useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/events-opportunities', label: 'Events & Opportunities' },
  { href: '/startup', label: 'Startup' },
  { href: '/ecosystem', label: 'Ecosystem' },
  { href: '/explore-learn', label: 'Explore & Learn' },
  { href: '/contact', label: 'Contact' },
];

const NavLinks = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Botón hamburguesa */}
      <button
        className='block lg:hidden text-white'
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-10 w-10'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
          />
        </svg>
      </button>

      {/* Enlaces de navegación */}
      <nav
        className={`${
          isOpen ? 'block' : 'hidden'
        } lg:block absolute lg:static top-16 left-0 w-full lg:w-auto bg-ColorPrincipal lg:bg-transparent shadow-md lg:shadow-none`}
      >
        <ul className='flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 p-4 lg:p-0'>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className='text-white hover:text-blue-200 uppercase font-bold transition-colors'
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavLinks;

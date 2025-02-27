'use client';

import { useLocale } from './LocaleContext';
import { AVAILABLE_LOCALES } from '@/lib/Localization/constants';
import { CheckIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { useEffect, useState, useRef } from 'react';

// Enhanced locale details with proper flag emojis
const LOCALE_DETAILS = {
  'en-us': { name: 'English', flag: '🇺🇸' },
  'es-mx': { name: 'Español', flag: '🇲🇽' },
};

const LocaleSelector = () => {
  const { locale, setLocale, isLoading } = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close dropdown on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) setIsOpen(false);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  if (isLoading) {
    return (
      <div className="flex items-center text-white">
        <GlobeAltIcon className="h-5 w-5 animate-spin" />
      </div>
    );
  }

  return (
    <div className="relative" ref={menuRef}>
      <div className="relative inline-block">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center p-2 text-white hover:bg-white/10 rounded-full transition-colors"
        >
          <GlobeAltIcon className="h-5 w-5" aria-hidden="true" />
          <span className="sr-only">
            {LOCALE_DETAILS[locale]?.name || locale}
          </span>
        </button>
        
        {isOpen && (
          <div className="absolute right-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg focus:outline-none py-1 z-50">
            {AVAILABLE_LOCALES.map((localeOption) => (
              <button
                key={localeOption}
                onClick={() => {
                  setLocale(localeOption);
                  setIsOpen(false);
                }}
                className={`w-full text-left py-2 px-4 hover:bg-blue-50 hover:text-blue-700 text-gray-700`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {LOCALE_DETAILS[localeOption]?.flag && (
                      <span className="mr-2 text-base">
                        {LOCALE_DETAILS[localeOption].flag}
                      </span>
                    )}
                    <span
                      className={`block truncate ${
                        locale === localeOption
                          ? "font-medium"
                          : "font-normal"
                      }`}
                    >
                      {LOCALE_DETAILS[localeOption]?.name ||
                        localeOption}
                    </span>
                  </div>
                  {locale === localeOption && (
                    <CheckIcon className="h-4 w-4 text-blue-500 flex-shrink-0" />
                  )}
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LocaleSelector;

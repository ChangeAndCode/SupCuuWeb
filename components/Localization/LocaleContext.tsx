// components/Localization/LocaleContext.tsx
'use client';
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { AVAILABLE_LOCALES, DEFAULT_LOCALE } from '@/lib/Localization/constants';

type LocaleContextType = {
  locale: string;
  setLocale: (locale: string) => void;
  isLoading: boolean;
};

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocaleState] = useState(DEFAULT_LOCALE);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  // Initialize locale from cookie or browser preference
  useEffect(() => {
    const savedLocale = Cookies.get('preferredLocale');
    
    if (savedLocale && AVAILABLE_LOCALES.includes(savedLocale)) {
      setLocaleState(savedLocale);
    } else {
      // Try to match browser locale
      const browserLocale = navigator.language.toLowerCase();
      const matchedLocale = AVAILABLE_LOCALES.find(
        locale => browserLocale.startsWith(locale.split('-')[0])
      );
      
      if (matchedLocale) {
        setLocaleState(matchedLocale);
        Cookies.set('preferredLocale', matchedLocale, { expires: 365 });
      }
    }
    
    setIsLoading(false);
  }, []);

  const setLocale = (newLocale: string) => {
    if (AVAILABLE_LOCALES.includes(newLocale) && newLocale !== locale) {
      setLocaleState(newLocale);
      Cookies.set('preferredLocale', newLocale, { expires: 365 });
      
      // Refresh the current page to get new localized content
      router.refresh();
    }
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, isLoading }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = (): LocaleContextType => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
};

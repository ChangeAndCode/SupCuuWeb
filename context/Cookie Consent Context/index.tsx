// context/CookieConsentContext.tsx
'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useCallback,
} from 'react';
import Cookies from 'js-cookie';
// Ensure this import path is correct for your project structure
import { CookieCategoryIdentifier } from '@/types/Cookie Consent';

// Define consent status possibilities
export type ConsentStatus = 'pending' | 'necessary' | 'accepted';

type CookieConsentContextType = {
  consentStatus: ConsentStatus;
  acceptedCategories: CookieCategoryIdentifier[];
  isLoading: boolean;
  acceptNecessary: () => void;
  acceptSelection: (selectedCategories: CookieCategoryIdentifier[]) => void;
  hasConsent: (category: CookieCategoryIdentifier) => boolean;
};

const CookieConsentContext = createContext<
  CookieConsentContextType | undefined
>(undefined);

const CONSENT_STATUS_COOKIE = 'cookie_consent_status';
const CONSENT_PREFS_COOKIE = 'cookie_consent_prefs';
const COOKIE_EXPIRY_DAYS = 365;

export const CookieConsentProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [consentStatus, setConsentStatus] = useState<ConsentStatus>('pending');
  const [acceptedCategories, setAcceptedCategories] = useState<
    CookieCategoryIdentifier[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedStatus = Cookies.get(CONSENT_STATUS_COOKIE) as
      | ConsentStatus
      | undefined;
    const storedPrefs = Cookies.get(CONSENT_PREFS_COOKIE);

    if (storedStatus && storedStatus !== 'pending') {
      setConsentStatus(storedStatus);
      let categories: CookieCategoryIdentifier[] = []; // Functional are always implicitly accepted
      if (storedStatus === 'accepted' && storedPrefs) {
        try {
          const parsedPrefs = JSON.parse(storedPrefs);
          if (Array.isArray(parsedPrefs)) {
            categories = categories.concat(
              parsedPrefs.filter((p) =>
                Object.values(CookieCategoryIdentifier).includes(p),
              ),
            );
          }
        } catch (e) {
          console.error('Error parsing cookie preferences:', e);
          setConsentStatus('necessary');
          Cookies.set(CONSENT_STATUS_COOKIE, 'necessary', {
            expires: COOKIE_EXPIRY_DAYS,
          });
          Cookies.remove(CONSENT_PREFS_COOKIE);
        }
      }
      setAcceptedCategories(categories);
    } else {
      setConsentStatus('pending');
      setAcceptedCategories([]);
    }
    setIsLoading(false);
  }, []);

  const acceptNecessary = useCallback(() => {
    const newStatus: ConsentStatus = 'necessary';
    const newCategories: CookieCategoryIdentifier[] = [];

    setConsentStatus(newStatus);
    setAcceptedCategories(newCategories);
    Cookies.set(CONSENT_STATUS_COOKIE, newStatus, {
      expires: COOKIE_EXPIRY_DAYS,
    });
    Cookies.remove(CONSENT_PREFS_COOKIE);
    setIsLoading(false);
  }, []);

  const acceptSelection = useCallback(
    (selectedOptionalCategories: CookieCategoryIdentifier[]) => {
      const newStatus: ConsentStatus = 'accepted';
      const newCategories: CookieCategoryIdentifier[] = [
        ...selectedOptionalCategories,
      ];

      setConsentStatus(newStatus);
      setAcceptedCategories(newCategories);
      Cookies.set(CONSENT_STATUS_COOKIE, newStatus, {
        expires: COOKIE_EXPIRY_DAYS,
      });
      Cookies.set(
        CONSENT_PREFS_COOKIE,
        JSON.stringify(selectedOptionalCategories),
        { expires: COOKIE_EXPIRY_DAYS },
      );
      setIsLoading(false);
    },
    [],
  );

  const hasConsent = useCallback(
    (category: CookieCategoryIdentifier): boolean => {
      return acceptedCategories.includes(category);
    },
    [acceptedCategories],
  );

  return (
    <CookieConsentContext.Provider
      value={{
        consentStatus,
        acceptedCategories,
        isLoading,
        acceptNecessary,
        acceptSelection,
        hasConsent,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
};

export const useCookieConsent = (): CookieConsentContextType => {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error(
      'useCookieConsent must be used within a CookieConsentProvider',
    );
  }
  return context;
};

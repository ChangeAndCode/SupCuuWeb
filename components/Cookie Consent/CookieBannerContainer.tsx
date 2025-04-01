// components/CookieConsent/CookieBannerContainer.tsx
'use client';

import { useCookieConsent } from '@/context/Cookie Consent Context';
import CookieBanner from './CookieBanner';
import { CookieBannerContent } from '@/types/Cookie Consent';

export default function CookieBannerContainer({ 
  content 
}: { 
  content: CookieBannerContent 
}) {
  const { consentStatus } = useCookieConsent();
  
  // Only show the banner if consent is pending
  if (consentStatus !== 'pending') {
    return null;
  }

  return <CookieBanner content={content} />;
}

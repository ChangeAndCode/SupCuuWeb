// lib/getLocale.ts
import { cookies, headers } from 'next/headers';
import { AVAILABLE_LOCALES, DEFAULT_LOCALE } from './constants';

export async function getLocale(): Promise<string> {
  try {
    // First try to get locale from cookies
    const cookieStore = await cookies();
    const savedLocale = cookieStore.get('preferredLocale')?.value;
    
    if (savedLocale && AVAILABLE_LOCALES.includes(savedLocale)) {
      return savedLocale;
    }
    
    // Then try to get locale from Accept-Language header
    const headersList = await headers();
    const acceptLanguage = headersList.get('Accept-Language') || '';
    
    // Parse Accept-Language header
    const acceptedLanguages = acceptLanguage
      .split(',')
      .map(lang => lang.split(';')[0].trim().toLowerCase());
    
    // Find the first supported locale
    for (const lang of acceptedLanguages) {
      const matchedLocale = AVAILABLE_LOCALES.find(
        locale => lang.startsWith(locale.split('-')[0])
      );
      if (matchedLocale) {
        return matchedLocale;
      }
    }
  } catch (error) {
    console.error('Error getting locale:', error);
    // If anything fails, return the default locale
  }
  
  // Default fallback
  return DEFAULT_LOCALE;
}

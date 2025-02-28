// hooks/useLocalizedData.ts
'use client';
import { useState, useEffect } from 'react';
import { useLocale } from '@/components/Localization/LocaleContext';
import { UmbracoApi } from '@/lib/api';
import { UmbracoContent } from '@/types/umbraco';

export function useLocalizedData(path: string) {
  const { locale, isLoading: isLocaleLoading } = useLocale();
  const [data, setData] = useState<UmbracoContent | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (isLocaleLoading) return;
    
    setIsLoading(true);
    
    UmbracoApi.getContent(path, locale)
      .then((content) => {
        setData(content);
        setError(null);
      })
      .catch((err) => {
        console.error('Error fetching localized content:', err);
        setError(err instanceof Error ? err : new Error(String(err)));
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [path, locale, isLocaleLoading]);

  return { data, isLoading: isLoading || isLocaleLoading, error };
}

// lib/server/umbracoApi.ts
import { UmbracoContent } from "@/types/umbraco";
import { getCachedContent, setCachedContent } from "@/utils/cache";

const UMBRACO_API_URL = process.env.UMBRACO_API_URL;
const API_KEY = process.env.UMBRACO_API_KEY;

export async function getUmbracoContent(
  path: string,
  culture: string = 'en-us',
  fields: string = 'properties[$all]'
): Promise<UmbracoContent> {
  try {
    // Cache key built using path and culture
    const cacheKey = `${path}:${culture}:${fields}`;
    const cached = getCachedContent(cacheKey);

    if (cached) {
      return cached;
    }

    // Direct API call to Umbraco
    const apiUrl = `${UMBRACO_API_URL}/content/item/${encodeURIComponent(
      path
    )}?fields=${fields}`;
    const response = await fetch(apiUrl, {
      headers: {
        Accept: 'application/json',
        'Api-Key': API_KEY as string,
        'Accept-Language': culture
      },
      next: { revalidate: 60 } // Next.js cache control
    });
    if (!response.ok) {
        if (response.status === 404) {
          throw new Error('The fetched data does not exist, contact the admin, something went wrong.');
        }
      throw new Error(`API Error: ${response.status}`);
    }

    const content = (await response.json()) as UmbracoContent;
    // Save in cache for future requests
    setCachedContent(cacheKey, content);
    return content;
  } catch (error) {
    console.error('Failed to fetch content:', error);
    throw error;
  }
}

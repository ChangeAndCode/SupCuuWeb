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
      console.log(`Cache hit for ${cacheKey}`); // Add this log
      return cached;
    }

    // Direct API call to Umbraco
    const apiUrl = `${UMBRACO_API_URL}/content/item/${encodeURIComponent(
      path
    )}?fields=${fields}`;
    const cacheTag = `umbraco-content:${path}`;

    console.log(`Fetching from Umbraco: ${apiUrl}`); // Add this log

    const response = await fetch(apiUrl, {
      headers: {
        Accept: 'application/json',
        'Api-Key': API_KEY as string,
        'Accept-Language': culture
      },
      next: {
        revalidate: 10, // Revalidate every 10 seconds (adjust as needed)
        tags: [cacheTag]
      }
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
    console.log(`Content cached for ${cacheKey}`); // Add this log
    return content;
  } catch (error) {
    console.error('Failed to fetch content:', error);
    throw error;
  }
}

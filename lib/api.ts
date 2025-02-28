// lib/api.ts
import { UmbracoContent } from "@/types/umbraco";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export class UmbracoApi {
  static async getContent(
    path: string,
    culture: string = 'en-us'
  ): Promise<UmbracoContent> {
    try {
      // Always call the Next.js API route, which acts as a proxy
      const url = `${BASE_URL}/api/umbraco?path=${encodeURIComponent(
        path
      )}&culture=${culture}&fields=properties[$all]`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      return (await response.json()) as UmbracoContent;
    } catch (error) {
      console.error('Failed to fetch content:', error);
      throw error;
    }
  }
}

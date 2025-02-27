// api/umbracoApi.ts
import { UmbracoContent } from "@/types/umbraco";
import { getCachedContent, setCachedContent } from "@/utils/cache";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export class UmbracoApi {
  static async getContent(
    path: string,
    culture: string = 'en-us'
  ): Promise<UmbracoContent> {
    try {
      const cacheKey = `${path}:${culture}`;
      const cached = getCachedContent(cacheKey);
      
      if (cached) {
        return cached;
      }

      // Una única llamada a la API con el path y el header de cultura
      const url = `${BASE_URL}/api/umbraco?path=${encodeURIComponent(path)}&fields=properties[$all]`;
      
      const response = await fetch(url, {
        headers: {
          'Accept-Language': culture
        }
      });
      
      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }
      
      const content = await response.json() as UmbracoContent;

      // Guardar en cache para futuras llamadas
      setCachedContent(cacheKey, content);
      return content;
    } catch (error) {
      console.error('Failed to fetch content:', error);
      throw error;
    }
  }
}

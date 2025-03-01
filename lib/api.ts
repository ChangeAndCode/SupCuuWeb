// lib/api.ts
import { UmbracoContent } from "@/types/umbraco";

// This ensures the code only runs in browser environment
const isBrowser = typeof window !== "undefined";

// Base URL is determined at runtime, not build time
const getBaseUrl = () =>
  process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export class UmbracoApi {
  static async getContent(
    path: string,
    culture: string = "en-us"
  ): Promise<UmbracoContent> {
    // Exit early during build time with empty placeholder
    if (!isBrowser) {
      console.warn(
        "UmbracoApi.getContent was called during build time, returning empty data"
      );
      return {} as UmbracoContent;
    }

    try {
      const baseUrl = getBaseUrl();
      const url = `${baseUrl}/api/umbraco?path=${encodeURIComponent(
        path
      )}&culture=${culture}&fields=properties[$all]`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      return (await response.json()) as UmbracoContent;
    } catch (error) {
      console.error("Failed to fetch content:", error);
      throw error;
    }
  }
}

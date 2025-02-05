import { UmbracoContent } from "@/types/umbraco";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export class UmbracoApi {
  static async getContent(path: string): Promise<UmbracoContent> {
    try {
      const response = await fetch(`${BASE_URL}/api/umbraco?path=${encodeURIComponent(path)}`);
      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      console.error('Failed to fetch content:', error);
      throw error;
    }
  }
}
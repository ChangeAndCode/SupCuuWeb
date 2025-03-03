// src/lib/header.ts
import { getUmbracoContent } from '@/lib/server/umbracoApi';
import { UmbracoContent } from '@/types/umbraco';

interface TextItem {
  content: {
    contentType: string;
    id: string;
    properties: {
      stringText: string;
    };
  };
  settings: null;
}

interface HomeProperties {
  principalText: {
    items: TextItem[];
  };
  subtext: {
    items: TextItem[];
  };
  backgroundImage: Array<{
    url: string;
    width: number;
    height: number;
  }>;
}

export interface HomeContent extends UmbracoContent {
  properties: HomeProperties;
}

export async function getHomeContent(): Promise<HomeContent | null> {
  try {
    const content = (await getUmbracoContent('header-hero')) as HomeContent;
    return content;
  } catch (error) {
    console.error('Error fetching header content:', error);
    return null;
  }
}

export function getImageUrl(imageUrl: string): string {
  const baseUrl = process.env.UMBRACO_API_URL?.replace(
    '/umbraco/delivery/api/v2',
    ''
  );
  return `${baseUrl}${imageUrl}`;
}

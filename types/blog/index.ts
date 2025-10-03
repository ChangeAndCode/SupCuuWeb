// Umbraco Blog API Response Types - Based on actual API structure
export interface UmbracoBlogPost {
  id: number;
  titleEn: string;
  titleEs: string;
  contentEn: string; // JSON string containing English markup and blocks
  contentEs: string; // JSON string containing Spanish markup and blocks
  featuredImage: string; // JSON string array of image objects
  publishDate: string;
  slugEn: string;
  slugEs: string;
  isFeatured: boolean;
  urls: {
    english: string;
    spanish: string;
  };
  // Legacy fields (kept for backward compatibility, may be removed later)
  title?: string;
  content?: string;
  slug?: string;
  url?: string;
  currentLocale?: string;
  availableLanguages?: string[];
}

// Parsed content structure
export interface BlogContent {
  markup: string;
  blocks?: {
    contentData: any[];
    settingsData: any[];
  };
}

// Parsed featured image structure
export interface BlogImage {
  key: string;
  mediaKey: string;
  url?: string;
  alt?: string;
}

// Normalized blog article for use in components
export interface BlogArticle {
  id: string;
  title: string;
  content: BlogContent;
  featuredImage: BlogImage[];
  publishDate: string;
  slug: string;
  slugEn: string;
  slugEs: string;
  isFeatured: boolean;
  urls: {
    english: string;
    spanish: string;
  };
  // Additional fields that might be added later
  author?: string;
  category?: string;
  tags?: string[];
  excerpt?: string;
  readTime?: number;
  metaDescription?: string;
  metaKeywords?: string[];
  callToAction?: {
    title: string;
    description: string;
    buttonText: string;
    buttonUrl: string;
  };
}

export interface BlogListData {
  articles: BlogArticle[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
  };
  categories: Array<{
    name: string;
    slug: string;
    count: number;
  }>;
  tags: Array<{
    name: string;
    slug: string;
    count: number;
  }>;
}

export interface BlogHeroData {
  title: string;
  description: string;
  buttonText: string;
  buttonUrl?: string;
  imageUrl: string;
  imageAlt: string;
}
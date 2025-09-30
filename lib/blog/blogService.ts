import { BlogArticle, BlogListData, UmbracoBlogPost, BlogContent, BlogImage } from '@/types/blog';
import { getImageUrl } from '@/utils/umbracoImageHelper';

const UMBRACO_BASE_URL = 'http://localhost:3177';
const API_KEY = process.env.UMBRACO_API_KEY || 'LoremIpsumDolorSitAmet';
const UMBRACO_MEDIA_URL = 'https://localhost:44323';

// Helper function to fetch media details from Umbraco
async function fetchMediaDetails(mediaKey: string): Promise<any> {
  try {
    // Try different possible endpoints for media
    const endpoints = [
      `${UMBRACO_BASE_URL}/umbraco/delivery/api/v2/media/item/${mediaKey}`,
      `${UMBRACO_BASE_URL}/api/media/${mediaKey}`,
      `${UMBRACO_MEDIA_URL}/umbraco/delivery/api/v2/media/item/${mediaKey}`,
    ];

    for (const endpoint of endpoints) {
      try {
        const response = await fetch(endpoint, {
          headers: {
            'Api-Key': API_KEY,
            'Accept': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          console.log('🖼️ Media fetched successfully from:', endpoint);
          return data;
        }
      } catch (e) {
        console.log('Failed to fetch from:', endpoint);
      }
    }

    // If none of the endpoints work, try constructing the URL directly
    // Based on Umbraco's typical media URL pattern
    console.log('⚠️ Could not fetch media details, constructing URL for:', mediaKey);
    return null;
  } catch (error) {
    console.error('Error fetching media details:', error);
    return null;
  }
}

// Helper function for API calls
async function fetchFromUmbraco(endpoint: string, options?: RequestInit) {
  const url = endpoint.startsWith('http') ? endpoint : `${UMBRACO_BASE_URL}${endpoint}`;
  
  console.log('🔥 BLOG SERVICE - Fetching from URL:', url);
  console.log('🔥 BLOG SERVICE - Using API Key:', API_KEY);
  console.log('🔥 BLOG SERVICE - Endpoint:', endpoint);
  console.log('🔥 BLOG SERVICE - Base URL:', UMBRACO_BASE_URL);
  
  const response = await fetch(url, {
    ...options,
    headers: {
      'Api-Key': API_KEY,
      'Accept': 'application/json',
      ...options?.headers,
    },
    next: {
      revalidate: 10, // Revalidate every 10 seconds
      ...options?.next
    }
  });

  console.log('🔥 BLOG SERVICE - Response status:', response.status);
  console.log('🔥 BLOG SERVICE - Response ok:', response.ok);

  if (!response.ok) {
    console.error(`❌ API Error: ${response.status} - ${response.statusText}`);
    console.error(`❌ Failed URL: ${url}`);
    if (response.status === 404) {
      return null;
    }
    throw new Error(`Failed to fetch from Umbraco: ${response.status}`);
  }

  const data = await response.json();
  console.log('🔥 BLOG SERVICE - Response data:', data);
  console.log('🔥 BLOG SERVICE - Data type:', typeof data);
  console.log('🔥 BLOG SERVICE - Data length:', Array.isArray(data) ? data.length : 'Not array');
  
  return data;
}

// Helper function to parse and normalize Umbraco blog post
async function normalizeBlogPost(post: UmbracoBlogPost, locale: string = 'es-mx', requestedSlug?: string): Promise<BlogArticle> {
  // Determine if we're using Spanish or English
  const isSpanish = locale.toLowerCase().includes('es');

  console.log('🌍 Blog normalization - Locale:', locale);
  console.log('🌍 Is Spanish?', isSpanish);
  console.log('🌍 Post ID:', post.id);
  console.log('🌍 Has contentEn?', !!post.contentEn);
  console.log('🌍 Has contentEs?', !!post.contentEs);

  // Select the appropriate content based on locale with opposite language as fallback
  const contentField = isSpanish
    ? (post.contentEs || post.contentEn)
    : (post.contentEn || post.contentEs);
  const titleField = isSpanish
    ? (post.titleEs || post.titleEn)
    : (post.titleEn || post.titleEs);

  console.log('🌍 Selected content field:', isSpanish ? 'contentEs' : 'contentEn');
  console.log('🌍 Content field has value?', !!contentField);
  console.log('🌍 Using title:', titleField);

  // Parse content JSON
  let content: BlogContent = { markup: '' };
  try {
    if (contentField && typeof contentField === 'string') {
      content = JSON.parse(contentField);
    }
  } catch (e) {
    console.error('Error parsing content:', e);
  }

  // Parse featured image JSON
  let featuredImage: BlogImage[] = [];
  try {
    if (typeof post.featuredImage === 'string') {
      featuredImage = JSON.parse(post.featuredImage);
    } else if (Array.isArray(post.featuredImage)) {
      featuredImage = post.featuredImage;
    }

    // Process featured images to have proper URLs
    featuredImage = await Promise.all(
      featuredImage.map(async (img) => {
        // If we already have a URL, use getImageUrl to ensure it's complete
        if (img.url) {
          return {
            ...img,
            url: getImageUrl(img.url),
            alt: img.alt || titleField || 'Blog image'
          };
        }

        // If we only have a mediaKey, fetch the media details
        if (img.mediaKey) {
          const mediaData = await fetchMediaDetails(img.mediaKey);

          if (mediaData && mediaData.url) {
            return {
              ...img,
              url: getImageUrl(mediaData.url),
              alt: mediaData.name || img.alt || titleField || 'Blog image'
            };
          }

          // If we couldn't fetch media details, try constructing a direct URL
          // Some Umbraco setups use a pattern like /media/{short-code}/filename.ext
          // We'll use a placeholder for now
          console.log('⚠️ Could not resolve media URL for key:', img.mediaKey);
          return {
            ...img,
            url: '/images/blog-placeholder.jpg',
            alt: img.alt || titleField || 'Blog image'
          };
        }

        // Fallback to placeholder if no URL or mediaKey
        return {
          ...img,
          url: '/images/blog-placeholder.jpg',
          alt: img.alt || titleField || 'Blog image'
        };
      })
    );
  } catch (e) {
    console.error('Error parsing featured image:', e);
  }

  // Determine the correct slug based on which one was actually requested
  let slug: string;
  if (requestedSlug) {
    // If we know which slug was requested, use the matching one
    if (requestedSlug === post.slugEs) {
      slug = post.slugEs;
    } else if (requestedSlug === post.slugEn) {
      slug = post.slugEn;
    } else {
      // Fallback to locale-based selection
      const isSpanish = locale.toLowerCase().includes('es');
      slug = isSpanish ? post.slugEs : post.slugEn;
    }
  } else {
    // Fallback to locale-based selection
    const isSpanish = locale.toLowerCase().includes('es');
    slug = isSpanish ? post.slugEs : post.slugEn;
  }
  
  console.log('🔧 normalizeBlogPost - requestedSlug:', requestedSlug);
  console.log('🔧 normalizeBlogPost - locale:', locale);
  console.log('🔧 normalizeBlogPost - selected slug:', slug);
  console.log('🔧 normalizeBlogPost - available slugs:', { slugEs: post.slugEs, slugEn: post.slugEn });

  // Extract excerpt from content if available
  let excerpt = '';
  if (content.markup) {
    // Remove HTML tags and get first 150 characters
    const textContent = content.markup.replace(/<[^>]*>/g, '');
    excerpt = textContent.substring(0, 150) + (textContent.length > 150 ? '...' : '');
  }

  // Calculate read time based on content length
  const wordsPerMinute = 200;
  const wordCount = content.markup ? content.markup.replace(/<[^>]*>/g, '').split(/\s+/).length : 0;
  const readTime = Math.max(1, Math.ceil(wordCount / wordsPerMinute));

  return {
    id: post.id.toString(),
    title: titleField,
    content,
    featuredImage,
    publishDate: post.publishDate,
    slug,
    slugEn: post.slugEn,
    slugEs: post.slugEs,
    isFeatured: post.isFeatured,
    urls: post.urls,
    excerpt,
    readTime,
    // These fields would come from extended Umbraco data if available
    author: 'StartUp Chihuahua',
    category: 'General',
    tags: [],
    metaDescription: excerpt,
    metaKeywords: []
  };
}

// Get all blog posts with pagination and filtering
export async function getBlogList(
  locale: string = 'es-mx',
  page: number = 1,
  pageSize: number = 9,
  category?: string,
  tag?: string,
  search?: string
): Promise<BlogListData> {
  console.log('🚀 getBlogList called with:', { locale, page, pageSize, category, tag, search });
  try {
    // Fetch blog data from Umbraco API
    const blogData: UmbracoBlogPost[] = await fetchFromUmbraco(
      '/api/blog',
      {
        headers: {
          'Accept-Language': locale
        }
      }
    );

    // Normalize all blog posts
    let articles = await Promise.all(
      (blogData || []).map(post => normalizeBlogPost(post, locale))
    );
    
    // Apply filters if provided
    if (category) {
      articles = articles.filter(article => 
        article.category?.toLowerCase() === category.toLowerCase()
      );
    }
    
    if (tag) {
      articles = articles.filter(article => 
        article.tags?.some(t => t.toLowerCase() === tag.toLowerCase())
      );
    }
    
    if (search) {
      const searchLower = search.toLowerCase();
      articles = articles.filter(article => 
        article.title?.toLowerCase().includes(searchLower) ||
        article.excerpt?.toLowerCase().includes(searchLower) ||
        article.content?.markup?.toLowerCase().includes(searchLower)
      );
    }

    // Sort by publish date (newest first)
    articles.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());

    // Calculate pagination
    const totalItems = articles.length;
    const totalPages = Math.ceil(totalItems / pageSize);
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedArticles = articles.slice(startIndex, endIndex);

    // Extract unique categories and tags
    const categoriesMap = new Map<string, number>();
    const tagsMap = new Map<string, number>();

    articles.forEach(article => {
      if (article.category) {
        const cat = article.category;
        categoriesMap.set(cat, (categoriesMap.get(cat) || 0) + 1);
      }
      
      if (article.tags) {
        article.tags.forEach(tag => {
          tagsMap.set(tag, (tagsMap.get(tag) || 0) + 1);
        });
      }
    });

    const categories = Array.from(categoriesMap.entries()).map(([name, count]) => ({
      name,
      slug: name.toLowerCase().replace(/\s+/g, '-'),
      count
    }));

    const tags = Array.from(tagsMap.entries()).map(([name, count]) => ({
      name,
      slug: name.toLowerCase().replace(/\s+/g, '-'),
      count
    }));

    return {
      articles: paginatedArticles,
      pagination: {
        currentPage: page,
        totalPages,
        totalItems,
        itemsPerPage: pageSize
      },
      categories,
      tags
    };
  } catch (error) {
    console.error('Error fetching blog list:', error);
    // Return empty data structure on error
    return {
      articles: [],
      pagination: {
        currentPage: 1,
        totalPages: 0,
        totalItems: 0,
        itemsPerPage: pageSize
      },
      categories: [],
      tags: []
    };
  }
}

// Get a single blog article by slug
export async function getBlogArticle(slug: string, locale: string = 'es-mx'): Promise<BlogArticle | null> {
  console.log('🚀 getBlogArticle called with:', { slug, locale });
  try {
    // Get all blogs and find by slug
    const blogData: UmbracoBlogPost[] = await fetchFromUmbraco(
      '/api/blog',
      {
        headers: {
          'Accept-Language': locale
        }
      }
    );

    // Find the article by slug (checking both language slugs)
    console.log('🔍 Searching for slug:', slug);
    console.log('🔍 Available posts:', blogData?.map(post => ({
      id: post.id,
      titleEn: post.titleEn,
      titleEs: post.titleEs,
      slugEn: post.slugEn,
      slugEs: post.slugEs
    })));
    
    const foundPost = blogData?.find(
      post => {
        console.log(`🔍 Checking post ${post.id}: slugEn="${post.slugEn}" vs "${slug}" = ${post.slugEn === slug}`);
        console.log(`🔍 Checking post ${post.id}: slugEs="${post.slugEs}" vs "${slug}" = ${post.slugEs === slug}`);
        return post.slugEn === slug || post.slugEs === slug;
      }
    );

    console.log('🔍 Found post:', foundPost ? { id: foundPost.id, titleEn: foundPost.titleEn, titleEs: foundPost.titleEs } : 'None');

    if (foundPost) {
      const normalized = await normalizeBlogPost(foundPost, locale, slug);
      console.log('🔍 Normalized post:', { id: normalized.id, title: normalized.title, slug: normalized.slug });
      return normalized;
    }

    return null;
  } catch (error) {
    console.error(`Error fetching blog article ${slug}:`, error);
    return null;
  }
}

// Get featured blog post
export async function getFeaturedBlog(locale: string = 'es-mx'): Promise<BlogArticle | null> {
  try {
    // Get all blogs and find the featured one
    const blogData: UmbracoBlogPost[] = await fetchFromUmbraco(
      '/api/blog',
      {
        headers: {
          'Accept-Language': locale
        }
      }
    );

    // Find the featured post
    const featuredPost = blogData?.find(post => post.isFeatured === true);
    
    if (featuredPost) {
      return await normalizeBlogPost(featuredPost, locale);
    }

    // Fallback: return the most recent post
    if (blogData && blogData.length > 0) {
      // Sort by publish date and get the most recent
      const sortedPosts = [...blogData].sort((a, b) =>
        new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
      );
      return await normalizeBlogPost(sortedPosts[0], locale);
    }

    return null;
  } catch (error) {
    console.error('Error fetching featured blog:', error);
    return null;
  }
}

// Get related articles for a blog post
export async function getRelatedArticles(
  articleId: string,
  locale: string = 'es-mx',
  limit: number = 3
): Promise<BlogArticle[]> {
  try {
    // Get the current article to find its category and tags
    const currentArticle = await getBlogArticle(articleId, locale);
    if (!currentArticle) {
      return [];
    }

    // Get all articles
    const blogData = await getBlogList(locale, 1, 100);
    
    // Score articles based on similarity
    const scoredArticles = blogData.articles
      .filter(article => article.id !== articleId && article.slug !== articleId)
      .map(article => {
        let score = 0;
        
        // Same category = 3 points
        if (article.category === currentArticle.category) {
          score += 3;
        }
        
        // Each matching tag = 1 point
        if (currentArticle.tags && article.tags) {
          const matchingTags = article.tags.filter(tag => 
            currentArticle.tags.includes(tag)
          );
          score += matchingTags.length;
        }
        
        return { article, score };
      })
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map(item => item.article);

    // If not enough related articles, fill with recent articles
    if (scoredArticles.length < limit) {
      const additionalArticles = blogData.articles
        .filter(article => 
          article.id !== articleId && 
          article.slug !== articleId &&
          !scoredArticles.some(scored => scored.id === article.id)
        )
        .slice(0, limit - scoredArticles.length);
      
      scoredArticles.push(...additionalArticles);
    }

    return scoredArticles;
  } catch (error) {
    console.error('Error fetching related articles:', error);
    return [];
  }
}

// Search blog posts
export async function searchBlogPosts(
  query: string,
  locale: string = 'es-mx'
): Promise<BlogArticle[]> {
  try {
    const blogData = await getBlogList(locale, 1, 100, undefined, undefined, query);
    return blogData.articles;
  } catch (error) {
    console.error('Error searching blog posts:', error);
    return [];
  }
}
import React from 'react';
import { BlogContent } from '@/types/blog';

interface ArticleContentProps {
  content: BlogContent;
}

const ArticleContent: React.FC<ArticleContentProps> = ({ content }) => {
  // Process the content markup to handle Umbraco media URLs
  const processContent = (markup: string) => {
    if (!markup) return '';
    
    // Replace Umbraco media URLs with proper image paths
    let processedMarkup = markup;
    
    // Handle empty src attributes with Umbraco media UDI
    processedMarkup = processedMarkup.replace(
      /<img([^>]*?)src=""([^>]*?)data-udi="umb:\/\/media\/([a-f0-9]+)"([^>]*?)>/g,
      (match, beforeSrc, afterSrc, mediaId, afterUdi) => {
        // Use a placeholder image for now - ideally this would be resolved from Umbraco
        // You can replace this with the actual media resolution once media API is properly configured
        const placeholderImage = '/images/blog-placeholder.jpg';
        return `<img${beforeSrc}src="${placeholderImage}"${afterSrc}data-media-id="${mediaId}" alt="Blog image"${afterUdi}>`;
      }
    );
    
    // Handle Umbraco media URLs (umb://media/) - general case where src is not empty
    processedMarkup = processedMarkup.replace(
      /data-udi="umb:\/\/media\/([a-f0-9]+)"/g,
      (match, mediaId) => {
        return `data-media-id="${mediaId}"`;
      }
    );
    
    // Handle relative image URLs that start with ?rmode (Umbraco image processor)
    processedMarkup = processedMarkup.replace(
      /src="(\?[^"]*rmode[^"]*?)"/g,
      (match, query) => {
        // For Umbraco image processor queries, use placeholder
        return `src="/images/blog-placeholder.jpg"`;
      }
    );
    
    // Handle other relative image URLs
    processedMarkup = processedMarkup.replace(
      /src="([^"]+)"/g,
      (match, url) => {
        // Skip if already processed or is absolute
        if (url.startsWith('http') || url.startsWith('/api/') || url.includes('localhost') || url.startsWith('/images/')) {
          return match;
        }
        
        // If the URL doesn't start with http, prepend the Umbraco base URL
        if (!url.startsWith('/')) {
          return `src="http://localhost:3177/${url}"`;
        }
        
        return `src="http://localhost:3177${url}"`;
      }
    );
    
    return processedMarkup;
  };

  return (
    <div 
      className="article-content"
      dangerouslySetInnerHTML={{ __html: processContent(content.markup) }}
      style={{
        // Add custom styles for article content
        lineHeight: '1.8',
        fontSize: '1.125rem',
      }}
    />
  );
};

export default ArticleContent;
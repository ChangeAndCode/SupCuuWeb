'use client';

import React, { useMemo, useEffect, useState } from 'react';
import { BlogContent } from '@/types/blog';

interface ArticleContentProps {
  content: BlogContent;
}

const ArticleContent: React.FC<ArticleContentProps> = ({ content }) => {
  const [DOMPurify, setDOMPurify] = useState<any>(null);

  // Load DOMPurify only on client side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('dompurify').then((module) => {
        let DOMPurifyInstance;

        if (typeof module.default === 'function') {
          // It's a factory, call it with window
          DOMPurifyInstance = module.default(window);
        } else if (module.default && typeof module.default.sanitize === 'function') {
          // It's already an instance
          DOMPurifyInstance = module.default;
        } else {
          console.error('Could not initialize DOMPurify');
          return;
        }

        setDOMPurify(() => DOMPurifyInstance);
      }).catch((err) => {
        console.error('Failed to load DOMPurify:', err);
      });
    }
  }, []);

  // Sanitize and process the HTML content securely
  const sanitizedContent = useMemo(() => {
    if (!content?.markup || !DOMPurify) return '';

    // Configure DOMPurify to allow safe HTML elements and attributes
    const config = {
      ALLOWED_TAGS: [
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
        'p', 'br', 'strong', 'em', 'u', 'strike',
        'ul', 'ol', 'li',
        'a', 'img',
        'blockquote', 'pre', 'code',
        'table', 'thead', 'tbody', 'tr', 'th', 'td',
        'div', 'span'
      ],
      ALLOWED_ATTR: [
        'href', 'target', 'rel',
        'src', 'alt', 'width', 'height',
        'class', 'id',
        'data-start', 'data-end', 'data-udi'
      ],
      ALLOWED_URI_REGEXP: /^(?:(?:https?|mailto|tel):|[^a-z]|[a-z+.-]+(?:[^a-z+.\-:]|$))/i,
      ALLOW_DATA_ATTR: false,
      FORCE_BODY: true,
      RETURN_DOM: false,
      RETURN_DOM_FRAGMENT: false,
      RETURN_TRUSTED_TYPE: false
    };

    // Sanitize the HTML
    const cleanHTML = DOMPurify.sanitize(content.markup, config);

    // Convert relative Umbraco media URLs to absolute URLs
    const processedHTML = cleanHTML.replace(
      /src="(\/media\/[^"]+)"/g,
      (match, url) => `src="${process.env.NEXT_PUBLIC_UMBRACO_BASE_URL || 'http://localhost:3177'}${url}"`
    );

    return processedHTML;
  }, [content?.markup, DOMPurify]);

  // Show loading state while DOMPurify is loading
  if (!DOMPurify) {
    return <div className="article-content">Loading content...</div>;
  }

  return (
    <div
      className="article-content"
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
    />
  );
};

export default ArticleContent;
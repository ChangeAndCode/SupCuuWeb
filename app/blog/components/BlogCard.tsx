import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, User, Tag } from 'lucide-react';
import { BlogArticle } from '@/types/blog';

interface BlogCardProps {
  article: BlogArticle;
}

const BlogCard: React.FC<BlogCardProps> = ({ article }) => {
  // Format the publish date
  const formattedDate = new Date(article.publishDate).toLocaleDateString('es-MX', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Get the correct URL based on locale (defaulting to Spanish)
  const articleUrl = article.urls?.spanish || article.urls?.english || `/blog/${article.slug}`;

  // Get the first image from featuredImage array
  const imageUrl = article.featuredImage?.[0]?.url || '/images/blog-placeholder.jpg';
  const imageAlt = article.featuredImage?.[0]?.alt || article.title;

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <Link href={articleUrl} className="block">
        <div className="relative h-48 w-full bg-gray-200">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
          {article.isFeatured && (
            <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Destacado
            </div>
          )}
        </div>
      </Link>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex-1">
          {/* Title */}
          <Link href={articleUrl}>
            <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors line-clamp-2">
              {article.title}
            </h3>
          </Link>

          {/* Excerpt */}
          {article.excerpt && (
            <p className="text-gray-600 mb-4 line-clamp-3">
              {article.excerpt}
            </p>
          )}

          {/* Meta Information */}
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{formattedDate}</span>
            </div>
            {article.readTime && (
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{article.readTime} min lectura</span>
              </div>
            )}
          </div>

          {/* Author */}
          {article.author && (
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
              <User className="w-4 h-4" />
              <span>Startup Chihuahua</span>
            </div>
          )}

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {article.tags.slice(0, 3).map((tag, index) => (
                <Link
                  key={index}
                  href={`/blog?tag=${tag.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs hover:bg-gray-200 transition-colors"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </Link>
              ))}
              {article.tags.length > 3 && (
                <span className="px-2 py-1 text-gray-500 text-xs">
                  +{article.tags.length - 3} más
                </span>
              )}
            </div>
          )}
        </div>

        {/* Read More Link */}
        <Link
          href={articleUrl}
          className="inline-block text-blue-600 font-semibold hover:text-blue-800 transition-colors"
        >
          Leer más →
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
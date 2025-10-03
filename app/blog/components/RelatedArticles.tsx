import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import { BlogArticle } from '@/types/blog';
import { getBlogTranslations } from '@/lib/blog/translations';

interface RelatedArticlesProps {
  articles: BlogArticle[];
  locale?: string;
}

const RelatedArticles: React.FC<RelatedArticlesProps> = ({ articles, locale = 'es-mx' }) => {
  if (!articles || articles.length === 0) {
    return null;
  }

  const t = getBlogTranslations(locale);

  // Format date helper
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(t.dateLocale, {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Get article URL based on locale
  const isSpanish = locale.toLowerCase().includes('es');
  const getArticleUrl = (article: BlogArticle) => {
    const slug = isSpanish ? article.slugEs : article.slugEn;
    return `/blog/${slug}`;
  };

  // Get image URL
  const getImageUrl = (article: BlogArticle) => {
    return article.featuredImage?.[0]?.url || '/images/blog-placeholder.jpg';
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        {t.relatedArticles}
      </h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        {articles.map((article) => (
          <article key={article.id} className="group">
            <Link href={getArticleUrl(article)} className="block">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden bg-gray-200">
                <Image
                  src={getImageUrl(article)}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {article.isFeatured && (
                  <div className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">
                    {t.featured}
                  </div>
                )}
              </div>
            </Link>

            <div>
              {article.category && (
                <Link 
                  href={`/blog?category=${article.category.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-block text-blue-600 text-xs font-semibold mb-2 hover:text-blue-800"
                >
                  {article.category}
                </Link>
              )}

              <Link href={getArticleUrl(article)}>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>
              </Link>

              {article.excerpt && (
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {article.excerpt}
                </p>
              )}

              <div className="flex items-center gap-3 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>{formatDate(article.publishDate)}</span>
                </div>
                {article.readTime && (
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime} {t.minRead}</span>
                  </div>
                )}
              </div>

              <Link
                href={getArticleUrl(article)}
                className="inline-flex items-center mt-3 text-sm text-blue-600 font-semibold hover:text-blue-800 transition-colors group/link"
              >
                {t.readFullArticle}
                <ArrowRight className="w-3 h-3 ml-1 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* View All Articles Link */}
      <div className="text-center mt-8">
        <Link
          href="/blog"
          className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
        >
          {t.viewAllArticles}
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default RelatedArticles;
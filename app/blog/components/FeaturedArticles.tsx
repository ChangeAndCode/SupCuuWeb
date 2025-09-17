import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { BlogArticle } from '@/types/blog';
import { Button } from '@/components/ui/button';

interface FeaturedArticlesProps {
  articles: BlogArticle[];
}

const FeaturedArticles: React.FC<FeaturedArticlesProps> = ({ articles }) => {
  if (!articles || articles.length === 0) {
    return null;
  }

  const mainArticle = articles[0];
  const sideArticles = articles.slice(1, 3);

  // Format date helper
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-MX', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Get article URL
  const getArticleUrl = (article: BlogArticle) => {
    return article.urls?.spanish || article.urls?.english || `/blog/${article.slug}`;
  };

  // Get image URL
  const getImageUrl = (article: BlogArticle) => {
    return article.featuredImage?.[0]?.url || '/images/blog-placeholder.jpg';
  };

  return (
    <section className="mb-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">
          Artículos Destacados
        </h2>
        <p className="text-gray-600">
          Descubre las últimas novedades y tendencias del ecosistema emprendedor
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Main Featured Article */}
        <article className="group">
          <Link href={getArticleUrl(mainArticle)} className="block">
            <div className="relative h-96 mb-6 rounded-lg overflow-hidden bg-gray-200">
              <Image
                src={getImageUrl(mainArticle)}
                alt={mainArticle.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {mainArticle.isFeatured && (
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Destacado
                </div>
              )}
            </div>
          </Link>

          <div>
            {mainArticle.category && (
              <Link 
                href={`/blog?category=${mainArticle.category.toLowerCase().replace(/\s+/g, '-')}`}
                className="inline-block text-blue-600 text-sm font-semibold mb-3 hover:text-blue-800"
              >
                {mainArticle.category}
              </Link>
            )}

            <Link href={getArticleUrl(mainArticle)}>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {mainArticle.title}
              </h3>
            </Link>

            {mainArticle.excerpt && (
              <p className="text-gray-600 mb-4 line-clamp-3">
                {mainArticle.excerpt}
              </p>
            )}

            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(mainArticle.publishDate)}</span>
              </div>
              {mainArticle.readTime && (
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{mainArticle.readTime} min lectura</span>
                </div>
              )}
            </div>

            <Link href={getArticleUrl(mainArticle)}>
              <Button className="group/btn">
                Leer artículo completo
                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </article>

        {/* Side Featured Articles */}
        {sideArticles.length > 0 && (
          <div className="space-y-6">
            {sideArticles.map((article) => (
              <article key={article.id} className="group flex gap-4">
                <Link href={getArticleUrl(article)} className="flex-shrink-0">
                  <div className="relative w-32 h-32 rounded-lg overflow-hidden bg-gray-200">
                    <Image
                      src={getImageUrl(article)}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="128px"
                    />
                  </div>
                </Link>

                <div className="flex-1">
                  {article.category && (
                    <Link 
                      href={`/blog?category=${article.category.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-block text-blue-600 text-xs font-semibold mb-2 hover:text-blue-800"
                    >
                      {article.category}
                    </Link>
                  )}

                  <Link href={getArticleUrl(article)}>
                    <h4 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {article.title}
                    </h4>
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
                        <span>{article.readTime} min</span>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}

            {/* View All Articles Link */}
            <div className="pt-4 border-t">
              <Link 
                href="/blog#articles"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
              >
                Ver todos los artículos
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedArticles;
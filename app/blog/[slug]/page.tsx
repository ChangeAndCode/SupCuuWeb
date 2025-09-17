import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User, Tag, Share2, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getBlogArticle, getRelatedArticles } from "@/lib/blog/blogService";
import { getLocale } from "@/lib/Localization";
import React, { Suspense } from "react";
import ArticleContent from "../components/ArticleContent";
import RelatedArticles from "../components/RelatedArticles";
import CallToAction from "../components/CallToAction";
import BlogLayout from "@/components/layout/BlogLayout";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";
export const revalidate = 10;

const Loading = () => (
  <div className="flex justify-center items-center h-screen">
    <p className="text-lg font-bold">Cargando artículo...</p>
  </div>
);

interface BlogArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const locale = await getLocale();
  const article = await getBlogArticle(slug, locale);

  if (!article) {
    return {
      title: 'Artículo no encontrado',
      description: 'El artículo que buscas no existe.'
    };
  }

  return {
    title: article.title,
    description: article.metaDescription || article.excerpt,
    keywords: article.metaKeywords,
    openGraph: {
      title: article.title,
      description: article.metaDescription || article.excerpt,
      images: article.featuredImage?.[0]?.url ? [article.featuredImage[0].url] : [],
      type: 'article',
      publishedTime: article.publishDate,
      authors: article.author ? [article.author] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.metaDescription || article.excerpt,
      images: article.featuredImage?.[0]?.url ? [article.featuredImage[0].url] : [],
    }
  };
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const locale = await getLocale();
  
  const article = await getBlogArticle(slug, locale);

  if (!article) {
    notFound();
  }

  const relatedArticles = await getRelatedArticles(article.id, locale, 3);

  // Format the publish date
  const formattedDate = new Date(article.publishDate).toLocaleDateString('es-MX', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Get image URL
  const imageUrl = article.featuredImage?.[0]?.url || '/images/blog-placeholder.jpg';
  const imageAlt = article.featuredImage?.[0]?.alt || article.title;

  // Default CTA if article doesn't have one
  const defaultCTA = {
    title: '¿Te gustó este artículo?',
    description: 'Suscríbete a nuestro newsletter para recibir más contenido como este.',
    buttonText: 'Suscribirse',
    buttonUrl: '/newsletter'
  };

  return (
    <BlogLayout>
      <Suspense fallback={<Loading />}>
        <article className="max-w-4xl mx-auto px-4 py-8">
          {/* Back to Blog Link */}
          <Link 
            href="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al blog
          </Link>

          {/* Article Header */}
          <header className="mb-8">
            {/* Category */}
            {article.category && (
              <Link 
                href={`/blog?category=${article.category.toLowerCase().replace(/\s+/g, '-')}`}
                className="inline-block text-blue-600 text-sm font-semibold mb-4 hover:text-blue-800"
              >
                {article.category}
              </Link>
            )}

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {article.title}
            </h1>

            {/* Excerpt */}
            {article.excerpt && (
              <p className="text-xl text-gray-600 mb-6">
                {article.excerpt}
              </p>
            )}

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 pb-6 border-b">
              {article.author && (
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{article.author}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{formattedDate}</span>
              </div>
              {article.readTime && (
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{article.readTime} min lectura</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                <span>{article.content.markup ? article.content.markup.split(' ').length : 0} palabras</span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          {imageUrl && (
            <div className="relative w-full h-96 lg:h-[500px] mb-8 rounded-lg overflow-hidden bg-gray-200">
              <Image
                src={imageUrl}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1280px"
                priority
              />
            </div>
          )}

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-8">
            <ArticleContent content={article.content} />
          </div>

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8 pb-8 border-b">
              <span className="text-sm text-gray-600 font-semibold">Etiquetas:</span>
              {article.tags.map((tag, index) => (
                <Link
                  key={index}
                  href={`/blog?tag=${tag.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm hover:bg-blue-200 transition-colors"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </Link>
              ))}
            </div>
          )}

          {/* Share Section */}
          <div className="flex items-center justify-between mb-12 pb-8 border-b">
            <div>
              <h3 className="text-lg font-semibold mb-2">¿Te gustó este artículo?</h3>
              <p className="text-gray-600">Compártelo con tu red</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Share2 className="w-4 h-4" />
                Compartir
              </Button>
            </div>
          </div>

          {/* Call to Action */}
          <CallToAction cta={article.callToAction || defaultCTA} />

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <section className="mt-16">
              <RelatedArticles articles={relatedArticles} />
            </section>
          )}
        </article>
      </Suspense>
    </BlogLayout>
  );
}
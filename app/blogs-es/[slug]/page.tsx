import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, BookOpen } from "lucide-react";
import { getBlogArticle, getRelatedArticles } from "@/lib/blog/blogService";
import React, { Suspense } from "react";
import ArticleContent from "@/app/blog/components/ArticleContent";
import RelatedArticles from "@/app/blog/components/RelatedArticles";
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
  const article = await getBlogArticle(slug, 'es-mx');

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

  const article = await getBlogArticle(slug, 'es-mx');

  if (!article) {
    notFound();
  }

  const relatedArticles = await getRelatedArticles(article.id, 'es-mx', 3);

  // Format the publish date
  const formattedDate = new Date(article.publishDate).toLocaleDateString('es-MX', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Get image URL
  const imageUrl = article.featuredImage?.[0]?.url || '/images/blog-placeholder.jpg';
  const imageAlt = article.featuredImage?.[0]?.alt || article.title;

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
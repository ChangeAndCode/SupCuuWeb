import Link from "next/link";
import Image from "next/image";
import { getBlogList, getFeaturedBlog } from "@/lib/blog/blogService";
import { getLocale } from "@/lib/Localization";
import React, { Suspense } from "react";
import BlogCard from "./components/BlogCard";
import BlogPagination from "./components/BlogPagination";
import FeaturedArticles from "./components/FeaturedArticles";
import BlogLayout from "@/components/layout/BlogLayout";
import { BlogHeroData } from "@/types/blog";

export const dynamic = "force-dynamic";
export const revalidate = 10;

const Loading = () => (
  <div className="flex justify-center items-center h-64">
    <p className="text-lg font-bold">Cargando blog...</p>
  </div>
);

interface BlogPageProps {
  searchParams: Promise<{
    page?: string;
    category?: string;
    tag?: string;
    search?: string;
  }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  const locale = await getLocale();
  
  const currentPage = parseInt(params.page || "1", 10);
  const category = params.category;
  const tag = params.tag;
  const search = params.search;

  // Fetch blog data
  const blogData = await getBlogList(locale, currentPage, 9, category, tag, search);
  const featuredArticle = await getFeaturedBlog(locale);

  // Hero data
  const heroData: BlogHeroData = {
    title: "Blog",
    description: "Descubre las últimas noticias, tendencias e innovaciones en el ecosistema emprendedor de Chihuahua",
    buttonText: "Ver todos los artículos",
    buttonUrl: "#articles",
    imageUrl: "/images/blog-hero.jpg",
    imageAlt: "Blog"
  };

  return (
    <BlogLayout>
      <Suspense fallback={<Loading />}>
        {/* Hero Section */}
        <section className="relative bg-blue-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                {heroData.title}
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                {heroData.description}
              </p>
              <Link
                href={heroData.buttonUrl || "#articles"}
                className="relative main-Tipography bg-ColorPrincipal text-white h-[3.9rem] w-[18rem] uppercase font-pragmatica rounded-full flex flex-col justify-center items-center z-[20] pointer-events-auto"
              >
                <span>{heroData.buttonText}</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        {featuredArticle && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <FeaturedArticles articles={[featuredArticle]} />
            </div>
          </section>
        )}

        {/* Search/Filter Bar */}
        {(search || category || tag) && (
          <section className="py-8 bg-white border-b">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between">
                <div>
                  {search && (
                    <p className="text-gray-600">
                      Resultados para: <span className="font-semibold">{search}</span>
                    </p>
                  )}
                  {category && (
                    <p className="text-gray-600">
                      Categoría: <span className="font-semibold">{category}</span>
                    </p>
                  )}
                  {tag && (
                    <p className="text-gray-600">
                      Etiqueta: <span className="font-semibold">{tag}</span>
                    </p>
                  )}
                </div>
                <Link
                  href="/blog"
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Limpiar filtros
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Blog Articles Grid */}
        <section id="articles" className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-900">
                {search || category || tag ? "Artículos filtrados" : "Todos los artículos"}
              </h2>
            </div>

            {blogData.articles.length > 0 ? (
              <>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                  {blogData.articles.map((article) => (
                    <BlogCard key={article.id} article={article} />
                  ))}
                </div>

                {/* Pagination */}
                {blogData.pagination.totalPages > 1 && (
                  <BlogPagination
                    currentPage={blogData.pagination.currentPage}
                    totalPages={blogData.pagination.totalPages}
                    category={category}
                    tag={tag}
                    search={search}
                  />
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  No se encontraron artículos.
                </p>
                <Link
                  href="/blog"
                  className="inline-block mt-4 px-6 py-2 border border-gray-300 rounded-md font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Ver todos los artículos
                </Link>
              </div>
            )}
          </div>
        </section>

      </Suspense>
    </BlogLayout>
  );
}
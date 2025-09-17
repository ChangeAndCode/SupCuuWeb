import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
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
    title: "Blog de StartUp Chihuahua",
    description: "Descubre las últimas noticias, tendencias e innovaciones en el ecosistema emprendedor de Chihuahua",
    buttonText: "Ver todos los artículos",
    buttonUrl: "#articles",
    imageUrl: "/images/blog-hero.jpg",
    imageAlt: "Blog de StartUp Chihuahua"
  };

  return (
    <BlogLayout>
      <Suspense fallback={<Loading />}>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                {heroData.title}
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                {heroData.description}
              </p>
              <Link href={heroData.buttonUrl || "#articles"}>
                <Button 
                  size="lg" 
                  className="bg-white text-blue-600 hover:bg-blue-50"
                >
                  {heroData.buttonText}
                </Button>
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
                <Link href="/blog">
                  <Button variant="outline" size="sm">
                    Limpiar filtros
                  </Button>
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
                <Link href="/blog">
                  <Button className="mt-4" variant="outline">
                    Ver todos los artículos
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* Categories & Tags Section */}
        {(blogData.categories.length > 0 || blogData.tags.length > 0) && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Categories */}
                {blogData.categories.length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold mb-4">Categorías</h3>
                    <div className="flex flex-wrap gap-2">
                      {blogData.categories.map((cat) => (
                        <Link
                          key={cat.slug}
                          href={`/blog?category=${cat.slug}`}
                          className="px-4 py-2 bg-white rounded-lg border hover:bg-blue-50 hover:border-blue-300 transition-colors"
                        >
                          {cat.name} ({cat.count})
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tags */}
                {blogData.tags.length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold mb-4">Etiquetas</h3>
                    <div className="flex flex-wrap gap-2">
                      {blogData.tags.map((tag) => (
                        <Link
                          key={tag.slug}
                          href={`/blog?tag=${tag.slug}`}
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm hover:bg-blue-200 transition-colors"
                        >
                          #{tag.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}
      </Suspense>
    </BlogLayout>
  );
}
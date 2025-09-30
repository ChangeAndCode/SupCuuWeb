// Blog translations for English and Spanish

export const blogTranslations = {
  'en-us': {
    // Hero section
    heroTitle: 'Blog',
    heroDescription: 'Discover the latest news, trends, and innovations in the Chihuahua entrepreneurial ecosystem',
    heroButtonText: 'View all articles',

    // Featured articles
    featuredTitle: 'Featured Articles',
    featuredDescription: 'Discover the latest news and trends in the entrepreneurial ecosystem',
    readFullArticle: 'Read full article',
    viewAllArticles: 'View all articles',

    // Blog list
    allArticles: 'All articles',
    filteredArticles: 'Filtered articles',
    noArticlesFound: 'No articles found.',
    clearFilters: 'Clear filters',

    // Filters
    resultsFor: 'Results for:',
    category: 'Category:',
    tag: 'Tag:',

    // Article page
    backToBlog: 'Back to blog',
    readTime: 'min read',
    words: 'words',
    loadingArticle: 'Loading article...',
    loadingBlog: 'Loading blog...',

    // Related articles
    relatedArticles: 'Related Articles',

    // Meta
    articleNotFound: 'Article not found',
    articleNotFoundDescription: 'The article you are looking for does not exist.',

    // Author
    author: 'StartUp Chihuahua',

    // General
    featured: 'Featured',
  },
  'es-mx': {
    // Hero section
    heroTitle: 'Blog',
    heroDescription: 'Descubre las últimas noticias, tendencias e innovaciones en el ecosistema emprendedor de Chihuahua',
    heroButtonText: 'Ver todos los artículos',

    // Featured articles
    featuredTitle: 'Artículos Destacados',
    featuredDescription: 'Descubre las últimas novedades y tendencias del ecosistema emprendedor',
    readFullArticle: 'Leer artículo completo',
    viewAllArticles: 'Ver todos los artículos',

    // Blog list
    allArticles: 'Todos los artículos',
    filteredArticles: 'Artículos filtrados',
    noArticlesFound: 'No se encontraron artículos.',
    clearFilters: 'Limpiar filtros',

    // Filters
    resultsFor: 'Resultados para:',
    category: 'Categoría:',
    tag: 'Etiqueta:',

    // Article page
    backToBlog: 'Volver al blog',
    readTime: 'min lectura',
    words: 'palabras',
    loadingArticle: 'Cargando artículo...',
    loadingBlog: 'Cargando blog...',

    // Related articles
    relatedArticles: 'Artículos Relacionados',

    // Meta
    articleNotFound: 'Artículo no encontrado',
    articleNotFoundDescription: 'El artículo que buscas no existe.',

    // Author
    author: 'StartUp Chihuahua',

    // General
    featured: 'Destacado',
  }
};

export function getBlogTranslations(locale: string) {
  return blogTranslations[locale as keyof typeof blogTranslations] || blogTranslations['es-mx'];
}
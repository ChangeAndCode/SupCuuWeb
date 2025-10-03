'use client';

import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Search, Filter, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BlogFilterProps {
  categories: Array<{
    name: string;
    slug: string;
    count: number;
  }>;
  tags: Array<{
    name: string;
    slug: string;
    count: number;
  }>;
  currentCategory?: string;
  currentTag?: string;
  currentSearch?: string;
}

const BlogFilter: React.FC<BlogFilterProps> = ({
  categories,
  tags,
  currentCategory,
  currentTag,
  currentSearch
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchInput, setSearchInput] = useState(currentSearch || '');
  const [showFilters, setShowFilters] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    
    if (searchInput) {
      params.set('search', searchInput);
    } else {
      params.delete('search');
    }
    
    params.delete('page'); // Reset to page 1
    router.push(`/blog?${params.toString()}`);
  };

  const handleCategoryFilter = (categorySlug: string) => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (categorySlug === currentCategory) {
      params.delete('category');
    } else {
      params.set('category', categorySlug);
    }
    
    params.delete('page'); // Reset to page 1
    router.push(`/blog?${params.toString()}`);
  };

  const handleTagFilter = (tagSlug: string) => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (tagSlug === currentTag) {
      params.delete('tag');
    } else {
      params.set('tag', tagSlug);
    }
    
    params.delete('page'); // Reset to page 1
    router.push(`/blog?${params.toString()}`);
  };

  const clearAllFilters = () => {
    router.push('/blog');
    setSearchInput('');
  };

  const hasActiveFilters = currentCategory || currentTag || currentSearch;

  return (
    <div className="mb-8">
      {/* Search Bar */}
      <div className="flex gap-4 mb-4">
        <form onSubmit={handleSearch} className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Buscar artículos..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {searchInput && (
              <button
                type="button"
                onClick={() => setSearchInput('')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </form>

        <Button
          type="button"
          variant="outline"
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2"
        >
          <Filter className="w-4 h-4" />
          Filtros
          <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
        </Button>
      </div>

      {/* Active Filters */}
      {hasActiveFilters && (
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="text-sm text-gray-600">Filtros activos:</span>
          
          {currentSearch && (
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
              Búsqueda: {currentSearch}
              <button
                onClick={() => {
                  setSearchInput('');
                  const params = new URLSearchParams(searchParams.toString());
                  params.delete('search');
                  router.push(`/blog?${params.toString()}`);
                }}
                className="ml-1 hover:text-blue-900"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}
          
          {currentCategory && (
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
              Categoría: {currentCategory}
              <button
                onClick={() => handleCategoryFilter(currentCategory)}
                className="ml-1 hover:text-green-900"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}
          
          {currentTag && (
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
              Etiqueta: {currentTag}
              <button
                onClick={() => handleTagFilter(currentTag)}
                className="ml-1 hover:text-purple-900"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}
          
          <button
            onClick={clearAllFilters}
            className="text-sm text-gray-600 hover:text-gray-800 underline"
          >
            Limpiar todos
          </button>
        </div>
      )}

      {/* Filter Options */}
      {showFilters && (
        <div className="border rounded-lg p-4 bg-gray-50">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Categories */}
            {categories.length > 0 && (
              <div>
                <h4 className="font-semibold mb-3 text-gray-700">Categorías</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label
                      key={category.slug}
                      className="flex items-center gap-2 cursor-pointer hover:text-blue-600"
                    >
                      <input
                        type="radio"
                        name="category"
                        checked={currentCategory === category.slug}
                        onChange={() => handleCategoryFilter(category.slug)}
                        className="text-blue-600"
                      />
                      <span className="text-sm">
                        {category.name} ({category.count})
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            {tags.length > 0 && (
              <div>
                <h4 className="font-semibold mb-3 text-gray-700">Etiquetas</h4>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <button
                      key={tag.slug}
                      onClick={() => handleTagFilter(tag.slug)}
                      className={`px-3 py-1 rounded-full text-sm transition-colors ${
                        currentTag === tag.slug
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {tag.name} ({tag.count})
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogFilter;
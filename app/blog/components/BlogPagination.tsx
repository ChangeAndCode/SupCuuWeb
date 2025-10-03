'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
  category?: string;
  tag?: string;
  search?: string;
}

const BlogPagination: React.FC<BlogPaginationProps> = ({
  currentPage,
  totalPages,
  category,
  tag,
  search
}) => {
  // Build query parameters
  const buildUrl = (page: number) => {
    const params = new URLSearchParams();
    if (page > 1) params.set('page', page.toString());
    if (category) params.set('category', category);
    if (tag) params.set('tag', tag);
    if (search) params.set('search', search);
    
    const queryString = params.toString();
    return `/blog${queryString ? `?${queryString}` : ''}`;
  };

  // Calculate page numbers to display
  const getPageNumbers = () => {
    const delta = 2; // Number of pages to show on each side of current page
    const range = [];
    const rangeWithDots = [];
    let l;

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - delta && i <= currentPage + delta)) {
        range.push(i);
      }
    }

    range.forEach((i) => {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push('...');
        }
      }
      rangeWithDots.push(i);
      l = i;
    });

    return rangeWithDots;
  };

  if (totalPages <= 1) return null;

  return (
    <nav className="flex justify-center items-center space-x-2 mt-8" aria-label="Paginación del blog">
      {/* Previous Page */}
      {currentPage > 1 ? (
        <Link href={buildUrl(currentPage - 1)}>
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <ChevronLeft className="w-4 h-4" />
            Anterior
          </Button>
        </Link>
      ) : (
        <Button variant="outline" size="sm" disabled className="flex items-center gap-1">
          <ChevronLeft className="w-4 h-4" />
          Anterior
        </Button>
      )}

      {/* Page Numbers */}
      <div className="flex items-center space-x-1">
        {getPageNumbers().map((pageNumber, index) => (
          <React.Fragment key={index}>
            {pageNumber === '...' ? (
              <span className="px-3 py-1 text-gray-500">...</span>
            ) : (
              <>
                {pageNumber === currentPage ? (
                  <span className="px-3 py-1 bg-blue-600 text-white rounded-md font-semibold">
                    {pageNumber}
                  </span>
                ) : (
                  <Link href={buildUrl(pageNumber as number)}>
                    <Button variant="ghost" size="sm" className="px-3 py-1">
                      {pageNumber}
                    </Button>
                  </Link>
                )}
              </>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Next Page */}
      {currentPage < totalPages ? (
        <Link href={buildUrl(currentPage + 1)}>
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            Siguiente
            <ChevronRight className="w-4 h-4" />
          </Button>
        </Link>
      ) : (
        <Button variant="outline" size="sm" disabled className="flex items-center gap-1">
          Siguiente
          <ChevronRight className="w-4 h-4" />
        </Button>
      )}
    </nav>
  );
};

export default BlogPagination;
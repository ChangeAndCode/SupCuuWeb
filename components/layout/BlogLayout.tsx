import React from 'react';

interface BlogLayoutProps {
  children: React.ReactNode;
}

const BlogLayout: React.FC<BlogLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white pt-[90px]">
      {children}
    </div>
  );
};

export default BlogLayout;
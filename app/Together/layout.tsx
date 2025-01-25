// app/Engine/layout.tsx
import React from 'react';
import { Metadata } from 'next';
import HeaderLayout from 'app/header/layout';

// Metadata específica para la página Engine
export const metadata: Metadata = {
  title: 'Together We Are Strong - StartUp Chihuahua',
  description: 'Página de Colaboraciones',
};

interface TogetherLayoutProps {
  children: React.ReactNode;
}

const TogetherLayout: React.FC<TogetherLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="mt-20 flex-grow">{children}</div>
    </>
  );
};

export default TogetherLayout;

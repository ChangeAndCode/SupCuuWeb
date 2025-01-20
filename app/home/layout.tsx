// app/Engine/layout.tsx
import React from 'react';
import { Metadata } from 'next';
import HeaderLayout from '../header/layout'; // Barra de navegación común

// Metadata específica para la página Engine
export const metadata: Metadata = {
  title: 'Home - StartUp Chihuahua',
  description: 'Página de Engine para StartUp Chihuahua',
};

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  return (
    <>
      <HeaderLayout />
      <main>{children}</main>
    </>
  );
};

export default HomeLayout;

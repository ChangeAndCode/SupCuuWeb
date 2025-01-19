// app/Engine/layout.tsx
import React from 'react';
import { Metadata } from 'next';
import HeaderLayout from '../header/layout'; // Barra de navegación común

// Metadata específica para la página Engine
export const metadata: Metadata = {
  title: 'Dream big - StartUp Chihuahua',
  description: 'Página de Engine para StartUp Chihuahua',
};

interface DreamBigLayoutProps {
  children: React.ReactNode;
}

const DreamBigLayout: React.FC<DreamBigLayoutProps> = ({ children }) => {
  return (
    <>
      <HeaderLayout />
      <main>{children}</main>
    </>
  );
};

export default DreamBigLayout;

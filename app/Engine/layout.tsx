// app/Engine/layout.tsx
import React from 'react';
import { Metadata } from 'next';
import HeaderLayout from '../header/layout'; // Barra de navegación común

// Metadata específica para la página Engine
export const metadata: Metadata = {
  title: 'Engine - StartUp Chihuahua',
  description: 'Página de Engine para StartUp Chihuahua',
};

interface EngineLayoutProps {
  children: React.ReactNode;
}

const EngineLayout: React.FC<EngineLayoutProps> = ({ children }) => {
  return (
    <>
      <HeaderLayout />
      <main>{children}</main>
    </>
  );
};

export default EngineLayout;

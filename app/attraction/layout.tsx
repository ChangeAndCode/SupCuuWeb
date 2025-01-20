import React from 'react';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Attraction - StartUp Chihuahua',
  description: 'Página de Engine para StartUp Chihuahua',
};

interface EngineLayoutProps {
  children: React.ReactNode;
}

const EngineLayout: React.FC<EngineLayoutProps> = ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default EngineLayout;

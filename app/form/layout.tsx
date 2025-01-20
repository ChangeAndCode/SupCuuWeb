// app/Engine/layout.tsx
import React from 'react';
import { Metadata } from 'next';
import HeaderLayout from '../header/layout';

// Metadata específica para la página Engine
export const metadata: Metadata = {
  title: 'Form - StartUp Chihuahua',
  description: 'Página de Engine para StartUp Chihuahua',
};

interface FormLayoutProps {
  children: React.ReactNode;
}

const FormLayout: React.FC<FormLayoutProps> = ({ children }) => {
  return (
    <>
      <HeaderLayout />
      <main>{children}</main>
    </>
  );
};

export default FormLayout;

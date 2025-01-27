// app/Engine/layout.tsx
import React from 'react';
import { Metadata } from 'next';

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
      <main>{children}</main>
    </>
  );
};

export default FormLayout;

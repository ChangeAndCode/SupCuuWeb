// app/Engine/layout.tsx
import React from "react";
import { Metadata } from "next";
import HeaderLayout from "../header/layout"; // Barra de navegación común

// Metadata específica para la página Engine
export const metadata: Metadata = {
  title: "Events & opportunities - StartUp Chihuahua",
  description: "Página de Engine para StartUp Chihuahua",
};

interface OpportunitiesLayoutProps {
  children: React.ReactNode;
}

const OpportunitiesLayout: React.FC<OpportunitiesLayoutProps> = ({
  children,
}) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default OpportunitiesLayout;

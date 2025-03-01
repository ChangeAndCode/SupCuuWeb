// app/Engine/layout.tsx
import React from 'react';
import { Metadata } from 'next';
import HeaderLayout from '../header/layout';
import CT from './component/CT';
import { getLandingPageData } from '@/lib/home/umbracoDataService';

export const metadata: Metadata = {
  title: 'Home - StartUp Chihuahua',
  description: 'Página de Engine para StartUp Chihuahua',
};

interface Props {
  children: React.ReactNode;
}

const HomeLayout = async ({ children }: Props) => {
  // Fetch the data
  console.log('Fetching data in homepage');
  const pageData = await getLandingPageData();
  
  return (
    <>
      <HeaderLayout />
      <main>
        <div className='bg-ColorPrincipal'>

        {children}
        </div>
        <CT pageData={pageData} />
      </main>
    </>
  );
};

export default HomeLayout;

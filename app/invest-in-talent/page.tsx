// app/invest-in-talent/page.tsx
import { Suspense } from 'react';
import Image from 'next/image';
// Corrected import path assuming lib/invest-page/index.ts
import { getInvestPageData } from '@/lib/invest-in-talent';
import { ProfileCarousel } from './components/ProfileCarousel';
import { ContactForm } from './components/ContactForm';
import { Header } from './components/Header';
// Corrected import path assuming components/Loading.tsx
import Loading from '@/components/Loading';
import ContacUs from '../form/components/ContacUs';
import RedesSociales from '../form/components/RedesSociales';
import { getFooterData } from '@/lib/form/umbracoFooterDataService';
import { getLocale } from '@/lib/Localization';

export const dynamic = 'force-dynamic';
export const revalidate = 10; // Revalidate every 10 seconds

export default async function InvestInTalentPage() {
  const footerData = await getFooterData();
  const locale = await getLocale();
  const pageData = await getInvestPageData(locale);

  return (
    <main className="min-h-screen bg-white pt-16">
      <Suspense fallback={<Loading />}>
        <Header {...pageData.header} />
      </Suspense>

      <div className="relative">
        <Suspense fallback={<Loading />}>
          <ProfileCarousel profiles={pageData.profiles} />
        </Suspense>
        <ContactForm formHeader={pageData.formHeader} locale={locale} />
      </div>

      <footer className="relative bg-ColorPrincipal rounded-t-7xl px-8 py-16">
        <div className="absolute top-[-4rem] left-16 md:left-40">
          <Image
            src="/logoE.webp"
            alt="logo"
            width={150}
            height={150}
            className="object-contain"
            quality={80}
          />
        </div>

        <div className="container mx-auto pt-6 max-w-[1066px]">
          <div className="flex flex-col lg:flex-row justify-between">
            <ContacUs data={footerData} />
            <RedesSociales data={footerData} />
          </div>
        </div>
      </footer>
    </main>
  );
}

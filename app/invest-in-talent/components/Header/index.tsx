// app/invest-in-talent/components/Header/index.tsx
import Image from 'next/image';
import type { InvestPageData } from '@/types/invest-in-talent';

type HeaderProps = InvestPageData['header'];

export const Header = ({ title, subtitle, heroImage }: HeaderProps) => {
  return (
    <header className="relative w-full pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-2/5">
            <div className="relative w-full h-[350px] xs:h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px]">
              <Image 
                src={heroImage.src} 
                alt={heroImage.alt} 
                fill
                className="object-contain animate-slide-left"
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>

          <div className="w-full md:w-3/5 space-y-6 text-center md:text-left">
            <h1 className="font-PerformanceMark text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-tight text-blue-600">
              {title}
            </h1>
            <h2 className="font-pragmatica text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-blue-600/90">
              {subtitle}
            </h2>
          </div>
        </div>
      </div>
    </header>
  );
};
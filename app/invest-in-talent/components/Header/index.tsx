// app/invest-in-talent/components/Header/index.tsx
import { TornPaper } from '../TornPaper';

interface HeaderProps {
  title: string;
  subtitle: string;
  heroImage: {
    src: string;
    alt: string;
  };
}

export const Header = ({ title, subtitle, heroImage }: HeaderProps) => {
  return (
    <header className="relative w-full bg-blue-600 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h1 className="text-5xl font-bold mb-4 handwritten">{title}</h1>
            <h2 className="text-3xl">{subtitle}</h2>
          </div>
          <div className="flex-shrink-0">
            <img 
              src={heroImage.src} 
              alt={heroImage.alt} 
              className="w-64 md:w-96"
              fetchPriority='high'
            />
          </div>
        </div>
      </div>
      <TornPaper position="bottom" color="white" />
    </header>
  );
};
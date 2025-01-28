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
    <header className="relative w-full pt-16 pb-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image - first in both mobile and desktop */}
          <div className="w-full md:w-1/3">
            <div className="relative max-w-sm mx-auto">
              <img 
                src={heroImage.src} 
                alt={heroImage.alt} 
                className="w-full h-auto"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>

          {/* Text content - centered on mobile, normal on desktop */}
          <div className="w-full md:w-2/3 space-y-4 text-center md:text-left">
            <h1 className="font-PerformanceMark text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-blue-600">
              {title}
            </h1>
            <h2 className="font-pragmatica text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-blue-600/90">
              {subtitle}
            </h2>
          </div>
        </div>
      </div>
    </header>
  );
};
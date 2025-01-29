'use client';
import React, { useState, useId, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Profile } from './types';

const ProfileDisplay = React.memo(({
  profile,
  isTransitioning
}: {
  profile: Profile;
  isTransitioning: boolean;
}) => {
  const id = useId();
  const mobileContentRef = useRef<HTMLDivElement>(null);
  const desktopContentRef = useRef<HTMLDivElement>(null);
  const [hasMobileOverflow, setHasMobileOverflow] = useState(false);
  const [hasDesktopOverflow, setHasDesktopOverflow] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      if (mobileContentRef.current) {
        setHasMobileOverflow(
          mobileContentRef.current.scrollHeight > mobileContentRef.current.clientHeight
        );
      }
      if (desktopContentRef.current) {
        setHasDesktopOverflow(
          desktopContentRef.current.scrollHeight > desktopContentRef.current.clientHeight
        );
      }
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, [profile]);

  return (
    <div 
      id={id}
      className={`relative w-full transition-opacity duration-300 ${
        isTransitioning ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="bg-white rounded-3xl shadow-lg p-8 mx-4 relative overflow-hidden">
        {/* Name and Role Section */}
        <div className="lg:absolute lg:top-0 lg:left-8 lg:right-8 z-10 mb-6 md:mb-0">
          <h3 className="font-PerformanceMark text-blue-600 text-4xl sm:text-5xl md:text-6xl lg:text-[10rem] leading-none">
            {profile.name.split(' ').map((part, index) => (
              <React.Fragment key={`${id}-name-${index}`}>
                {part}
                {index < profile.name.split(' ').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h3>
          <div className="space-y-1">
            <p className="text-sm font-pragmatica font-semibold text-gray-600">
              {profile.role}
            </p>
            <p className="font-pragmatica font-bold text-blue-600 text-sm">
              OF {profile.company}
            </p>
          </div>
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="block lg:hidden min-h-[750px] rounded-3xl">
          <div className="h-48 relative rounded-lg overflow-hidden mb-6">
            <Image
              src={profile.image.src}
              alt={profile.image.alt}
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="relative h-[calc(100%-12rem-1.5rem)]">
            <div 
              ref={mobileContentRef}
              className="space-y-6 pr-2 max-h-[500px] overflow-y-auto"
            >
              <p className="font-pragmatica text-gray-900 text-base">
                {profile.description.paragraph1}
              </p>
              <p className="font-pragmatica text-gray-900 text-sm">
                {profile.description.paragraph2}
              </p>
              <p className="font-pragmatica text-gray-900 text-sm pb-12">
                {profile.description.paragraph3}
              </p>
            </div>
            {hasMobileOverflow && (
              <div className="absolute bottom-0 left-0 right-2 h-16 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
            )}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8">
          <div className="w-full aspect-square relative rounded-lg overflow-hidden z-20 mt-32 ms-10">
            <Image
              src={profile.image.src}
              alt={profile.image.alt}
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="relative h-full">
            <div 
              ref={desktopContentRef}
              className="absolute top-0 right-0 text-sm text-gray-900 w-full overflow-y-auto pr-2"
            >
              <div className="w-3/4 ml-auto overflow-hidden">
                <div className="relative">
                  <p className="font-pragmatica text-right p-4 rounded h-48">
                    {profile.description.paragraph1}
                  </p>
                  {hasDesktopOverflow && (
                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent" />
                  )}
                </div>
              </div>
              <div className="mt-24 overflow-hidden pb-12">
                <p className="font-pragmatica text-right p-4 rounded">
                  {profile.description.paragraph2}
                </p>
                <p className="font-pragmatica text-right rounded mb-12">
                  {profile.description.paragraph3}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

ProfileDisplay.displayName = 'ProfileDisplay';

const NavButton = React.memo(({
  direction,
  onClick,
  disabled
}: {
  direction: 'prev' | 'next';
  onClick: () => void;
  disabled: boolean;
}) => (
  <button 
    onClick={onClick}
    className={`absolute ${direction === 'prev' ? 'left-2 md:left-4' : 'right-2 md:right-4'} 
      top-1/2 -translate-y-1/2 lg:top-[275px] lg:-translate-y-0
      p-2 bg-white text-blue-600 rounded-full 
      hover:bg-gray-50 transition-colors disabled:opacity-50 shadow-md z-20`}
    aria-label={`${direction === 'prev' ? 'Previous' : 'Next'} profile`}
    disabled={disabled}
  >
    {direction === 'prev' ? (
      <ChevronLeft className="w-6 h-6" />
    ) : (
      <ChevronRight className="w-6 h-6" />
    )}
  </button>
));

NavButton.displayName = 'NavButton';

export const ProfileCarousel = ({ profiles }: { profiles: Profile[] }) => {
  const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTransition = (newDirection: 'prev' | 'next') => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex(([prev, _]) => {
      const dir = newDirection === 'prev' ? -1 : 1;
      const next = prev === (dir === -1 ? 0 : profiles.length - 1) ? 
        (dir === -1 ? profiles.length - 1 : 0) : 
        prev + dir;
      return [next, dir];
    });
    
    setTimeout(() => setIsTransitioning(false), 300);
  };

  return (
    <section className="relative py-8 md:py-16">
      {/* Updated background div with proper sizing and positioning */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-[120vw] h-full bg-[url('/Bg/bglandin.webp')] bg-no-repeat bg-center bg-cover"
          style={{
            position: 'absolute',
            left: '-10vw',
            right: '-10vw',
            transform: 'scale(1.1)',
            transformOrigin: 'center center'
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 py-12 md:py-20 relative">
        <div className="max-w-4xl mx-auto my-8 md:my-20 h-[1050px] xs:h-[1000px] sm:h-[950px] md:h-[735px] relative overflow-hidden">
          <NavButton 
            direction="prev"
            onClick={() => handleTransition('prev')}
            disabled={isTransitioning}
          />
          
          <ProfileDisplay 
            profile={profiles[currentIndex]}
            isTransitioning={isTransitioning}
          />

          <NavButton 
            direction="next"
            onClick={() => handleTransition('next')}
            disabled={isTransitioning}
          />
        </div>
      </div>
    </section>
  );
};
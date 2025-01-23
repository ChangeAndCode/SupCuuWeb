'use client';

import React, { useState, useId } from 'react';
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
  const [firstName, ...lastNameParts] = profile.name.split(' ');
  const lastName = lastNameParts.join(' ');
  const id = useId();

  return (
    <div 
      id={id}
      className={`relative w-full h-full transition-opacity duration-300 ${
        isTransitioning ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
        <div className="relative w-16 h-16">
          <Image
            src={profile.image.src}
            alt="Company Logo"
            fill
            sizes="64px"
            className="object-contain"
            priority
          />
        </div>
      </div>
      
      <div className="relative h-full pt-24 pb-6 px-8">
        <div className="absolute top-20 left-12 md:left-16">
          <h3 className="font-PerformanceMark text-blue-600 text-3xl md:text-4xl -rotate-2">
            {firstName}
          </h3>
          <h3 className="font-PerformanceMark text-blue-600 text-3xl md:text-4xl ml-8 rotate-1">
            {lastName}
          </h3>
        </div>

        <div className="absolute top-40 right-12 md:right-16 text-right">
          <p className="font-pragmatica text-base md:text-lg text-gray-700 -rotate-1">
            {profile.role}
          </p>
          <p className="text-sm text-blue-600 rotate-1">
            AT {profile.company}
          </p>
        </div>

        <div className="relative mt-40 space-y-6 max-h-[200px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent px-4 md:px-8">
          {[profile.description.paragraph1, profile.description.paragraph2, profile.description.paragraph3].map((paragraph, index) => (
            <p
              key={`${id}-p${index}`}
              className={`text-gray-700 font-pragmatica text-sm bg-white/80 p-4 rounded shadow-sm
                ${index === 0 ? '-rotate-1 ml-4 md:ml-8' : 
                  index === 1 ? 'rotate-1 mr-8 md:mr-12' : 
                  '-rotate-0.5 ml-2 md:ml-4'}`}
            >
              {paragraph}
            </p>
          ))}
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
      top-1/2 -translate-y-1/2 p-2 bg-white text-blue-600 rounded-full 
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
    <section className="relative py-16">
      <div className="bg-[url('/bg/bglandin.webp')] bg-no-repeat bg-center bg-[length:120vw_100%] absolute inset-0" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm min-h-[500px] relative overflow-hidden">
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
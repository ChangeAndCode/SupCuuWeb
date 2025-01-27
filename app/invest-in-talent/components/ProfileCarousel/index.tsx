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
  const id = useId();

  return (
    <div 
      id={id}
      className={`relative w-full transition-opacity duration-300 ${
        isTransitioning ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="bg-white rounded-3xl shadow-lg p-8 mx-4 relative">
        {/* Name Overlay */}
        <div className="absolute top-4 left-8 right-8 z-10">
          <h3 className="font-PerformanceMark text-blue-600 text-[10rem] leading-none">
            {profile.name.split(' ').map((part, index) => (
              <React.Fragment key={`${id}-name-${index}`}>
                {part}
                {index < profile.name.split(' ').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h3>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-2 gap-8">
          {/* Left Column - Photo and Role */}
          <div className="flex flex-col items-start space-y-4 z-20 pt-32">
            <div className="w-full aspect-square relative rounded-lg overflow-hidden">
              <Image
                src={profile.image.src}
                alt={profile.image.alt}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-pragmatica text-gray-600">
                {profile.role}
              </p>
              <p className="font-pragmatica text-blue-600 text-sm">
                OF {profile.company}
              </p>
            </div>
          </div>

          {/* Right Column - Description */}
          <div className="relative h-full">
            <div className="absolute top-0 right-0 text-sm text-gray-700 w-full">
              <p className="font-pragmatica text-right p-4 rounded">
                {profile.description.paragraph1}
              </p>
              <p className="font-pragmatica text-right p-4 rounded mt-36">
                {profile.description.paragraph2}
              </p>
              <p className="font-pragmatica text-right p-4 rounded">
                {profile.description.paragraph3}
              </p>
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
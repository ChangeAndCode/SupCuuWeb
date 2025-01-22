'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Profile } from './types';

const ProfileDisplay = ({
  profile,
  isTransitioning
}: {
  profile: Profile;
  isTransitioning: boolean;
}) => (
  <div 
    className={`flex-1 h-full transition-opacity duration-300 ${
      isTransitioning ? 'opacity-0' : 'opacity-100'
    }`}
  >
    {/* Company logo */}
    <div className="flex justify-center mb-4">
      <div className="relative w-20 h-20">
        <Image
          src={profile.image.src}
          alt="Startup Chihuahua Logo"
          fill
          sizes="80px"
          className="object-contain"
          priority
        />
      </div>
    </div>
    
    <div className="text-center mb-3">
      <h3 className="font-PerformanceMark text-ColorPrincipal uppercase text-2xl mb-1">
        {profile.name}
      </h3>
      <p className="font-pragmatica text-base mb-0.5 text-gray-700">
        {profile.role}
      </p>
      <p className="text-sm text-ColorPrincipal">
        AT {profile.company}
      </p>
    </div>

    <div className="space-y-3 text-sm overflow-y-auto text-center max-w-2xl mx-auto h-[200px] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent px-4">
      <p className="text-gray-700 font-pragmatica">{profile.description.paragraph1}</p>
      <p className="text-gray-700 font-pragmatica">{profile.description.paragraph2}</p>
      <p className="text-gray-700 font-pragmatica">{profile.description.paragraph3}</p>
    </div>
  </div>
);

const NavButton = ({
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
    className={`p-2 bg-white text-ColorPrincipal rounded-full hover:bg-gray-50 transition-colors disabled:opacity-50 shadow-md`}
    aria-label={`${direction === 'prev' ? 'Previous' : 'Next'} profile`}
    disabled={disabled}
  >
    {direction === 'prev' ? (
      <ChevronLeft className="w-6 h-6" />
    ) : (
      <ChevronRight className="w-6 h-6" />
    )}
  </button>
);

export const ProfileCarousel = ({ profiles }: { profiles: Profile[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTransition = (direction: 'prev' | 'next') => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentIndex(prev => {
        if (direction === 'prev') {
          return prev === 0 ? profiles.length - 1 : prev - 1;
        }
        return prev === profiles.length - 1 ? 0 : prev + 1;
      });
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <section className="relative">
      <div className="bg-[url('/bg/bglandin.webp')] bg-no-repeat bg-center bg-[length:120vw_100%] h-[600px] flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl h-[400px]">
            <div className="p-6 h-full">
              <div className="flex items-center justify-between gap-8 h-full">
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
          </div>
        </div>
      </div>
    </section>
  );
};
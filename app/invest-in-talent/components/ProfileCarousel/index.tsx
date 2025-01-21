// app/invest-in-talent/components/ProfileCarousel/index.tsx
'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { type Profile } from './types';

interface ProfileCarouselProps {
  profiles: Profile[];
}

export const ProfileCarousel = ({ profiles }: ProfileCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTransition = (direction: 'prev' | 'next') => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentIndex(prev => {
        if (direction === 'prev') {
          return prev === 0 ? profiles.length - 1 : prev - 1;
        } else {
          return prev === profiles.length - 1 ? 0 : prev + 1;
        }
      });
      setIsTransitioning(false);
    }, 300);
  };

  const currentProfile = profiles[currentIndex];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-8">
            <button 
              onClick={() => handleTransition('prev')}
              className="p-2 hover:bg-gray-100 rounded-full flex-shrink-0 mt-32 transition-colors"
              aria-label="Previous profile"
              disabled={isTransitioning}
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className={`flex-1 transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
              <div className="mb-8">
                <img
                  src={currentProfile.image.src}
                  alt={currentProfile.image.alt}
                  className="w-48 h-48 rounded-full mx-auto"
                />
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-4xl font-bold text-blue-600 mb-2 handwritten">
                  {currentProfile.name}
                </h3>
                <p className="text-xl mb-1">{currentProfile.role}</p>
                <p className="text-lg text-gray-600">{currentProfile.company}</p>
              </div>

              <div className="space-y-6 text-lg text-center max-w-2xl mx-auto">
                <p className="text-gray-800">{currentProfile.description.paragraph1}</p>
                <p className="text-gray-800">{currentProfile.description.paragraph2}</p>
                <p className="text-gray-800">{currentProfile.description.paragraph3}</p>
              </div>
            </div>

            <button 
              onClick={() => handleTransition('next')}
              className="p-2 hover:bg-gray-100 rounded-full flex-shrink-0 mt-32 transition-colors"
              aria-label="Next profile"
              disabled={isTransitioning}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
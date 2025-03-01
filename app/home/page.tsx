import Image from 'next/image';
import React from 'react';
import { getHomeContent, getImageUrl } from '@/lib/header';

const Home: React.FC = async () => {
  const content = await getHomeContent();
  // console.log('content', content);
  if (!content?.properties) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-white">Error loading the content</p>
      </div>
    );
  }

  const { properties } = content;
  const imageUrl = getImageUrl(properties.backgroundImage[0].url);
  const { width: imageWidth, height: imageHeight } = properties.backgroundImage[0];

  return (
    <div className="px-14 lg:px-24 xl:px-32 py-32 md:py-48">
      <div className="max-w-[1920px] mx-auto w-full">
        <h2 className="font-PerformanceMark xs:text-[1rem] sm:text-[1.2rem] md:text-[2.5rem] lg:text-[2.8rem] xl:text-[2rem] xl-md:text-[3rem] 2xl:text-[5rem] md:leading-[3.5rem] lg:leading-[5rem] xl:leading-[5rem] 2xl:leading-[7rem] text-white uppercase">
          {properties.principalText.items[0].content.properties.stringText}
        </h2>
        <p className="main-Tipography font-pragmatica xs:text-[1.3rem] sm:text-[1.5rem] md:text-[3rem] lg:text-[3.8rem] xl:text-[5rem] 2xl:text-[7rem] md:leading-[3.5rem] lg:leading-[5rem] xl:leading-[5rem] 2xl:leading-[7rem] text-white uppercase">
          {properties.principalText.items[1].content.properties.stringText}&nbsp;
          <span className="relative inline-block">
            <span className="pl-[10px]">{properties.principalText.items[2].content.properties.stringText}</span>
            <Image
              src={imageUrl}
              width={imageWidth}
              height={imageHeight}
              alt="We are"
              className="absolute hidden md:block top-[60%] transform -translate-x-[-470%] 4xl:-translate-x-[-350%] z-10"
              style={{ width: '9vw', height: 'auto' }}
              priority
            />
          </span>
          {properties.subtext.items[0].content.properties.stringText}
        </p>
        <p className="font-PerformanceMark xs:text-[1rem] sm:text-[1.2rem] md:text-[2.5rem] lg:text-[2.8rem] xl-md:text-[3rem] 2xl:text-[5rem] md:leading-[3.5rem] lg:leading-[5rem] xl:leading-[5rem] 2xl:leading-[7rem] text-white uppercase">
          {properties.subtext.items[1].content.properties.stringText}
        </p>
      </div>
    </div>
  );
};

export default Home;

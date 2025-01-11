import React from 'react';
import Image from 'next/image';

const WantToStayUpdated = () => {
  return (
    <div className="relative w-full max-w-[900px] mx-auto py-8">
      <div className="relative w-full h-[180px] md:h-[250px] lg:h-[300px]">
        <Image
          src="/Bg/bgTitulo.webp"
          alt="Want to Stay Updated"
          layout="fill"
          objectFit="cover"
          quality={80}
          priority
          className="rounded-lg"
        />
        <div className="absolute inset-0 flex items-center justify-start">
          <h2 className="font-PerformanceMark text-white text-xs sm:text-sm lg:text-[162%] md:text-lg inset-[7.4rem] text-left mt-4 max-w-[75%] h-[50%] ml-[8%]">
            WANT TO STAY UPDATED ON WHAT'S HAPPENING IN <br />
            THE ECOSYSTEM DESIGNED JUST FOR YOU?
          </h2>
        </div>
      </div>
      <p className="font-PerformanceMark text-gray-800 text-xs sm:text-sm md:text-base lg:text-lg text-left mt-4 ml-[8%]">
        LEAVE US YOUR INFORMATION, AND EVERY TWO WEEKS, <br />
        YOU'LL RECEIVE INFORMATION TAILORED TO YOUR <br />
        INTERESTS RIGHT IN YOUR INBOX.
      </p>
    </div>
  );
};

export default WantToStayUpdated;

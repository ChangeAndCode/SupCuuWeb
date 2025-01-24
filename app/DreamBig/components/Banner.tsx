import React from "react";
import Image from "next/image";
// import Link from "next/link";
// import { useState, useEffect, useRef } from "react";

const Banner = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row w-full relative md:right-0 lg:top-32">
        <div className="w-full flex justify-center lg:justify-start max-sm:h-auto max-md:w-full md:w-full lg:w-[35%]">
          <Image
            src="/CT/primera.webp"
            alt="Entrepreneur"
            width={562}
            height={390}
            className="w-full h-auto object-contain"
            quality={80}
            priority
            loading="eager"
            placeholder="blur"
            blurDataURL="/CT/primera.webp"
          />
        </div>

        <div className="relative md:top-10 w-full md:w-[60%]">
          <div className="flex flex-col w-full mb-10 text-left md:text-left">
            <h2
              className="
                max-sm:text-[6rem] max-sm:leading-[3.5rem] max-sm:mb-6
                max-md:text-[8rem] max-md:leading-[6rem] max-md:mb-10
                max-lg:text-[10rem] max-lg:leading-[8rem] max-lg:mb-12
                max-xl:text-[14rem] 2xl:text-[16rem] lg:leading-[8rem] lg:mb-20
              text-ColorPrincipal font-PerformanceMark
                "
            >
              Dream
            </h2>
            <div className="flex flex-row text-ColorPrincipal">
              <h2
                className="
                  max-sm:text-[6rem] max-sm:leading-[3rem] max-sm:mb-5
                  max-md:text-[8rem] max-md:leading-[5rem] max-md:mb-8
                  max-lg:text-[10rem] max-lg:leading-[7rem] max-lg:mb-10
                  max-xl:text-[14rem] 2xl:text-[16rem]
                  font-PerformanceMark w-[50%] h-auto leading-[8rem]
                "
              >
                big,
              </h2>
              <h2
                className="
                  max-sm:text-[1.5rem] max-sm:leading-[3rem]
                  max-md:text-[2rem] max-md:leading-[5rem] 
                  max-lg:text-[2rem] max-lg:leading-[6rem] 
                  max-xl:text-[3rem] 2xl:text-[4rem]
                  font-PerformanceMark w-[50%] h-auto leading-[8rem] text-end
                "
              >
                start small,
              </h2>
            </div>
          </div>
          <div
            className="
              flex flex-col w-full mt-10 text-left
              max-sm:mt-5 max-md:mt-8 max-lg:mt-12
            "
          >
            <h2
              className="
                max-sm:text-[2rem] max-sm:leading-[2rem]
                max-md:text-[4rem] max-md:leading-[3rem]
                max-lg:text-[5rem] max-lg:leading-[4rem]
                text-7xl text-ColorPrincipal font-pragmatica w-full
              "
            >
              and keep
            </h2>
            <h2
              className="
                max-sm:text-[2rem] max-sm:leading-[2rem] font-bold
                max-md:text-[4rem] max-md:leading-[3rem] font-bold
                max-lg:text-[5rem] max-lg:leading-[4rem] font-bold
                text-7xl text-ColorPrincipal font-pragmatica w-full
              "
            >
              moving forward
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;

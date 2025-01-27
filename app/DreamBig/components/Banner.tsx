import React from "react";
import Image from "next/image";
// import Link from "next/link";
// import { useState, useEffect, useRef } from "react";

const Banner = () => {
  return (
    <>
      <div
        className="flex 
        flex-col 
        lg:flex-col lg:top-32
        xl:flex-row
        w-full 
        relative 
        md:right-0 
        "
      >
        <div
          className="
          flex
          sm:justify-center
          lg:w-full lg:justify-center
        "
        >
          <div
            className="
            max-sm:w-full max-sm:h-auto
            sm:w-full
            md:w-[80%] lg:justify-center 
            xl:w-full xl:relative xl:bottom-24
            flex 
            justify-center
            "
          >
            <Image
              src="/CT/primera.webp"
              alt="Entrepreneur"
              width={562}
              height={390}
              className="
              w-full
              h-auto
              object-contain"
              quality={80}
              priority
              loading="eager"
              placeholder="blur"
              blurDataURL="/CT/primera.webp"
            />
          </div>
        </div>

        <div
          className="relative md:top-10 
        max-sm:w-full
        sm:w-full"
        >
          <div className="flex flex-col w-full mb-10 text-left md:text-left">
            <h2
              className="
                max-sm:text-[6.5rem]
                sm:text-[8rem] max-sm:leading-[3.5rem] max-sm:mb-6
                md:text-[12rem] max-md:leading-[6rem] max-md:mb-10
                lg:text-[18rem] max-lg:leading-[8rem] max-lg:mb-12
                xl:text-[16rem] lg:leading-[8rem] lg:mb-20
              text-ColorPrincipal font-PerformanceMark
                "
            >
              Dream
            </h2>
            <div className="flex flex-row text-ColorPrincipal">
              <h2
                className="
                  max-sm:text-[6.5rem] max-sm:leading-[3rem] max-sm:mb-5
                  sm:text-[8rem] 
                  md:text-[12rem] max-md:leading-[5rem] max-md:mb-8
                  lg:text-[18rem] max-lg:leading-[7rem] max-lg:mb-10
                  xl:text-[16rem] 
                  font-PerformanceMark w-[50%] h-auto leading-[8rem]
                "
              >
                big,
              </h2>
              <h2
                className="
                  max-sm:text-[1.5rem] max-sm:leading-[2rem]
                  sm:text-[1.5rem] sm:leading-[2rem]
                  md:text-[2.5rem] md:leading-[5rem] 
                  lg:text-[4rem] lg:leading-[6rem] 
                  xl:text-[3rem] 
                  2xl:text-[3.5rem]
                  font-PerformanceMark w-[50%] h-auto leading-[8rem] text-end
                "
              >
                start small,
              </h2>
            </div>
          </div>
          <div
            className="
              flex 
              flex-col 
              w-full 
              mt-10
              text-left
              max-sm:mt-5
              sm:mt-8
              md:mt-12
            "
          >
            <h2
              className="
                max-sm:text-[2rem] max-sm:leading-[2rem]
                sm:text-[2rem]
                md:text-[3rem] max-md:leading-[3rem]
                lg:text-[5rem] max-lg:leading-[4rem]
                text-7xl text-ColorPrincipal font-pragmatica w-full
              "
            >
              and keep
            </h2>
            <h2
              className="
                max-sm:text-[2rem] max-sm:leading-[2rem] font-bold
                sm:text-[2rem]
                md:text-[3rem] max-md:leading-[3rem] font-bold
                lg:text-[5rem] max-lg:leading-[4rem] font-bold
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

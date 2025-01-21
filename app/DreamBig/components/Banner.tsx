import React from "react";
import Image from "next/image";
// import Link from "next/link";
// import { useState, useEffect, useRef } from "react";

const Banner = () => {
  return (
    <>
      <div className="flex justify-baseline w-full">
        <Image
          src="/CT/primera.webp"
          alt="Entrepreneur"
          width={590}
          height={490}
          style={{ height: "auto" }}
          quality={80}
          priority
          loading="eager"
          placeholder="blur"
          blurDataURL="/CT/primera.webp"
        />
        <div className="">
          <div className="flex">
            <h2 className="text-[13rem] text-ColorPrincipal font-PerformanceMark w-3/5 leading-[8rem]">
              Dream big,
            </h2>
            <h2 className="absolute top-[280px] right-[-400px] text-[3rem] text-ColorPrincipal font-PerformanceMark w-3/5 leading-[8rem]">
              start small,
            </h2>
          </div>
          <div>
            <h2 className="text-[5rem] text-ColorPrincipal font-Pragmatica w-full">
              and keep
            </h2>
            <h2 className="text-[5rem] text-ColorPrincipal font-Pragmatica w-full">
              moving forward
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;

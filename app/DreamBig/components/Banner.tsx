import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <>
      <div className="flex w-full relative right-10">
        <div>
          <Image
            src="/CT/primera.webp"
            alt="Entrepreneur"
            width={562}
            height={390}
            style={{ height: "auto" }}
            quality={80}
            priority
            loading="eager"
            placeholder="blur"
            blurDataURL="/CT/primera.webp"
          />
        </div>

        <div className="relative top-28 w-[890px]">
          <div className="flex flex-col w-full mb-10">
            <h2
              className="
            max-sm:text-[6rem] max-md:text-[12rem] max-lg:text-[14rem] max-xl:text-[16rem] max-2xl:text-[18rem]
            sm:leading-[4rem] md:leading-[6rem] lg:leading-[8rem] xl:leading-[10rem] 2xl:leading-[12rem]
            mb-20
            text-ColorPrincipal font-PerformanceMark  "
            >
              Dream
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;

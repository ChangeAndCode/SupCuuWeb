import BtnCT from "@components/btnct/BtnCT";
import Image from "next/image";
import React from "react";
import { AttractionData } from "@/types/attraction";

interface UmbracoAttractionData {
  data: AttractionData;
}

const NextBest: React.FC<UmbracoAttractionData> = ({ data }) => {
  return (
    <div className="flex flex-col items-center py-[4rem] px-[2rem] md:px-[4rem]">
      <h2 className="font-PerformanceMark text-ColorPrincipal text-[1.5rem] sm:text-[1.8rem] md:text-[3rem] lg:text-[4rem] xl:text-[5rem] 2xl:text-[6rem]  w-full xl:w-10/12 text-center md:leading-[3.5rem] lg:leading-[4.5rem] xl:leading-[5rem] 2xl:leading-[6rem]">
        {data.properties.nBMTitle}
      </h2>
      <div className="font-poppins text-ColorPrincipal text-[1rem] sm:text-[1.2rem] md:text-[2rem] xl:text-[2.5rem] 2xl:text-[3rem] uppercase xl:w-10/12 2xl:w-9/12 mt-[3rem] text-justify">
        <p>{data.properties.nBMContent.markup}</p>
      </div>
      <div className="flex items-center justify-center mt-[5rem] lg:mt-[-11rem]">
        <Image
          src="/arrow.webp"
          alt="Company Logo"
          width={470}
          height={370}
          quality={80}
          loading="lazy"
          className="hidden lg:block"
        />
        <BtnCT
          Text={data.properties.nBMButton}
          variant="secondary"
          href={data.properties.nBMButtonUrl?.[0]?.url || "#"}
        />
      </div>
    </div>
  );
};

export default NextBest;

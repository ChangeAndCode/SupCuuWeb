import Image from "next/image";
import React from "react";
import { AttractionData } from "@/types/attraction";

interface UmbracoAttractionData {
  data: AttractionData;
}

const Possible: React.FC<UmbracoAttractionData> = ({ data }) => {
  return (
    <>
      <h2 className="font-PerformanceMark text-ColorPrincipal text-[3rem] md:text-[3.5rem] lg:text-[4.5rem] xl:text-[6rem] 2xl:text-[8rem] text-center">
        {data.properties.possibleTitle}
      </h2>
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        {data.properties.possibleImages.map((image, index) => (
          <React.Fragment key={index}>
            <div className="flex justify-center w-[200px] h-[150px] md:w-[250px] md:h-[180px] xl:w-[250px] xl:h-[170px]">
              <div className="relative w-full h-full">
                <Image
                  src={image.url}
                  alt={image.name || "Logo"}
                  fill
                  className="object-contain"
                  quality={80}
                  loading="lazy"
                />
              </div>
            </div>
            {(index + 1) % 4 === 0 && <div className="w-full h-0" />}
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default Possible;

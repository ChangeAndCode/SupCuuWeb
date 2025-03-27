import Image from "next/image";
import React from "react";
import { AttractionData } from "@/types/attraction";

interface UmbracoAttractionData {
  data: AttractionData;
}

const History: React.FC<UmbracoAttractionData> = ({ data }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center px-[3rem] xl:px-0">
        <div className="pr-[2rem] md:pr-[7rem] lg:pr-[8rem]">
          <Image
            src="/history/tituloHistory.webp"
            alt="Company Logo"
            width={770}
            height={570}
            quality={80}
            loading="lazy"
            className="relative z-20"
          />
        </div>
        <div className=" relative flex flex-col items-center justify-center z-10">
          {data.properties.historyContent.items.map(
            (hContent: any, index: number) => (
              <React.Fragment key={index}>
                <p className="font-poppins text-[1.2rem] text-justify w-full md:w-8/12 z-10">
                  {hContent.content.properties.richText.markup}
                </p>
                <p className="font-poppins text-[1.2rem] text-justify w-full md:w-8/12 z-10">
                  {hContent.content.properties.stringText}
                </p>
              </React.Fragment>
            )
          )}
          <Image
            src={"/logoG.png"}
            alt="Company Logo"
            width={540}
            height={540}
            quality={80}
            loading="lazy"
            className="absolute right-[-4rem] xl:right-0 z-0"
          />
        </div>
        <div className="relative flex flex-col xl:flex-row items-center xl:justify-end mt-[5rem]">
          {data.properties.blockImage.map((image: any) => (
            <Image
              src={image.url}
              alt={image.name}
              width={670}
              height={570}
              quality={80}
              loading="lazy"
              className="xl:absolute 2xl:top-[-2rem] xl:right-[40rem] 2xl:right-[55rem] z-20"
            />
          ))}

          <div className="bg-white md:w-8/12 xl:w-1/2 rounded-3xl xl:rounded-none xl:rounded-l-3xl p-[1rem] md:p-[4rem] lg:p-[7rem] z-10">
            <p className="font-poppins text-[1.2rem] text-justify xl:w-10/12 2xl:w-8/12">
              {data.properties.blockContent.markup}
            </p>
          </div>
        </div>
        <div className="mt-[5rem] flex flex-col justify-center w-full md:w-8/12">
          <h3 className="font-PerformanceMark text-ColorPrincipal text-[4rem]">
            {data.properties.historySubtitle}
          </h3>
          {data.properties.historySubtitleContent.items.map(
            (sContent: any, index: number) => (
              <React.Fragment key={index}>
                <p className="font-poppins text-[1.2rem] text-justify">
                  {sContent.content.properties.richText.markup}
                </p>
                <p className="font-poppins text-[1.2rem] text-justify">
                  {sContent.content.properties.stringText}
                </p>
              </React.Fragment>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default History;

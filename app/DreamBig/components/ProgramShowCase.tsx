import Image from "next/image";
import React from "react";
import BackGroundShowCase from "./BackGroundShowCase";
import { UmbracoDreamBigData } from "@/types/dream-big";
import Link from "next/link";

interface DreamBigData {
  data: UmbracoDreamBigData;
}

const ProgramShowCase: React.FC<DreamBigData> = ({ data }) => {
  return (
    <div className="relative">
      <BackGroundShowCase backgroundText={data.backgroundText} />
      {/* showCase Content */}
      <div
        className="
      relative 
      z-10 
      flex 
      flex-col
      sm:items-center
      "
      >
        {data.showcasesContent.items.map((item, index) => {
          const {
            companyImage,
            buttonOne,
            colorButtonOne,
            hrefButtonOne,
            buttonTwo,
            colorButtonTwo,
            hrefButtonTwo,
            width,
            height,
            description,
          } = item.content.properties;
          
          // Get URLs from CMS or use fallbacks
          const infoUrl = hrefButtonOne && hrefButtonOne.length > 0 ? hrefButtonOne[0].url : '#';
          const applyUrl = hrefButtonTwo && hrefButtonTwo.length > 0 ? hrefButtonTwo[0].url : '#';
          
          // Get target attributes if they exist
          const infoTarget = hrefButtonOne && hrefButtonOne.length > 0 && hrefButtonOne[0].target ? hrefButtonOne[0].target : undefined;
          const applyTarget = hrefButtonTwo && hrefButtonTwo.length > 0 && hrefButtonTwo[0].target ? hrefButtonTwo[0].target : undefined;
          
          return (
            <div
              key={index}
              className="
              flex
              max-sm:flex-col
              sm:flex-col
              md:flex-col 
              lg:flex-col lg:mx-5
              xl:flex-row
              w-full 
              border-b-2 
              border-black 
              py-5 
              h-auto 
              
              items-center 
              justify-center"
            >
              <div
                className="
                flex
                sm:border-r-0
                max-md:flex-col md:border-r-0 max-md:w-full
                max-lg:flex-col lg:border-r-0 max-lg:w-full
                lg:flex-col lg:w-full lg:items-center
                xl:flex-row
                xl:border-r-2
                xl:w-[60%]
              border-black 
              "
              >
                <div
                  className="
                flex
                sm: mb-5
                max-md:w-full md:mb-0
                max-lg:w-full lg:w-full lg:mb-0
                justify-center 
                items-center 
                w-[79%] 
                h-40 
                bg-white"
                >
                  {companyImage.length > 0 && (
                    <Image
                      src={companyImage[0].url}
                      alt={companyImage[0].name}
                      width={width}
                      height={height}
                    />
                  )}
                </div>

                <div
                  className="
                  flex 
                  max-md:flex-row max-md:w-full max-md:px-0 md:my-5
                  max-lg:flex-row max-lg:w-full max-lg:px-0
                  lg:flex-row lg:w-full lg:px-0
                  xl:flex-col xl:my-0 xl:w-[21%] xl:h-40
                  justify-between 
                  items-center 
                  h-auto 
                  xl:px-5
                "
                >
                  <Link 
                    href={infoUrl} 
                    target={infoTarget}
                    className={`
                    max-sm:w-36 sm:w-36 md:w-[48%] lg:w-[48%] xl:w-36
                    h-16 
                    font-pragmatica 
                    text-white font-bold
                    flex items-center justify-center
                    `}
                    style={{ backgroundColor: `#${colorButtonOne}` }}
                  >
                    <p className="uppercase text-2xl">{buttonOne}</p>
                  </Link>
                  
                  <Link 
                    href={applyUrl} 
                    target={applyTarget}
                    className={`
                    max-sm:w-36 sm:w-36 md:w-[48%] lg:w-[48%] xl:w-36
                    h-16 
                    font-pragmatica 
                    text-white font-bold
                    flex items-center justify-center
                    `}
                    style={{ backgroundColor: `#${colorButtonTwo}` }}
                  >
                    <p className="uppercase text-2xl">{buttonTwo}</p>
                  </Link>
                </div>
              </div>
              <div
                className="
                flex
                max-sm:px-0
                max-sm:w-full
                sm:w-full
                md:w-full max-md:px-0
                lg:w-full max-lg:px-0 lg:px-0
                xl:w-[40%]
                xl:px-5
                sm: mt-5
                md:mt-0
                "
              >
                <h1
                  className="
                  flex 
                  flex-col 
                  font-poppins 
                  text-2xl
                  xl:h-40
                  "
                  dangerouslySetInnerHTML={{ __html: description.markup }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgramShowCase;

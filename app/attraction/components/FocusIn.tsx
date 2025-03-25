import Image from "next/image";
import React from "react";
import { AttractionData } from "@/types/attraction";

interface UmbracoAttractionData {
  data: AttractionData;
}

const FocusIn: React.FC<UmbracoAttractionData> = ({ data }) => {
  return (
    <>
      <div className="flex justify-end">
        <Image
          src="/focusin/lupa.webp"
          alt="Company Logo"
          width={870}
          height={670}
          quality={80}
          loading="lazy"
          className="xl:mb-[20rem] xl-md:mb-[10rem]"
        />
      </div>
      <div className="px-[1rem] md:px-[3rem] xl:px-[5rem] 2xl:px-[14rem] mt-[9rem] md:mt-[9rem] lg:mt-[7rem] xl:mt-[-17rem]">
        <div className="relative">
          <div className="flex items-center relative w-full md:w-[1500px]">
            <Image
              src={
                data.properties.focusCarousel.items[0].content.properties
                  .focusImage[0].url
              }
              alt={
                data.properties.focusCarousel.items[0].content.properties
                  .focusImage[0].name
              }
              width={140}
              height={140}
              quality={80}
              loading="lazy"
              className="absolute top-[-7rem] left-[7rem] sm:left-[9.5rem] md:left-[16.5rem] z-20"
            />
            <div className="flex items-center justify-center bg-ColorPrincipal rounded-l-3xl md:h-[6rem] md:w-[5rem]">
              <p className="text-white font-pragmatica text-[3rem] hidden md:block">
                1
              </p>
            </div>
            <div className="relative bg-white border-[.4rem] border-ColorPrincipal w-full md:w-4/12 rounded-3xl uppercase z-10">
              <div className="bg-ColorPrincipal px-[1rem] py-[1.5rem] text-center rounded-2xl">
                <h2 className="main-Tipography text-white text-[2rem] leading-8">
                  {
                    data.properties.focusCarousel.items[0].content.properties
                      .focusTitle
                  }
                </h2>
              </div>
              <div className="px-[3rem] py-[1rem]">
                <ul className="list-disc text-[1.2rem]">
                  {data.properties.focusCarousel.items[0].content.properties.focusContent.map(
                    (item: string, idx: number) => (
                      <li key={idx}>{item}</li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
          <Image
            src="/miniHoja.webp"
            alt="Company Logo"
            width={190}
            height={190}
            quality={80}
            loading="lazy"
            className="absolute bottom-[-5rem] left-[28rem] z-0"
          />
        </div>
        <div className="flex justify-end mt-[9rem] md:mt-[10rem] lg:mt-[5rem] w-full">
          <div className="flex items-center relative w-[470px]">
            <Image
              src={
                data.properties.focusCarousel.items[1].content.properties
                  .focusImage[0].url
              }
              alt={
                data.properties.focusCarousel.items[1].content.properties
                  .focusImage[0].name
              }
              width={140}
              height={140}
              quality={80}
              loading="lazy"
              className="absolute top-[-7rem] left-[7rem] sm:left-[9.5rem] md:left-[12rem] z-20"
            />
            <div className="flex items-center justify-center bg-ColorPrincipal rounded-l-3xl md:h-[6rem] md:w-[5rem] z-10">
              <p className="text-white font-pragmatica text-[3rem] hidden md:block">
                2
              </p>
            </div>
            <div className="relative bg-white border-[.4rem] border-ColorPrincipal rounded-3xl uppercase z-10">
              <div className="bg-ColorPrincipal px-[1.5rem] py-[1.5rem] text-center rounded-2xl">
                <h2 className="main-Tipography text-white text-[2rem] leading-8">
                  {
                    data.properties.focusCarousel.items[1].content.properties
                      .focusTitle
                  }
                </h2>
              </div>
              <div className="px-[3rem] py-[1rem]">
                <ul className="list-disc text-[1.2rem]">
                  {data.properties.focusCarousel.items[1].content.properties.focusContent.map(
                    (item: string, idx: number) => (
                      <li key={idx}>{item}</li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="flex items-center relative w-full md:w-[1500px] mt-[9rem] md:mt-[9rem] lg:mt-[5rem] xl:mt-0">
            <Image
              src={
                data.properties.focusCarousel.items[2].content.properties
                  .focusImage[0].url
              }
              alt={
                data.properties.focusCarousel.items[2].content.properties
                  .focusImage[0].name
              }
              width={140}
              height={140}
              quality={80}
              loading="lazy"
              className="absolute top-[-7rem] left-[7rem] sm:left-[9.5rem] md:left-[16.5rem] z-20"
            />
            <div className="flex items-center justify-center bg-ColorPrincipal rounded-l-3xl uppercase md:h-[6rem] md:w-[5rem] z-10">
              <p className="text-white font-pragmatica text-[3rem] hidden md:block">
                3
              </p>
            </div>
            <div className="relative bg-white border-[.4rem] border-ColorPrincipal w-full md:w-4/12 rounded-3xl uppercase z-10">
              <div className="bg-ColorPrincipal px-[4rem] py-[1.5rem] text-center rounded-2xl">
                <h2 className="main-Tipography text-white text-[2rem] leading-8">
                  {
                    data.properties.focusCarousel.items[2].content.properties
                      .focusTitle
                  }
                </h2>
              </div>
              <div className="px-[3rem] py-[1rem]">
                <ul className="list-disc text-[1.2rem]">
                  {data.properties.focusCarousel.items[2].content.properties.focusContent.map(
                    (item: string, idx: number) => (
                      <li key={idx}>{item}</li>
                    )
                  )}
                </ul>
              </div>
              <div>
                <Image
                  src="/cinta.webp"
                  alt="Company Logo"
                  width={340}
                  height={140}
                  quality={80}
                  loading="lazy"
                  className="absolute bottom-[-8rem] left-[19rem]"
                />
              </div>
            </div>
          </div>
          <div className="absolute text-white font-PerformanceMark text-[12rem] leading-[11rem] top-[-10rem] left-[-20rem] z-0">
            <p>main focus in</p>
            <p>main focus in</p>
            <p>main focus in</p>
          </div>
        </div>
        <div className="flex justify-end mt-[9rem] md:mt-[9rem] lg:mt-[5rem] w-full">
          <div className="flex items-center relative w-[470px]">
            <Image
              src={
                data.properties.focusCarousel.items[3].content.properties
                  .focusImage[0].url
              }
              alt={
                data.properties.focusCarousel.items[3].content.properties
                  .focusImage[0].name
              }
              width={140}
              height={140}
              quality={80}
              loading="lazy"
              className="absolute top-[-7rem] left-[7rem] sm:left-[9.5rem] md:left-[12rem]"
            />
            <div className="flex items-center justify-center bg-ColorPrincipal rounded-l-3xl uppercase md:h-[6rem] md:w-[6rem]">
              <p className="text-white font-pragmatica text-[3rem] hidden md:block">
                4
              </p>
            </div>
            <div className="bg-white border-[.4rem] border-ColorPrincipal rounded-3xl uppercase">
              <div className="bg-ColorPrincipal px-[1rem] py-[1.5rem] text-center rounded-2xl">
                <h2 className="main-Tipography text-white text-[2rem] leading-8">
                  {
                    data.properties.focusCarousel.items[3].content.properties
                      .focusTitle
                  }
                </h2>
              </div>
              <div className="px-[3rem] py-[1rem]">
                <ul className="list-disc text-[1.2rem]">
                  {data.properties.focusCarousel.items[3].content.properties.focusContent.map(
                    (item: string, idx: number) => (
                      <li key={idx}>{item}</li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="flex items-center relative w-full md:w-[1500px] mt-[9rem] md:mt-[9rem] lg:mt-[5rem] xl:mt-0">
            <Image
              src={
                data.properties.focusCarousel.items[4].content.properties
                  .focusImage[0].url
              }
              alt={
                data.properties.focusCarousel.items[4].content.properties
                  .focusImage[0].name
              }
              width={140}
              height={140}
              quality={80}
              loading="lazy"
              className="absolute top-[-7rem] left-[7rem] sm:left-[9.5rem] md:left-[16.5rem] z-20"
            />
            <div className="flex items-center justify-center bg-ColorPrincipal rounded-l-3xl uppercase md:h-[6rem] md:w-[5rem] z-10">
              <p className="text-white font-pragmatica text-[3rem] hidden md:block">
                5
              </p>
            </div>
            <div className="relative bg-white border-[.4rem] border-ColorPrincipal w-full md:w-4/12 rounded-3xl uppercase z-10">
              <div className="bg-ColorPrincipal px-[3rem] py-[1.5rem] text-center rounded-2xl">
                <h2 className="main-Tipography text-white text-[2rem] leading-8">
                  {
                    data.properties.focusCarousel.items[4].content.properties
                      .focusTitle
                  }
                </h2>
              </div>
              <div className="px-[3rem] py-[1rem]">
                <ul className="list-disc text-[1.2rem]">
                  {data.properties.focusCarousel.items[4].content.properties.focusContent.map(
                    (item: string, idx: number) => (
                      <li key={idx}>{item}</li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
          <Image
            src="/miniHoja.webp"
            alt="Company Logo"
            width={190}
            height={190}
            quality={80}
            loading="lazy"
            className="absolute bottom-[-5rem] left-[3rem] z-0"
          />
        </div>
        <div className="relative">
          <Image
            src="/Burbujas.webp"
            alt="Company Logo"
            width={640}
            height={640}
            quality={80}
            loading="lazy"
            className="absolute bottom-[-35rem] right-[18rem] z-10"
          />
        </div>
        <div className="flex justify-end mt-[9rem] md:mt-[9rem] lg:mt-[5rem] w-full">
          <div className=" flex items-center relative w-[470px]">
            <Image
              src={
                data.properties.focusCarousel.items[5].content.properties
                  .focusImage[0].url
              }
              alt={
                data.properties.focusCarousel.items[5].content.properties
                  .focusImage[0].name
              }
              width={140}
              height={140}
              quality={80}
              loading="lazy"
              className="absolute top-[-7rem] left-[7rem] sm:left-[9.5rem] md:left-[12rem]"
            />
            <div className="flex items-center justify-center bg-ColorPrincipal rounded-l-3xl uppercase md:h-[6rem] md:w-[5rem]">
              <p className="text-white font-pragmatica text-[3rem] hidden md:block">
                6
              </p>
            </div>
            <div className=" bg-white border-[.4rem] border-ColorPrincipal rounded-3xl uppercase">
              <div className="bg-ColorPrincipal px-[.6rem] py-[1.5rem] text-center rounded-2xl">
                <h2 className="main-Tipography text-white text-[2rem] leading-8">
                  {
                    data.properties.focusCarousel.items[5].content.properties
                      .focusTitle
                  }
                </h2>
              </div>
              <div className="px-[3rem] py-[1rem]">
                <ul className="list-disc text-[1.2rem]">
                  {data.properties.focusCarousel.items[5].content.properties.focusContent.map(
                    (item: string, idx: number) => (
                      <li key={idx}>{item}</li>
                    )
                  )}
                </ul>
              </div>
              <div>
                <Image
                  src="/cinta.webp"
                  alt="Company Logo"
                  width={340}
                  height={140}
                  quality={80}
                  loading="lazy"
                  className="absolute bottom-[-8rem] right-[-9rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FocusIn;

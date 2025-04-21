import React from "react";
import Image from "next/image";
import { UmbracoDreamBigData } from "@/types/dream-big";
import clsx from "clsx";

interface DreamBigDataProps {
  data: UmbracoDreamBigData;
  locale: string;
}

const Banner: React.FC<DreamBigDataProps> = ({ data, locale }) => {
  const isSpanish = locale.includes("es") || locale === "es-mx";

  return (
    <>
      <div
        className={clsx(
          "flex w-full relative",
          "flex-col",
          "lg:top-32",
          "xl:flex-row xl:items-start",
          isSpanish && "xl:gap-4"
        )}
      >
        {/* --- Image Container --- */}
        <div
          className={clsx(
            "flex",
            "sm:justify-center",
            "lg:w-full lg:justify-center",
            isSpanish ? "xl:flex-shrink xl:min-w-[40%]" : "xl:w-auto"
          )}
        >
          <div
            className={clsx(
              "flex justify-center",
              "max-sm:w-full max-sm:h-auto",
              "sm:w-full",
              "md:w-[80%] lg:justify-center",
              "lg:w-full",
              "xl:w-full",
              "xl:relative xl:bottom-24"
            )}
          >
            <Image
              src={data.bannerImage[0].url}
              alt={data.bannerImage[0].name}
              width={562}
              height={390}
              className="
                w-full
                h-auto
                object-contain
                animate-slide-left
              "
              quality={80}
              priority
              loading="eager"
            />
          </div>
        </div>

        {/* --- Text Container --- */}
        <div
          className={clsx(
            "relative w-full",
            "mt-10 md:top-10",
            "sm:w-full",
            "xl:mt-0",
            isSpanish && "xl:flex-grow"
          )}
        >
          {/* Top Text Block (Titles) */}
          <div className="flex flex-col w-full mb-10 text-left md:text-left">
            {/* Principal Title 1 */}
            <h2
              className={clsx(
                "text-ColorPrincipal font-PerformanceMark",
                isSpanish
                  ? "max-sm:text-[4.5rem] max-sm:leading-[2.8rem] max-sm:mb-3"
                  : "max-sm:text-[6rem] max-sm:leading-[3.5rem] max-sm:mb-6",
                "sm:text-[7rem]",
                "md:text-[9rem] max-md:leading-[6rem] max-md:mb-10",
                "lg:text-[10rem] max-lg:leading-[8rem] max-lg:mb-12",
                !isSpanish && "xl:text-[16rem] lg:leading-[8rem] lg:mb-20",
                isSpanish && "xl:text-[11rem] xl:leading-[1]"
              )}
            >
              {data.principalTitle}
            </h2>

            {/* Container for Second Title and Subtitle */}
            <div className="flex flex-row text-ColorPrincipal items-baseline">
              {/* Principal Title 2 */}
              <h2
                className={clsx(
                  "font-PerformanceMark w-[50%] h-auto",
                  isSpanish
                    ? "max-sm:text-[5rem] max-sm:leading-[2.6rem] max-sm:mb-3"
                    : "max-sm:text-[6.5rem] max-sm:leading-[3rem] max-sm:mb-5",
                  "sm:text-[8rem]",
                  "md:text-[9rem] max-md:leading-[5rem] max-md:mb-8",
                  "lg:text-[10rem] max-lg:leading-[7rem] max-lg:mb-10",
                  "max-xl:text-[11rem] max-xl:leading-[6rem] max-xl:mb-8",
                  !isSpanish && "xl:text-[16rem] leading-[8rem]",
                  isSpanish && "xl:text-[11rem] xl:leading-[1]"
                )}
              >
                {data.principalTitleTwo}
              </h2>
              {/* Subtitle 1 */}
              <h2
                className={clsx(
                  "font-PerformanceMark w-[50%] h-auto text-end",
                  "max-sm:text-[1.5rem] max-sm:leading-[2rem]",
                  "sm:text-[1.5rem] sm:leading-[2rem]",
                  "md:text-[2.5rem] md:leading-[5rem]",
                  "lg:text-[3rem] lg:leading-[6rem]",
                  !isSpanish &&
                    "xl:text-[3rem] 2xl:text-[3.5rem] leading-[8rem]",
                  isSpanish &&
                    "xl:text-[2.2rem] xl:leading-[1.1] relative top-16"
                )}
              >
                {data.subtitleOne}
              </h2>
            </div>
          </div>

          {/* Bottom Text Block (Subtitles 2 & 3) */}
          <div
            className="
              flex flex-col w-full text-left
              mt-10 max-sm:mt-5 sm:mt-8 md:mt-12
              xl:mt-12
            "
          >
            {/* Subtitle 2 */}
            <h2
              className={clsx(
                "text-ColorPrincipal font-pragmatica w-full",
                "max-sm:text-[2rem] max-sm:leading-[2rem]",
                "sm:text-[2rem]",
                "md:text-[3rem] max-md:leading-[3rem]",
                "lg:text-[5rem] max-lg:leading-[4rem]",
                "text-7xl",
                isSpanish && "break-words"
              )}
            >
              {data.subtitleTwo}
            </h2>
            {/* Subtitle 3 */}
            <h2
              className={clsx(
                "font-bold text-ColorPrincipal font-pragmatica w-full",
                "max-sm:text-[2rem] max-sm:leading-[2rem]",
                "sm:text-[2rem]",
                "md:text-[3rem] max-md:leading-[3rem]",
                "lg:text-[5rem] max-lg:leading-[4rem]",
                "text-7xl",
                isSpanish && "break-words"
              )}
            >
              {data.subtitleThree}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;

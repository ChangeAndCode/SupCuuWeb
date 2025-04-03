import Image from "next/image";
import BtnCT from "@components/btnct/BtnCT";
import WhoIs from "./components/WhoIs";
import NextBest from "./components/NextBest";
import FocusIn from "./components/FocusIn";
import InnovationEngine from "./components/InnovationEngine";
import Team from "./components/Team";
import Always from "./components/Always";
import History from "./components/History";
import Supports from "./components/Supports";
import Provides from "./components/Provides";
import Together from "./components/Together";
import CarouselDoors from "./components/CarouselDoors";
import Possible from "./components/Possible";
import World from "./components/World";
import Form from "../form/page";
import BtnFAQ from "@components/btnct/btnFAQ";
import { getAttractionData } from "@/lib/attraction/attractionDataService";
import React, { Suspense } from "react";
import { getLocale } from "@/lib/Localization";
export const dynamic = "force-dynamic";
export const revalidate = 10;

const Loading = () => (
  <div className="flex justify-center items-center h-screen">
    <p className="text-lg font-bold">Cargando...</p>
  </div>
);

export default async function page() {
  const locale = await getLocale();
  const attractionData = await getAttractionData(locale);
  return (
    <div className="overflow-hidden">
      <div className="flex flex-col-reverse xl:flex-row items-center justify-center py-[8rem] md:py-[10rem] xl:py-[8rem] 2xl:py-[6rem] px-[3rem]">
        <div className="w-full 2xl:w-6/12">
          <h2 className="font-PerformanceMark text-ColorPrincipal uppercase text-[1.3rem] sm:text-[2.5rem] md:text-[4rem] xl:text-[4rem] 2xl:text-[4.5rem] md:leading-[5rem]">
            {attractionData.properties.heroTitle}
          </h2>
          <h3 className="font-pragmatica main-Tipography main-Tipography text-ColorPrincipal uppercase text-[1rem] sm:text-[1.4rem] md:text-[2.4rem] lg:text-[3rem] xl:text-[2.5rem] 2xl:text-[2.5rem] md:leading-[4rem] mt-[1rem]">
            {attractionData.properties.heroSubtitle}
          </h3>
          <div className="flex flex-col md:flex-row items-center w-full justify-between md:pr-[2.5rem] mt-[4rem] gap-4">
            <BtnCT
              Text={attractionData.properties.heroButton}
              href={attractionData.properties.heroButtonUrl?.[0]?.url || "#"}
            />
            <a
              href={
                attractionData.properties.heroButtonExplorer?.[0]?.url || "#"
              }
              rel="noopener noreferrer"
              className="relative main-Tipography text-[.8rem] sm:text-[1.3rem] lg:text-[1.5rem] uppercase font-pragmatica rounded-full flex justify-center items-center bg-ColorPrincipal text-white w-full md:w-auto py-[.7rem] md:px-[3rem]"
            >
              {attractionData.properties.heroButtonExplorer?.[0]?.title}
            </a>
          </div>
        </div>
        <div>
          <Image
            src="/tele.webp"
            alt="Company Logo"
            width={770}
            height={670}
            quality={80}
            priority
            loading="eager"
            placeholder="blur"
            blurDataURL="/tele.webp"
          />
        </div>
      </div>
      <div className="relative bg-landing bg-no-repeat bg-center bg-[length:120vw_100%]">
        <Suspense fallback={<Loading />}>
          <WhoIs data={attractionData} />
        </Suspense>

        <div className="flex justify-center absolute bottom-[-2rem] xl:bottom-0 right-0 left-0">
          <Image
            src="/titelLogo.webp"
            alt="Company Logo"
            width={670}
            height={570}
            quality={80}
            loading="lazy"
          />
        </div>
      </div>
      <div id="next-best">
        <Suspense fallback={<Loading />}>
          <NextBest data={attractionData} />
        </Suspense>
      </div>
      <div className="bg-[#c4cfd6] pb-[10rem]">
        <Suspense fallback={<Loading />}>
          <FocusIn data={attractionData} />
        </Suspense>
      </div>
      <div className="pt-[5rem] md:pt-0">
        <Suspense fallback={<Loading />}>
          <InnovationEngine data={attractionData} />
        </Suspense>
      </div>
      <div className="bg-[url('/Bg/bgHoja.webp')] bg-no-repeat bg-center bg-cover pt-[15rem] pb-[16rem] mt-[-6rem] md:mt-[-3rem] xl:mt-0 relative z-10 pointer-events-none">
        <Suspense fallback={<Loading />}>
          <Team data={attractionData} />
        </Suspense>
      </div>
      <div className="bg-ColorPrincipal mt-[-14rem] md:mt-[-9rem] lg:mt-[-8rem] xl:mt-[-12rem] relative z-[1]">
        <Suspense fallback={<Loading />}>
          <Always data={attractionData} />
        </Suspense>
      </div>
      <div className="bg-history bg-no-repeat bg-center bg-cover pt-[52rem] sm:pt-[43rem] md:pt-[48rem] lg:pt-[46rem] xl:pt-[28rem] 2xl:pt-[26rem] pb-[55rem] sm:pb-[46rem] md:pb-[50rem] xl:pb-[35rem] mt-[-48rem] sm:mt-[-45rem] lg:mt-[-43rem] xl:mt-[-28rem] relative z-10 pointer-events-none">
        <Suspense fallback={<Loading />}>
          <History data={attractionData} />
        </Suspense>
      </div>
      <div className="pb-[5rem] mt-[-33rem] sm:mt-[-29rem] md:mt-[-25rem] xl:mt-[-8rem] 2xl:mt-[-6rem]">
        <Suspense fallback={<Loading />}>
          <Supports data={attractionData} />
        </Suspense>
      </div>
      <div className="pb-[5rem]">
        <Suspense fallback={<Loading />}>
          <Provides data={attractionData} />
        </Suspense>
      </div>
      <div className="bg-[#E9EBED] pt-[8rem] pb-[20rem]">
        <Suspense fallback={<Loading />}>
          <Together data={attractionData} />
        </Suspense>
      </div>
      <div className="bg-landing bg-no-repeat bg-center bg-[length:120vw_100%] mt-[-12rem]">
        <Suspense fallback={<Loading />}>
          <CarouselDoors data={attractionData} />
        </Suspense>
      </div>
      <div className="pb-[5rem]">
        <Suspense fallback={<Loading />}>
          <Possible data={attractionData} />
        </Suspense>
      </div>
      <div>
        <Suspense fallback={<Loading />}>
          <World data={attractionData} />
        </Suspense>
      </div>
      <Suspense fallback={<Loading />}>
        <Form />
      </Suspense>
      <div className="fixed bottom-8 right-8 z-50">
        <Suspense fallback={<Loading />}>
          <BtnFAQ pdfUrl="/FAQ.pdf" buttonText="FAQ" />
        </Suspense>
      </div>
    </div>
  );
}

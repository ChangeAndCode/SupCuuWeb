import React, { Suspense } from "react";
import Banner from "./components/Banner";
import ProgramShowCase from "./components/ProgramShowCase";
import CarouselEventsContainer from "@components/CarouselEvents/CarouselEventsContainer";
import Form from "../form/page";
import { getDreamBigData } from "@/lib/dream-big/umbracoDreamBigDataService";
import { getLocale } from "@/lib/Localization";

// Suspense Fallback Component
const Loading = () => (
  <div className="flex justify-center items-center h-screen">
    <p className="text-lg font-bold">Cargando...</p>
  </div>
);
export const dynamic = "force-dynamic";
export const revalidate = 10;

export default async function Page() {
  const locale = await getLocale();
  const dreamBigData = await getDreamBigData(locale);
  return (
    <>
      <div
        className="
        max-sm:py-20 sm:py-20 md:py-24 lg:py-10
        max-sm:px-10 sm:px-10 md:px-20 lg:px-28 
        bg-[#EDEFF0]"
      >
        {/* Main page content */}
        <div className="max-w-[1500px] mx-auto md:mb-20 lg:mb-52 xl:mb-40 2xl:mb-24">
          <Suspense fallback={<Loading />}>
            <Banner locale={locale} data={dreamBigData} />
          </Suspense>
        </div>
        <div className="max-w-[1500px] mx-auto">
          <Suspense fallback={<Loading />}>
            <ProgramShowCase data={dreamBigData} />
          </Suspense>
        </div>
        <div className="max-w-[1500px] mx-auto">
          <Suspense fallback={<Loading />}>
            <CarouselEventsContainer />
          </Suspense>
        </div>
      </div>
      <Form />
    </>
  );
}

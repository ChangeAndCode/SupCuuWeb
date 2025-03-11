import React from "react";
import Banner from "./components/Banner";
import ProgramShowCase from "./components/ProgramShowCase";
import CarouselEventsContainer from "@components/CarouselEvents/CarouselEventsContainer";
import Form from "../form/page";
import { getDreamBigData } from "@/lib/dream-big/umbracoDreamBigDataService";

export default async function Page() {
  const dreamBigData = await getDreamBigData();
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
          <Banner data={dreamBigData} />
        </div>
        <div className="max-w-[1500px] mx-auto">
          <ProgramShowCase data={dreamBigData} />
        </div>
        <div className="max-w-[1500px] mx-auto">
          <CarouselEventsContainer />
        </div>
      </div>
      <Form />
    </>
  );
}

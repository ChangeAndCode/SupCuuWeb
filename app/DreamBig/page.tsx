import React from "react";
import Banner from "./components/Banner";
import ProgramShowCase from "./components/ProgramShowCase";
import CarouselEvents from "./components/CarouselEvents";
import Form from "../form/page";

const Page = () => {
  return (
    <>
      <div
        className="
        max-sm:py-20 sm:py-20 md:py-24 lg:py-10
        max-sm:px-10 sm:px-10 md:px-20 lg:px-28 
        bg-[#EDEFF0]"
      >
        {/* Contenido principal de la página */}
        <div className="max-w-[1500px] mx-auto md:mb-20 lg:mb-52 xl:mb-40 2xl:mb-24">
          <Banner />
        </div>
        <div className="max-w-[1500px] mx-auto">
          <ProgramShowCase />
        </div>
        <div className="max-w-[1500px] mx-auto">
          <CarouselEvents />
        </div>
      </div>
      <Form />
    </>
  );
};

export default Page;

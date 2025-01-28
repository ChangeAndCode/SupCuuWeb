import React from "react";

import Banner from "./components/Banner";
import ProgramShowCase from "./components/ProgramShowCase";
import CarouselEvents from "./components/CarouselEvents";

import Form from "../form/page";

const pageEvents = () => {
  return (
    <>
      <div
        className="
        max-sm:py-20 max-md:py-24 max-lg:py-36 max-xl:py-20 max-2xl:py-24 
        max-sm:px-10 max-md:px-20 max-lg:px-28 max-xl:px-16 max-2xl:px-20 
        bg-[#EDEFF0]"
      >
        <div className="max-w-[1500px] mx-auto">
          {/* <Banner /> */}
          {/* <ProgramShowCase /> */}
          <CarouselEvents />
        </div>
      </div>
      <Form />
    </>
  );
};

export default pageEvents;

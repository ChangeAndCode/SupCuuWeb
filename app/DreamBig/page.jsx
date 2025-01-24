import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { useState, useEffect, useRef } from "react";

import Banner from "./components/Banner";
import ProgramShowCase from "./components/ProgramShowCase";
import CarouselEvents from "./components/CarouselEvents";

import Form from "../form/page";

const pageEvents = () => {
  return (
    <>
      <div
        className="
        max-sm:py-20 sm:py-20 md:py-24 lg:py-36
        max-sm:px-10 sm:px-10 md:px-20 lg:px-28 
        bg-[#EDEFF0]"
      >
        <div className="max-w-[1500px] mx-auto lg:mb-52">
          <Banner />
        </div>
        <div className="max-w-[1500px] mx-auto">
          <ProgramShowCase />
        </div>
        <div className="max-w-[1500px] mx-auto">{/* <CarouselEvents /> */}</div>
      </div>
      <Form />
    </>
  );
};

export default pageEvents;

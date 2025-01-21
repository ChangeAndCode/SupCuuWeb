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
    <div className="py-[10rem] px-[7rem] bg-[#EDEFF0]">
      <div className="max-w-[1500px] mx-auto">
        <Banner />
        <ProgramShowCase />
        <CarouselEvents />
        <Form />
      </div>
    </div>
  );
};

export default pageEvents;

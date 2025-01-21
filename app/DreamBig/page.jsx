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
    <div className="py-[10rem] px-[7rem]">
      <Banner />
      <ProgramShowCase />
      {/* <CarouselEvents />
      <Form /> */}
    </div>
  );
};

export default pageEvents;

import React from "react";
import Image from "next/image";
// import Link from "next/link";
// import { useState, useEffect, useRef } from "react";

const CarouselEvents = () => {
  return (
    <div className="flex flex-col">
      <div className="relative flex flex-col items-center">
        <Image
          src={"/dreamBig/background_title.png"}
          alt={"events & opportunities"}
          width={946}
          height={410}
        />
        <h1 className=" relative bottom-[200px] uppercase text-5xl text-white font-pragmatica font-bold text-center">
          Events & opportunities
        </h1>
      </div>
      <div>
        <h1>carrusel</h1>
      </div>
    </div>
  );
};

export default CarouselEvents;

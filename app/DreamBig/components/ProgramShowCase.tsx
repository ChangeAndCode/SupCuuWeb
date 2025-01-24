import Image from "next/image";
import React from "react";
import ProgramShowCaseData from "../data/ProgramShowCaseData";
// import Link from "next/link";
// import { useState, useEffect, useRef } from "react";

const ProgramShowCase = () => {
  return (
    <div className="relative">
      {/* <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none opacity-10">
        <div className="absolute text-[180px] font-bold text-black font-PerformanceMark left-[-100px] top-[-100px]">
          innovation labs
        </div>
        <div className="absolute text-[186px] font-bold text-black font-PerformanceMark left-[-400px] top-[30px]">
          innovation labs
        </div>
        <div className="absolute text-[186px] font-bold text-black font-PerformanceMark left-[-200px] top-[160px]">
          innovation labs
        </div>
        <div className="absolute text-[186px] font-bold text-black font-PerformanceMark left-[-500px] top-[290px]">
          innovation labs
        </div>
        <div className="absolute text-[186px] font-bold text-black font-PerformanceMark left-[-300px] top-[420px]">
          innovation labs
        </div>
        <div className="absolute text-[186px] font-bold text-black font-PerformanceMark left-[-700px] top-[550px]">
          innovation labs
        </div>
        <div className="absolute text-[186px] font-bold text-black font-PerformanceMark left-[-400px] top-[680px]">
          innovation labs
        </div>
      </div> */}
      <div
        className="
      relative 
      z-10 
      flex 
      flex-col 
      max-md:items-center 
      max-lg:items-center"
      >
        {ProgramShowCaseData.map((program, index) => {
          const {
            imageSrc,
            imageAlt,
            button1Text,
            button2Text,
            color1Text,
            color2Text,
            description,
            width,
            height,
          } = program;
          return (
            <div
              key={index}
              className="
              flex
              max-md:flex-col 
              max-lg:flex-col lg:mx-5 
              w-full 
              border-b-2 
              border-black 
              py-5 
              h-auto 
              
              items-center 
              justify-center"
            >
              <div
                className="
                flex
                max-md:flex-col max-md:border-r-0 max-md:w-full
                max-lg:flex-col max-lg:border-r-0 max-lg:w-full
                xl:w-[60%]
              border-black 
                border-r-2
              "
              >
                <div
                  className="
                flex
                sm: mb-5
                max-md:w-full md:mb-0
                max-lg:w-full lg:mb-0
                justify-center 
                items-center 
                w-[79%] 
                h-40 
                bg-white"
                >
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={width}
                    height={height}
                  />
                </div>

                <div
                  className="
                  flex 
                  flex-col
                  max-md:flex-row max-md:w-full max-md:px-0
                  max-lg:flex-row max-lg:w-full max-lg:px-0
                  justify-between 
                  items-center 
                  w-[21%] 
                  h-auto 
                  px-5
                "
                >
                  <button
                    type="button"
                    style={{ backgroundColor: color1Text }}
                    className={`w-36 h-16 font-pragmatica text-white font-bold`}
                  >
                    <p className="uppercase text-2xl">{button1Text}</p>
                  </button>
                  <button
                    type="button"
                    style={{ backgroundColor: color2Text }}
                    className={`w-36 h-16 font-pragmatica text-white font-bold`}
                  >
                    <p className="uppercase text-2xl">{button2Text}</p>
                  </button>
                </div>
              </div>
              <div
                className="
                flex
                max-sm:px-0
                max-md:w-full max-md:px-0
                max-lg:w-full max-lg:px-0
                w-[40%]
                px-5
                sm: mt-5
                md:mt-0
                "
              >
                <h1
                  className="
                  flex 
                  flex-col 
                  font-poppins 
                  text-2xl"
                >
                  <span>{description}</span>
                </h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgramShowCase;

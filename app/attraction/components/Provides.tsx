"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { AttractionData } from "@/types/attraction";

interface UmbracoAttractionData {
  data: AttractionData;
}

const Provides: React.FC<UmbracoAttractionData> = ({ data }) => {
  const [openSections, setOpenSections] = useState({ startup: false });

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <>
      <h2 className="font-PerformanceMark text-ColorPrincipal text-center text-[1.7rem] md:text-[3rem] lg:text-[3.7rem] xl:text-[5rem] 2xl:text-[6rem]">
        {data.properties.provideTitle}
      </h2>

      <h3 className="font-pragmatica main-Tipography text-ColorPrincipal text-center text-[.9rem] md:text-[1.5rem] lg:text-[1.9rem] xl:text-[2.5rem] 2xl:text-[3rem]">
        {data.properties.provideSubtitle}
      </h3>

      <div className="flex flex-col xl:flex-row justify-center items-center">
        <div className="w-11/12 md:w-8/12 xl:w-4/12">
          {data.properties.provideContent.items.map((item, index) => (
            <div className="flex items-start mb-10" key={index}>
              <Image
                src={
                  data.properties.provideCheckIcon[index]?.url || "/check.webp"
                }
                alt={
                  data.properties.provideCheckIcon[index]?.name || "check icon"
                }
                width={40}
                height={40}
                quality={80}
                loading="lazy"
                className="min-w-[40px] mt-1"
              />
              <p className="font-poppins font-semibold text-[1.3rem] flex pt-5">
                {item.content.properties.stringText}
              </p>
            </div>
          ))}
        </div>

        <Image
          src="/mano.webp"
          alt="Company Logo"
          width={700}
          height={600}
          quality={80}
          loading="lazy"
        />
      </div>

      <div className="flex justify-center mt-[5rem]">
        <div className="w-11/12">
          <button
            onClick={() => toggleSection("startup")}
            className="w-full bg-[#f0f0f0] text-ColorPrincipal font-pragmatica text-[1.5rem] py-2 px-6 flex justify-between items-center rounded-2xl uppercase"
          >
            <span>{data.properties.provideSpanDropdown}</span>
            {openSections.startup ? (
              <IoIosArrowUp size={20} />
            ) : (
              <IoIosArrowDown size={20} />
            )}
          </button>
          {openSections.startup && (
            <p className="font-poppins mt-2 p-4 text-[1.2rem] px-[2rem] text-justify">
              {data.properties.provideSpanContent.markup}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Provides;

"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { AttractionData } from "@/types/attraction";

interface UmbracoAttractionData {
  data: AttractionData;
}

const Supports: React.FC<UmbracoAttractionData> = ({ data }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const supports = data.properties.supportElements.items;

  return (
    <>
      <h2 className="font-PerformanceMark text-[4rem] text-ColorPrincipal text-center">
        {data.properties.supportTitle}
      </h2>

      <div className="space-y-2 w-11/12 mx-auto mt-8">
        {supports.map((supportItem: any, index: number) => {
          const { supTitle, supContent, supImage } =
            supportItem.content.properties;

          return (
            <div key={index}>
              <button
                onClick={() => toggleSection(index)}
                className="w-full bg-[#f0f0f0] text-ColorPrincipal font-pragmatica text-[1.5rem] py-2 px-6 flex justify-between items-center rounded-2xl uppercase"
              >
                <span>{supTitle}</span>
                {openIndex === index ? (
                  <IoIosArrowUp size={20} />
                ) : (
                  <IoIosArrowDown size={20} />
                )}
              </button>

              {openIndex === index && (
                <div className="p-4 text-[1.2rem] px-[2rem] text-justify">
                  <p className="font-poppins mb-4">{supContent.markup}</p>
                  {supImage && supImage.length > 0 && (
                    <div className="flex flex-wrap gap-4 mt-2">
                      {supImage.map((img: any, i: number) => (
                        <Image
                          key={i}
                          src={img.url}
                          alt={img.name}
                          width={500}
                          height={300}
                          className="rounded-xl"
                        />
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Supports;

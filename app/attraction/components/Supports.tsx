"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { AttractionData } from "@/types/attraction";

interface UmbracoAttractionData {
  data: AttractionData;
}

const Supports: React.FC<UmbracoAttractionData> = ({ data }) => {
  const [openSections, setOpenSections] = useState({
    universities: false,
    players: false,
    location: false,
    industry: false,
    economy: false,
    quality: false,
    exportation: false,
  });

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <>
      <h2 className="font-PerformanceMark text-[4rem] text-ColorPrincipal text-center">
        how chihuahua supports
      </h2>

      <div className="space-y-2 w-11/12 mx-auto mt-8">
        <div>
          <button
            onClick={() => toggleSection("universities")}
            className="w-full bg-[#f0f0f0] text-ColorPrincipal font-pragmatica text-[1.5rem] py-2 px-6 flex justify-between items-center rounded-2xl uppercase"
          >
            <span>University Partnerships</span>
            {openSections.universities ? (
              <IoIosArrowUp size={20} />
            ) : (
              <IoIosArrowDown size={20} />
            )}
          </button>
          {openSections.universities && (
            <p className="font-poppins mt-2 p-4 text-[1.2rem] px-[2rem] text-justify">
              The large university in Chihuahua City, Universidad Autónoma de
              Chihuahua, is one of many in the state. With the addition of
              technical schools and training centers, the area can boast a
              young, highly skilled, bilingual labor force. The city now has
              over 15 higher education and workforce development initiatives,
              which will allow companies to continue to partner with higher
              education for both internships and collaborations.
            </p>
          )}
        </div>

        <div>
          <button
            onClick={() => toggleSection("players")}
            className="w-full bg-[#f0f0f0] text-ColorPrincipal font-pragmatica text-[1.5rem] py-2 px-6 flex justify-between items-center rounded-2xl uppercase"
          >
            <span>Key players in the ecosystem:</span>
            {openSections.players ? (
              <IoIosArrowUp size={20} />
            ) : (
              <IoIosArrowDown size={20} />
            )}
          </button>
          {openSections.players && (
            <Image
              src="/tabla2.webp"
              alt="Company Logo"
              width={1900}
              height={570}
              quality={80}
              loading="lazy"
            />
          )}
        </div>

        <div>
          <button
            onClick={() => toggleSection("location")}
            className="w-full bg-[#f0f0f0] text-ColorPrincipal font-pragmatica text-[1.5rem] py-2 px-6 flex justify-between items-center rounded-2xl uppercase"
          >
            <span>Prime Location for Travel and Transport</span>
            {openSections.location ? (
              <IoIosArrowUp size={20} />
            ) : (
              <IoIosArrowDown size={20} />
            )}
          </button>
          {openSections.location && (
            <p className="font-poppins mt-2 p-4 text-[1.2rem] px-[2rem] text-justify">
              Due to the proximity to the U.S., Chihuahua will continue to gain
              new opportunities. The state of Chihuahua is also neighbored by
              four different Mexican states, which makes it well-connected to
              the rest of Mexico. Companies have the ability to easily penetrate
              new markets in Mexico and beyond. Current enterprises in Chihuahua
              already enjoy the connectivity link by rail and road to the
              Pacific ports.
            </p>
          )}
        </div>

        <div>
          <button
            onClick={() => toggleSection("industry")}
            className="w-full bg-[#f0f0f0] text-ColorPrincipal font-pragmatica text-[1.5rem] py-2 px-6 flex justify-between items-center rounded-2xl uppercase"
          >
            <span>Industry Powerhouse:</span>
            {openSections.industry ? (
              <IoIosArrowUp size={20} />
            ) : (
              <IoIosArrowDown size={20} />
            )}
          </button>
          {openSections.industry && (
            <p className="font-poppins mt-2 p-4 text-[1.2rem] px-[2rem] text-justify">
              Presence of international companies such as: Foxconn
              (Manufacturing and assembly of electronic components), Honeywell
              (Aerospace and automation technologies), Cementos de Chihuahua
              (GCC) (Production of cement and construction materials), Lear
              Corporation (Automotive components), Bosch (Automotive technology
              and industrial solutions), Delphi (Aptiv) (Electrical and
              electronic systems), Grupo Bafar (Food and meat products), Safran
              (Aerospace engines and components), Zodiac Aerospace (Aircraft
              interior components), Ford Motor Company (Automotive
              manufacturing).
            </p>
          )}
        </div>

        <div>
          <button
            onClick={() => toggleSection("economy")}
            className="w-full bg-[#f0f0f0] text-ColorPrincipal font-pragmatica text-[1.5rem] py-2 px-6 flex justify-between items-center rounded-2xl uppercase"
          >
            <span>Diverse Economy:</span>
            {openSections.economy ? (
              <IoIosArrowUp size={20} />
            ) : (
              <IoIosArrowDown size={20} />
            )}
          </button>
          {openSections.economy && (
            <p className="font-poppins mt-2 p-4 text-[1.2rem] px-[2rem] text-justify">
              Over 30,000 economic units, including leaders in manufacturing,
              aerospace, and automation.
            </p>
          )}
        </div>

        <div>
          <button
            onClick={() => toggleSection("quality")}
            className="w-full bg-[#f0f0f0] text-ColorPrincipal font-pragmatica text-[1.5rem] py-2 px-6 flex justify-between items-center rounded-2xl uppercase"
          >
            <span>Quality of Life:</span>
            {openSections.quality ? (
              <IoIosArrowUp size={20} />
            ) : (
              <IoIosArrowDown size={20} />
            )}
          </button>
          {openSections.quality && (
            <p className="font-poppins mt-2 p-4 text-[1.2rem] px-[2rem] text-justify">
              The city boasts a vibrant cultural scene with theaters, museums,
              and festivals. Recreational attractions like the Chepe Train to
              Copper Canyon, historical ex-haciendas, and outdoor activities in
              nearby national parks provide residents and visitors with diverse
              options for leisure. Combined with excellent healthcare services
              and a growing focus on urban revitalization, Chihuahua delivers a
              high quality of life that supports both professional and personal
              development.
            </p>
          )}
        </div>

        <div>
          <button
            onClick={() => toggleSection("exportation")}
            className="w-full bg-[#f0f0f0] text-ColorPrincipal font-pragmatica text-[1.5rem] py-2 px-6 flex justify-between items-center rounded-2xl uppercase"
          >
            <span>Exportation:</span>
            {openSections.exportation ? (
              <IoIosArrowUp size={20} />
            ) : (
              <IoIosArrowDown size={20} />
            )}
          </button>
          {openSections.exportation && (
            <p className="font-poppins mt-2 p-4 text-[1.2rem] px-[2rem] text-justify">
              Chihuahua stands as Mexico&rsquo;s top exporter, contributing
              significantly to the country&rsquo;s economic growth. With $35
              billion USD in exports during the first half of 2024. Chihuahua
              continues to attract investment and expand its role in global
              supply chains.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Supports;

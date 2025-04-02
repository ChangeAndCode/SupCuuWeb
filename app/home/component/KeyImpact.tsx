// src/app/component/KeyImpact.tsx
import Image from "next/image";

import { UmbracoPageData, Indicator } from "@/types/home";

interface KeyImpactProps {
  pageData: UmbracoPageData;
}

const KeyImpact: React.FC<KeyImpactProps> = ({ pageData }) => {
  const { keyImpactIndicators, keyImpactTitle, targetYear } = pageData;
  const indicators: Indicator[] = keyImpactIndicators || [];

  return (
    <div>
      <div className="flex flex-col justify-center items-center overflow-hidden">
        <div className="flex items-center translate-x-[2.5rem] md:translate-x-[7rem] lg:translate-x-[11.2rem]">
          <div className="relative z-20">
            <h2 className="main-Tipography text-[2rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[6rem] 2xl:text-[8rem] font-pragmatica uppercase text-ColorPrincipal leading-[2rem] md:leading-[4rem] xl:leading-[6rem] 2xl:leading-[8rem]">
              {keyImpactTitle || "Key Impact Indicators"}
            </h2>
          </div>
          <p className="text-[3rem] sm:text-[5.3rem] md:text-[8rem] lg:text-[9rem] xl:text-[14rem] 2xl:text-[20rem] font-PerformanceMark translate-x-[-2.5rem] sm:translate-x-[-2.5rem] md:translate-x-[-7rem] lg:translate-x-[-13rem] xl:translate-x-[-11rem] 2xl:translate-x-[-12rem] text-white relative z-10">
            {targetYear || "2030"}
          </p>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row items-center xl:items-start xl:justify-around px-10 md:px-12 lg:px-28 gap-8">
        {indicators.map((indicator, index) => (
          <div
            key={index}
            className="flex flex-col justify-center w-[400px] h-[400px]"
          >
            <div className="flex justify-center w-full">
              <div className="w-80 h-24 border-ColorPrincipal border-4 border-solid rounded-3xl mb-10">
                <div className="flex flex-col relative justify-center items-center rounded-3xl w-80 h-24 bg-ColorPrincipal top-6 right-8">
                  <h1 className="text-white uppercase text-5xl font-pragmatica">
                    {indicator.value}
                  </h1>
                  <h2 className="text-white uppercase text-xl font-pragmatica">
                    {indicator.unit}
                  </h2>
                </div>
              </div>
            </div>

            <p className="p-4 w-full font-poppins text-2xl font-semibold capitalize">
              {indicator.indicatorDescription}{" "}
            </p>
          </div>
        ))}
      </div>

      <div className="px-7 flex justify-end">
        <p className="text-[5rem] md:text-[11rem] lg:text-[15rem] xl:text-[19rem] font-PerformanceMark whitespace-nowrap text-white">
          now
        </p>
      </div>
    </div>
  );
};

export default KeyImpact;

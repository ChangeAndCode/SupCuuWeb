import BtnCT from "@components/btnct/BtnCT";
import React from "react";
import { AttractionData } from "@/types/attraction";

interface UmbracoAttractionData {
  data: AttractionData;
}

const Always: React.FC<UmbracoAttractionData> = ({ data }) => {
  return (
    <div className="flex flex-col items-center py-[15rem] md:py-[14rem] lg:py-[15rem] text-center">
      <h2 className="text-white font-PerformanceMark text-[3rem] md:text-[4.5rem] lg:text-[6rem]">
        {data.properties.alwaysTitle}
      </h2>
      <h3 className="text-white main-Tipography font-pragmatica text-[2rem] md:text-[3rem] lg:text-[4rem] w-10/12 md:w-8/12 lg:w-6/12 leading-[2.5rem] md:leading-[3.5rem] lg:leading-[4rem] mb-[2rem] md:mb-[3rem] lg:mb-[4rem]">
        {data.properties.alwaysSubtitle}
      </h3>
      <BtnCT
        Text={data.properties.alwaysButton}
        variant="outline"
        className="z-20"
        href="https://zcform.com/btnwb"
      />
    </div>
  );
};

export default Always;

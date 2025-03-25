import React from "react";
import { AttractionData } from "@/types/attraction";

interface UmbracoAttractionData {
  data: AttractionData;
}

const WhoIs: React.FC<UmbracoAttractionData> = ({ data }) => {
  const videoUrl = data.properties.videoLink[0].url.replace(
    "watch?v=",
    "embed/"
  );
  return (
    <div className="flex flex-col items-center justify-center pt-[6rem] md:pt-[9rem] xl:pt-[13rem] pb-[9rem] sm:pb-[11rem] md:pb-[17rem] px-[2rem] sm:px-[4rem] md:px-[4rem] lg:px-[6rem] 2xl:px-0">
      <h2 className="font-pragmatica main-Tipography text-ColorPrincipal uppercase text-[1.5rem] sm:text-[2rem] md:text-[3rem]">
        {data.properties.videoTitle}
      </h2>
      <div className="mt-[3rem] w-full max-w-[1200px] border-[.4rem] border-ColorPrincipal">
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={videoUrl}
            title={data.properties.videoLink[0].title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default WhoIs;

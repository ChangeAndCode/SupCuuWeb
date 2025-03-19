import React from "react";

interface WeAreProps {
  highlightText: string;
  description: string;
}

const WeAre: React.FC<WeAreProps> = ({ highlightText, description }) => {
  return (
    <div className="overflow-hidden">
      <h2 className="text-ColorPrincipal font-PerformanceMark translate-x-5 md:translate-x-[8rem] lg:translate-x-[10rem] -mb-[10rem] sm-md:-mb-[8rem] md:-mb-[11rem] lg:-mb-[14rem] xl:-mb-[14rem] 2xl:-mb-[15rem] 4xl:-mb-[22rem] text-[6rem] md:text-[8rem] lg:text-[11rem] xl:text-[14rem] 2xl:text-[18rem] 4xl:text-[26rem]">
        {highlightText}
      </h2>
      <div className="flex items-center bg-[url('/Bg/bgWeAre.webp')] bg-no-repeat bg-center bg-[length:120%_100%] z-10 relative px-[2rem] lg:px-[6rem] xl:px-[4rem] 2xl:px-[8rem] 4xl:px-[15rem] py-[12rem] md:py-[14rem] lg:py-[16rem] xl:py-[15rem] 4xl:py-[22rem]">
        <div className="uppercase font-poppins font-semibold text-white text-2xl md:text-[2.3rem] lg:text-[3rem] xl:text-[2rem] 2xl:text-[2.8rem] 4xl:text-[4rem] w-full xl:w-7/12 2xl:w-8/12 leading-[1.7rem] md:leading-[2.7rem] lg:leading-[3.2rem] 2xl:leading-[3.2rem] 4xl:leading-[4.5rem]">
          {description}
        </div>
      </div>
    </div>
  );
};

export default WeAre;

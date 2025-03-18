// app/Together/Components/header.tsx
import React from "react";
import Image from "next/image";

interface HeaderProps {
  headerData: {
    principalText: string[];
    subtext: string;
    backgroundImage: string;
    communityText: string;
  };
}

const Header: React.FC<HeaderProps> = ({ headerData }) => {
  return (
    <>
      <div className="mt-20 flex bg-gray-100 min-h-[100vh] pb-[15vh] items-center justify-center relative">
        <h1
          className="font-PerformanceMark absolute w-full text-center text-white text-[20vw]"
          style={{ top: "35%" }}
        >
          {headerData.subtext}
        </h1>
        <div className="flex w-full relative z-10 flex-wrap md:flex-nowrap">
          <div className="w-1/2 flex justify-center items-center">
            <div className="relative w-3/4 md:w-full aspect-[4/3]">
              <Image
                src={headerData.backgroundImage}
                alt="Imagen"
                fill
                className="object-cover animate-slide-left"
                priority
                sizes="(max-width: 768px) 37.5vw, 50vw"
              />
            </div>
          </div>
          <div className="w-1/2 flex justify-center items-center text-center p-4">
            <div>
              {headerData.principalText.map((text, index) => (
                <h2 
                  key={index}
                  className="text-[1.3rem] sm:text-[2.5rem] md:text-[4rem] xl:text-[4rem] 2xl:text-[5rem] text-right text-ColorPrincipal font-bold font-pragmatica leading-[1]"
                >
                  {text}
                </h2>
              ))}
              <h2 className="text-[1.3rem] sm:text-[2.5rem] md:text-[4rem] xl:text-[4rem] 2xl:text-[5rem] text-right text-ColorPrincipal font-bold font-PerformanceMark leading-[1]">
                {headerData.subtext}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[2rem] md:mt-[-80px] relative z-0 w-full flex justify-center md:justify-start">
        <div className="w-[90%] md:w-[800px] lg:w-[900px] xl:w-[1000px] md:ml-[6rem] relative">
          <h2 className="font-pragmatica main-Tipography text-white text-[3.5vw] sm:text-[3vw] md:text-[2.5vw] lg:text-[2.5vw] 
              whitespace-nowrap absolute top-1/2 left-[8%] transform -translate-y-1/2 z-10 text-left">
              {headerData.communityText}
          </h2>
          <Image
              src="/bgtitle.webp"
              alt="Imagen"
              width={900}
              height={900}
              className="w-full h-auto"
              priority
          />
        </div>
      </div>
    </>
  );
};

export default Header;

// app/sites/opportunities/Components/WantToStayUpdated.tsx
"use client";
import React from "react";
import Image from "next/image";

interface WantToStayUpdatedProps {
  title: string;
  text: string;
}

const WantToStayUpdated: React.FC<WantToStayUpdatedProps> = ({
  title,
  text,
}) => {
  return (
    <div
      className="
    xs:py-0
    relative 
    w-full 
    max-w-[900px] 
    mx-auto 
    py-8"
    >
      <div className="relative w-full h-[180px] md:h-[250px] lg:h-[300px]">
        <Image
          src="/Bg/bgTitulo.webp"
          alt="Want to Stay Updated"
          fill
          style={{ objectFit: "cover" }}
          quality={80}
          priority
          className="rounded-lg"
        />
        <div className="absolute inset-0 flex items-center justify-start">
          <h2
            className="
          font-PerformanceMark 
          text-white 
          xs:text-[9px] 
          sm:text-[11px]
          md:text-[17px]
          lg:text-[22px] 
          inset-[7.4rem] 
          text-left 
          mt-4 
          max-w-[75%] 
          h-[50%] 
          ml-[8%]"
          >
            {title}
          </h2>
        </div>
      </div>
      <div
        className="
        relative
        font-PerformanceMark 
      text-gray-800 
        xs:text-[9px] xs:ml-5 xs:bottom-20
        sm:text-[9px] 
        md:text-[12px] md:ml-12 md:bottom-24
        lg:text-[15px] lg:ml-16 lg:bottom-28
        text-left 
        mt-4
        ml-[8%]"
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  );
};

export default WantToStayUpdated;

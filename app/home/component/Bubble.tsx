// src/app/component/Bubble.tsx
import React from "react";
import { BackboneTeamMember } from "@/types/home";

interface BubbleProps {
  selectedImage: number;
  teamBackbone: BackboneTeamMember[];
}

const Bubble = ({ selectedImage = 0, teamBackbone }: BubbleProps) => {
  const getTrianglePosition = () => {
    const numberOfMembers = teamBackbone.length;
    if (numberOfMembers === 1) {
      return "left-[50%]";
    }
    const positions = [
      "left-[23%] sm:left-[24%] md:left-[30%] xl:left-[37%] 4xl:left-[32%]",
      "left-[50%]",
      "left-[72%] sm:left-[70%] md:left-[68%] xl:left-[61%] 4xl:left-[65%]",
    ];

    if (numberOfMembers <= 3) {
      return positions[selectedImage] || positions[0];
    } else {
      const dynamicPosition = (selectedImage / (numberOfMembers - 1)) * 100;
      return `left-[${dynamicPosition}%]`;
    }
  };

  const currentMember = teamBackbone[selectedImage] || teamBackbone[0];

  return (
    <div className="relative bg-white p-8 rounded-[2rem] shadow-md w-10/12 text-gray-900 z-10 mx-auto">
      <div
        className={`absolute -top-[3rem] ${getTrianglePosition()} -translate-x-1/2 w-0 h-0 
                      border-l-[3rem] sm:border-l-[4rem] md:border-l-[7rem] lg:border-l-[8rem] xl:border-l-[10rem] border-l-transparent 
                      border-b-[6rem] sm:border-b-[8rem] md:border-b-[7rem] lg:border-b-[8rem] xl:border-b-[10rem] border-b-white 
                      border-r-[3rem] sm:border-r-[4rem] md:border-r-[7rem] lg:border-r-[8rem] xl:border-r-[10rem] border-r-transparent -z-10`}
      ></div>

      <p className="main-Tipography text-[1.2rem] sm-md:text-[1rem] md:text-[2rem] lg:text-[2.5rem] xl:text-[3rem] xl:leading-[3rem] text-ColorPrincipal font-pragmatica uppercase">
        {currentMember.title}
      </p>
      <p className="main-Tipography text-[.8rem] sm-md:text-[.6rem] md:text-[1rem] lg:text-[1.3rem] xl:text-[1.5rem] xl:mb-[1.5rem] text-ColorPrincipal font-pragmatica capitalize">
        {currentMember.subtitle}
      </p>
      <p className="main-Tipography text-[.8rem] sm-md:text-[.6rem] md:text-[1rem] lg:text-[1.3rem] xl:text-[1.5rem] text-ColorPrincipal font-pragmatica capitalize md:mb-[.7rem] xl:mb-[1.5rem]">
        {currentMember.description}
      </p>
      <p className="main-Tipography text-[.8rem] md:text-[1rem] lg:text-[1.3rem] xl:text-[1.5rem] text-ColorPrincipal font-pragmatica capitalize md:mb-[.7rem] xl:mb-[1.5rem]">
        {currentMember.emailText}&nbsp;
        <a
          href={`mailto:${currentMember.email}`}
          className="text-[.8rem] sm:text-[1rem] md:text-[1.8rem] lg:text-[2rem] xl:text-[2.3rem] text-blue-600 hover:underline"
        >
          {currentMember.email}
        </a>
        .
      </p>
    </div>
  );
};

export default Bubble;

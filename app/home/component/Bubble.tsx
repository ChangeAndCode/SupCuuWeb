// src/app/component/Bubble.tsx
import React, { useEffect, useState } from "react";
import { BackboneTeamMember } from "@/types/home";

interface BubbleProps {
  selectedImage: number;
  teamBackbone: BackboneTeamMember[];
}

const Bubble = ({ selectedImage = 0, teamBackbone }: BubbleProps) => {
  const numberOfMembers = teamBackbone.length;
  const [screenSize, setScreenSize] = useState<string>("md");

  // Track screen size changes
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setScreenSize("sm");
      } else if (width < 768) {
        setScreenSize("md");
      } else if (width < 1024) {
        setScreenSize("lg");
      } else if (width < 1280) {
        setScreenSize("xl");
      } else {
        setScreenSize("2xl");
      }
    };

    // Set initial size
    handleResize();
    
    // Add event listener
    window.addEventListener("resize", handleResize);
    
    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getTrianglePosition = () => {
    // Position maps for different screen sizes and member counts
    const positionMaps = {
      sm: {
        // Mobile positions
        1: ["left-1/2"],
        2: ["left-1/4", "left-3/4"],
        3: ["left-1/6", "left-1/2", "left-5/6"],
        4: ["left-[15%]", "left-[38%]", "left-[62%]", "left-[85%]"],
        5: ["left-[10%]", "left-[30%]", "left-1/2", "left-[70%]", "left-[90%]"]
      },
      md: {
        // Tablet positions (similar to mobile but may need adjustment)
        1: ["left-1/2"],
        2: ["left-1/4", "left-3/4"],
        3: ["left-[20%]", "left-1/2", "left-[80%]"],
        4: ["left-[15%]", "left-[38%]", "left-[62%]", "left-[85%]"],
        5: ["left-[10%]", "left-[30%]", "left-1/2", "left-[70%]", "left-[90%]"]
      },
      lg: {
        // Desktop positions (more spaced out)
        1: ["left-1/2"],
        2: ["left-[30%]", "left-[70%]"],
        3: ["left-[25%]", "left-1/2", "left-[75%]"],
        4: ["left-[20%]", "left-[40%]", "left-[60%]", "left-[80%]"],
        5: ["left-[16%]", "left-[32%]", "left-1/2", "left-[68%]", "left-[84%]"]
      },
      xl: {
        // Large desktop 
        1: ["left-1/2"],
        2: ["left-[35%]", "left-[65%]"],
        3: ["left-[30%]", "left-1/2", "left-[70%]"],
        4: ["left-[25%]", "left-[42%]", "left-[58%]", "left-[75%]"],
        5: ["left-[20%]", "left-[35%]", "left-1/2", "left-[65%]", "left-[80%]"]
      },
      "2xl": {
        // Extra large desktop
        1: ["left-1/2"],
        2: ["left-[40%]", "left-[60%]"],
        3: ["left-[35%]", "left-1/2", "left-[65%]"],
        4: ["left-[30%]", "left-[43%]", "left-[57%]", "left-[70%]"],
        5: ["left-[25%]", "left-[38%]", "left-1/2", "left-[62%]", "left-[75%]"]
      }
    };
    
    // Get positions for current screen size, fallback to md if not found
    const screenPositions = positionMaps[screenSize as keyof typeof positionMaps] || 
                           positionMaps.md;
    
    // Get positions for current number of members, fallback to default if not found
    const memberPositions = screenPositions[numberOfMembers as keyof typeof screenPositions] || 
                           ["left-1/4", "left-1/2", "left-3/4"];
    
    // Get position for selected image, handle out of bounds
    const safeIndex = Math.min(selectedImage, memberPositions.length - 1);
    return memberPositions[safeIndex];
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

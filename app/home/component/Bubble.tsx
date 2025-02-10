import React from "react";
import { textBackboneData } from "../data/dataTextBackbone";

interface GloboProps {
  selectedImage: number;
}

const Bubble = ({ selectedImage = 0 }: GloboProps) => {
  const getTrianglePosition = () => {
    switch(selectedImage) {
      case 0: return 'left-[37%]';
      case 1: return 'left-[50%]';
      case 2: return 'left-[61%]';
      default: return 'left-[37%]';
    }
  }

  const currentText = textBackboneData[selectedImage] || textBackboneData[0];

  return (
    <div className="relative bg-white p-8 rounded-[2rem] shadow-md w-10/12 text-gray-900 z-10 mx-auto">
      <div className={`absolute -top-[3rem] ${getTrianglePosition()} -translate-x-1/2 w-0 h-0 
                      border-l-[3rem] sm:border-l-[4rem] md:border-l-[7rem] lg:border-l-[8rem] xl:border-l-[10rem] border-l-transparent 
                      border-b-[6rem] sm:border-b-[8rem] md:border-b-[7rem] lg:border-b-[8rem] xl:border-b-[10rem] border-b-white 
                      border-r-[3rem] sm:border-r-[4rem] md:border-r-[7rem] lg:border-r-[8rem] xl:border-r-[10rem] border-r-transparent -z-10`}>
      </div>
      
      <p className='text-[1.2rem] sm-md:text-[1rem] md:text-[2rem] lg:text-[2.5rem] xl:text-[3rem] xl:leading-[3rem] text-ColorPrincipal font-pragmatica uppercase'>
        {currentText.title}
      </p>
      <p className='text-[.8rem] sm-md:text-[.6rem] md:text-[1rem] lg:text-[1.3rem] xl:text-[1.5rem] xl:mb-[1.5rem] text-ColorPrincipal font-pragmatica uppercase'>
        {currentText.subtitle}
      </p>
      <p className='text-[.8rem] sm-md:text-[.6rem] md:text-[1rem] lg:text-[1.3rem] xl:text-[1.5rem] text-ColorPrincipal font-pragmatica uppercase md:mb-[.7rem] xl:mb-[1.5rem]'>
        {currentText.description}
      </p>
      <p className='text-[.8rem] md:text-[1rem] lg:text-[1.3rem] xl:text-[1.5rem] text-ColorPrincipal font-pragmatica uppercase md:mb-[.7rem] xl:mb-[1.5rem]'>
        {currentText.emailText}&nbsp;
        <a
          href={`mailto:${currentText.email}`}
          className='text-[.8rem] sm:text-[1rem] md:text-[1.8rem] lg:text-[2rem] xl:text-[2.3rem] text-blue-600 hover:underline'
        >
          {currentText.email}
        </a>.
      </p>
    </div>
  );
};

export default Bubble;
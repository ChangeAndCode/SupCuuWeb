import React from 'react';
import Image from 'next/image';

const CarouselEvents = () => {
  const descriptions = [
    `SI TIENES UNA IDEA PARA UNA SOLUCION
    DIGITAL( APP, PLATAFORMA O SOFTWARE)
    ESTE BOOTCAMP DE 3 DIAS ES JUSTO LO
    QUE NECESITAS PARA CONVERTIRLA EN UN
    PROYECTO DE EXITO CON LA AYUDA DE
    EXPERTOS INCREIBLES

    FECHA: 10,11 Y 12 DE OCTUBRE
    LUGAR: PARQUE TECNOLOGICO ORION`,
    `SI TIENES UNA IDEA PARA UNA SOLUCION
    DIGITAL( APP, PLATAFORMA O SOFTWARE)
    ESTE BOOTCAMP DE 3 DIAS ES JUSTO LO
    QUE NECESITAS PARA CONVERTIRLA EN UN
    PROYECTO DE EXITO CON LA AYUDA DE
    EXPERTOS INCREIBLES

    FECHA: 10,11 Y 12 DE OCTUBRE
    LUGAR: PARQUE TECNOLOGICO ORION`,
  ];

  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section with Title Overlay */}
      <div className="relative w-full max-w-full">
        <Image
          src="/dreamBig/background_title.png"
          alt="events & opportunities"
          width={946}
          height={410}
          className="w-full h-auto object-cover"
          priority
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-center text-white text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-pragmatica font-bold uppercase px-4 text-shadow-lg">
          Events & opportunities
        </h1>
      </div>
{/* Events Grid */}
<div className="mt-6 md:mt-8 w-full px-4 max-w-[1000px]">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
    {descriptions.map((description, index) => (
      <div
        key={index}
        className="flex flex-col md:flex-row bg-gray-300 rounded-md overflow-hidden shadow-md transform transition-transform hover:scale-[1.02]"
      >
        {/* Wrapper for Entire Block */}
        <div className="flex flex-col w-full h-full">
          
          {/* Title Wrapper */}
          <div className="p-4 md:p-6">
            <h2 className="text-sm md:text-base font-bold uppercase text-left mb-2">
              START UP SESSION FOR DIGITAL
            </h2>
          </div>

          {/* Wrapper for Content */}
          <div className="flex flex-col md:flex-row items-start">
            {/* Image Wrapper */}
            <div className="w-[120px] h-[120px] bg-gray-500 flex-shrink-0 ml-4 mb-4"></div>
            
            {/* Text Content */}
            <div className="flex flex-col p-4 md:p-6 flex-grow">
              {/* Description */}
              <div className="mb-4">
                <p className="text-xs sm:text-sm uppercase leading-relaxed text-left mt-[-1.63rem]">
                  {description}
                </p>
              </div>
              
              {/* Button */}
              <div>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md text-xs hover:bg-blue-600 transition">
                  Registro
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    ))}
    <div className='ml-[-4rem]'>
      <button>
      Left
      </button>
    </div>
    <div className='ml-[31rem]'>
      <button>
        Right
      </button>
    </div>
  </div>
</div>
</div>
  );
};

export default CarouselEvents;
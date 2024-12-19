const AnImpact = () => {
  return (
    <div className="relative flex flex-col items-center py-24 lg:py-36 overflow-hidden">
      <div className="relative z-10">
        <div className="flex flex-col items-end text-end mr-[2rem] md:mr-[5rem] lg:mr-[10rem] xl:mr-[33rem] 2xl:mr-[30rem]">
          <p className="text-ColorPrincipal uppercase lg:w-4/5 font-pragmatica text-[3rem] md:text-[6rem] xl-sm:text-[7rem] xl:text-[7rem] leading-[3.5rem] md:leading-[5.9rem] xl:leading-[6rem]">
            An impact story
          </p>
        </div>
      </div>

      {/* Texto detrás */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="text-center">
          <p className="text-[9rem] lg:text-[13.5rem] font-PerformanceMark text-white uppercase leading-[9rem] lg:leading-[9rem] whitespace-nowrap">
            An impact story
          </p>
          <p className="text-[9rem] lg:text-[13.5rem] font-PerformanceMark text-white uppercase leading-[9rem] lg:leading-[9rem] whitespace-nowrap">
            An impact story
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnImpact;

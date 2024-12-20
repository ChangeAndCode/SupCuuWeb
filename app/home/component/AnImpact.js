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
          <p className="text-[2.5rem] sm:text-[3.2rem] md:text-[5.3rem] lg:text-[6.5rem] xl:text-[9.3rem] 2xl:text-[12.5rem] font-PerformanceMark text-white uppercase leading-[6rem] sm:leading-[6.5rem] md:leading-[11rem] xl:leading-[11rem] 2xl:leading-[12rem] whitespace-nowrap">
            An impact story
          </p>
          <p className="text-[2.5rem] sm:text-[3.2rem] md:text-[5.3rem] lg:text-[6.5rem] xl:text-[9.3rem] 2xl:text-[12.5rem] font-PerformanceMark text-white uppercase leading-[6rem] sm:leading-[6.5rem] md:leading-[11rem] xl:leading-[11rem] 2xl:leading-[12rem] whitespace-nowrap">
            An impact story
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnImpact;

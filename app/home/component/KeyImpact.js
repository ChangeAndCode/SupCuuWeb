import Image from 'next/image'

const KeyImpact = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center overflow-hidden">
        <div className="flex items-center translate-x-[2.5rem] md:translate-x-[7rem] lg:translate-x-[11.2rem]">
          <div className="relative z-20">
            <h2 className="text-[2rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[6rem] 2xl:text-[8rem] font-pragmatica uppercase text-ColorPrincipal leading-[2rem] md:leading-[4rem] xl:leading-[6rem] 2xl:leading-[8rem]">
              Key Impact Indicators
            </h2>
          </div>
          <p className="text-[3rem] sm:text-[5.3rem] md:text-[8rem] lg:text-[9rem] xl:text-[14rem] 2xl:text-[20rem] font-PerformanceMark translate-x-[-2.5rem] sm:translate-x-[-2.5rem] md:translate-x-[-7rem] lg:translate-x-[-13rem] xl:translate-x-[-11rem] 2xl:translate-x-[-12rem] text-white relative z-10">
            2030
          </p>
        </div>
        <div className="flex flex-col xl:flex-row items-center xl:items-start xl:justify-around px-10 md:px-12 lg:px-28 gap-8">
          <div className="flex flex-col w-full md:w-7/12 lg:w-6/12 xl:w-3/12 mb-10 lg:mb-0 gap-8">
            <Image
              src="/Indicators/startup.webp"
              alt="Indicators startup"
              width={400}
              height={400}
              quality={80}
            />
            <p className="text-2xl font-semibold uppercase">
              Attract or promote tech-based companies in the region, with a focus on sectors aligned with regional specialization.
            </p>
          </div>
          <div className="flex flex-col w-full md:w-7/12 lg:w-6/12 xl:w-3/12 mb-10 lg:mb-0 gap-8">
            <Image
              src="/Indicators/millions.webp"
              alt="Indicators millions"
              width={400}
              height={400}
              quality={80}
            />
            <p className="text-2xl font-semibold uppercase">
              Structure risk capital funds with an emphasis on angel investment, seeking to achieve this total investment.
            </p>
          </div>
          <div className="flex flex-col w-full md:w-7/12 lg:w-6/12 xl:w-3/12 mb-10 lg:mb-0 gap-8">
            <Image
              src="/Indicators/chihuahua.webp"
              alt="indicators chihuahua"
              width={400}
              height={400}
              quality={80}
            />
            <p className="text-2xl font-semibold uppercase">
              Encourage regional startups and tech-based companies to contribute to this percentage of the region’s economic output.
            </p>
          </div>
        </div>
      </div>
      <div className="px-7 flex justify-end">
        <p className="text-[5rem] md:text-[11rem] lg:text-[15rem] xl:text-[19rem] font-PerformanceMark whitespace-nowrap text-white">
          now
        </p>
      </div>
    </div>
  );
};

export default KeyImpact;

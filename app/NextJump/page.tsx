import Image from "next/image";
import Checklist from "app/NextJump/components/Checklist";
import Accelerators from "app/NextJump/components/Accelerators";

const NextJump = () => {
  return (
    <div className="overflow-hidden">
      <div className="px-4 sm:px-8 md:px-14 lg:px-24 xl:px-32 py-16 sm:py-24 md:py-32 lg:py-48">
        <div className="max-w-[1920px] mx-auto w-full">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-2">
            {/* Contenedor de las imágenes */}
            <div className="flex-shrink-0 w-full md:w-[560px] h-auto relative z-10">
              <Image
                src="/CT/segunda.webp"
                alt="STARTUP & SCALEUPS"
                width={660}
                height={560}
                quality={80}
                priority
                loading="eager"
                placeholder="blur"
                blurDataURL="/CT/segunda.webp"
                className="object-cover w-full h-full"
              />
            </div>
            {/* Contenedor del texto */}
            <div className="text-center md:text-left w-full md:w-auto relative z-20">
              <h3
                className="font-pragmatica main-Tipography text-ColorPrincipal uppercase 
                text-[2rem] sm:text-[2.5rem] md:text-[2.4rem] lg:text-[3rem] xl:text-[2.5rem] 2xl:text-[3rem] 
                leading-tight md:leading-[4rem] 
                mt-[1.5rem] md:mt-[3rem] 
                transform md:translate-x-[-110px]"
              >
                GO FOR THE
              </h3>
              <h2
                className="text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] 
                text-ColorPrincipal font-PerformanceMark 
                w-full md:w-3/5 
                leading-[1] md:leading-[10rem] 
                transform md:translate-x-[-110px]"
              >
                NEXT
              </h2>
              <h2
                className="text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] 
                text-ColorPrincipal font-PerformanceMark 
                w-full md:w-3/5 
                leading-[1] md:leading-[10rem] 
                transform md:translate-x-[-15px]
                mb-[2rem] md:mb-0"
              >
                JUMP
              </h2>
            </div>
          </div>

          <div className="mt-[2rem] md:mt-[-80px] relative z-0 md:max-w-[750px]">
            <Image
              src="/Bg/bgWeAre.webp"
              alt="STARTUP & SCALEUPS"
              width={560}
              height={400}
              quality={80}
              priority
              loading="eager"
              placeholder="blur"
              blurDataURL="/Bg/bgWeAre.webp"
              className="object-cover w-full"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
              <h3 className="font-pragmatica main-Tipography text-white ml-1 leading-none">
                <span className="block text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold">
                  BEFORE YOU START
                </span>
                <span className="block text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold">
                  RAISING CAPITAL,
                </span>
                <span className="block text-[0.875rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.5rem]">
                  MAKE SURE YOU CHECK OFF
                </span>
                <span className="block text-[0.875rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.5rem]">
                  THESE POINTS
                </span>
              </h3>
            </div>
          </div>
        </div>
        <Checklist />
      </div>
      <div
        className="bg-[url('/Bg/bgPartners.webp')] 
        bg-no-repeat bg-center 
        bg-cover md:bg-[length:120vw_100%] 
        mt-[-8rem] sm:mt-[-12rem] md:mt-[-18rem]"
      >
        <Accelerators />
      </div>
    </div>
  );
};

export default NextJump;

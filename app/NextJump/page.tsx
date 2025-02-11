import Image from "next/image";
import Checklist from "app/NextJump/components/Checklist";
import Accelerators from "app/NextJump/components/Accelerators";
import  InnovationForm  from "./components/ContactForm";

const NextJump = () => {
  return (
    <div className="overflow-hidden">
      <div className="container mx-auto px-4 sm:px-8 md:px-14 lg:px-24 xl:px-32 py-16 sm:py-24 md:py-32 lg:py-48">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
            {/* Contenedor de las imágenes */}
            <div className="flex-shrink-0 w-full md:w-[500px] lg:w-[600px] xl:w-[650px] 2xl:w-[700px] h-auto relative z-10">
              <Image
                src="/CT/segunda.webp"
                alt="STARTUP & SCALEUPS"
                width={700}
                height={600}
                quality={80}
                priority
                loading="eager"
                placeholder="blur"
                blurDataURL="/CT/segunda.webp"
                className="object-cover w-full h-full animate-slide-left"
              />
            </div>

            {/* Contenedor del texto */}
            <div className="text-center md:text-left w-full md:w-auto relative z-20">
              <h3 className="font-pragmatica main-Tipography text-ColorPrincipal uppercase 
                text-[clamp(2rem,5vw,5rem)]  
                leading-tight md:leading-[clamp(3rem,12vw,6rem)] 
                mt-[clamp(1.5rem,4vw,3rem)] 
                transform md:translate-x-[clamp(-200px,-12vw,-180px)]">
                GO FOR THE
              </h3>
              <h2 className="text-ColorPrincipal font-PerformanceMark 
                text-[clamp(6rem,16vw,13rem)] leading-[.80] 
                w-full md:w-4/5 
                transform md:translate-x-[clamp(-115px,-10vw,-170px)]">
                NEXT
              </h2>
              <h2 className="text-ColorPrincipal font-PerformanceMark 
                text-[clamp(6rem,16vw,13rem)] leading-[clamp(6rem,14vw,10rem)]
                w-full md:w-4/5 
                transform md:translate-x-[clamp(-50px,-7vw,-100px)]
                mb-[clamp(2rem,5vw,2rem)]">
                JUMP
              </h2>
            </div>
          </div>

          {/* Contenedor de la imagen inferior con texto */}
          <div className="mt-[2rem] md:mt-[-80px] relative z-0
            w-full md:max-w-[800px] lg:max-w-[900px] xl:max-w-[1000px]">
            <Image
              src="/Bg/bgWeAre.webp"
              alt="STARTUP & SCALEUPS"
              width={800}
              height={450}
              quality={80}
              priority
              loading="eager"
              placeholder="blur"
              blurDataURL="/Bg/bgWeAre.webp"
              className="object-cover w-full"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
              <h3 className="font-pragmatica main-Tipography text-white leading-none">
                <span className="block text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[4rem] font-bold">
                  BEFORE YOU START
                </span>
                <span className="block text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[4rem] font-bold">
                  RAISING CAPITAL,
                </span>
                <span className="block text-[0.875rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[2rem]">
                  MAKE SURE YOU CHECK OFF
                </span>
                <span className="block text-[0.875rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[2rem]">
                  THESE POINTS
                </span>
              </h3>
            </div>
          </div>

          {/* Checklist */}
          <div className="mt-1 md:mt-2">
            <Checklist />
          </div>
        </div>
      </div>

      {/* Sección de Accelerators */}
      <div className="bg-[url('/Bg/bgPartners.webp')] 
        bg-no-repeat bg-center 
        bg-cover md:bg-[length:120vw_100%] 
        mt-[-8rem] sm:mt-[-12rem] md:mt-[-18rem]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-14 lg:px-24 xl:px-32">
          <Accelerators />
        </div>
        <div>
          <InnovationForm/>
        </div>
      </div>
    </div>
  );
};

export default NextJump;
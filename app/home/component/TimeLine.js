import Image from "next/image";

const TimeLine = () => {
  return (
    <div className="relative py-16">
      <div className="flex justify-center">
        <div className="transform rotate-90 lg:rotate-0 translate-x-[-9rem] md:translate-x-[-21rem] lg:translate-x-0 translate-y-[9rem] md:translate-y-[20rem] lg:translate-y-0">
          <div className="h-auto sm:w-6/12 md:w-8/12 lg:w-10/12 xl:w-full">
            <Image 
              src="/barra.svg"
              width={1600}
              height={1500}
              alt="Timeline bar"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row xl:gap-[9rem] justify-center px-4 lg:px-0">
        <div className="flex flex-col w-full lg:w-2/12">
          <Image
            src="/Logos/desec.svg"
            width={200}
            height={100}
            alt="DESEC logo"
          />
          <p className="mt-4 text-center lg:text-left">
            DESEC transforming Chihuahua&rsquo;s economy over the past 50 years.
          </p>
        </div>

        <div className="flex flex-col w-full lg:w-2/12 mt-6 lg:mt-0">
          <Image 
            src="/Logos/futura.svg"
            width={200}
            height={100}
            alt="Futura logo"
          />
          <p className="mt-4 text-center lg:text-left">
            DESEC launches Chihuahua Futura to drive innovation and technology.
          </p>
        </div>

        <div className="flex flex-col w-full lg:w-4/12 mt-6 lg:mt-0">
          <div className="flex flex-wrap justify-start gap-4">
            <Image 
              src="/Logos/mit.svg"
              width={200}
              height={100}
              alt="MIT logo"
            />
            <Image 
              src="/Logos/startup.svg"
              width={200}
              height={100}
              alt="Startup logo"
            />
          </div>
          <p>
            Chihuahua joins the MIT REAP program. Local leaders gather data, define a strategic plan, and create a collective organization to transform the ecosystem called STARTUP CHIHUAHUA.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;

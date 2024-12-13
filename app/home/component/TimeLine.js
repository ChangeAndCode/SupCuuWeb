import Image from "next/image";

const TimeLine = () => {
  return (
    <div className="relative py-16">
      <div className="flex justify-center">
        <div className="transform rotate-90 lg:rotate-0 translate-x-[-9rem] md:translate-x-[-21rem] lg:translate-x-0 translate-y-[9rem] md:translate-y-[20rem] lg:translate-y-0">
            <div className="flex justify-center">
            <Image
              src="/barra.png"
              alt="Timeline bar"
              width={1600}
              height={1500}
              className=""
            />
            </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row xl:gap-[9rem] justify-center px-4 lg:px-0">
        <div className="flex flex-col w-full lg:w-2/12">
          <Image
            src="/Logos/desec.png"
            width={200}
            height={100}
            alt="DESEC logo"
          />
          <p className="mt-4 uppercase w-[12rem] text-left">
            <span className="font-bold">DESEC</span> transforming Chihuahua's economy over the past 50 years.
          </p>
        </div>

        <div className="flex flex-col w-full lg:w-2/12 mt-6 lg:mt-0">
          <Image 
            src="/Logos/futura.png"
            width={200}
            height={100}
            alt="Futura logo"
          />
          <p className="mt-4 uppercase w-[11rem] text-left">
          <span className="font-bold">DESEC</span> launches <span className="font-bold">Chihuahua Futura</span> to drive innovation and technology.
          </p>
        </div>

        <div className="flex flex-col w-full lg:w-4/12 mt-6 lg:mt-0">
          <div className="flex flex-wrap justify-start">
            <Image 
              src="/Logos/mit.png"
              width={200}
              height={100}
              alt="MIT logo"
            />
            <Image 
              src="/Logos/startup.png"
              width={200}
              height={100}
              alt="Startup logo"
            />
          </div>
          <p className="uppercase mt-4 w-[22rem] text-left">
            Chihuahua joins the <span className="font-bold">MIT REAP</span> program. Local leaders gather data, define a strategic plan, and create a collective organization to transform the ecosystem called <span className="font-bold">STARTUP CHIHUAHUA</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;

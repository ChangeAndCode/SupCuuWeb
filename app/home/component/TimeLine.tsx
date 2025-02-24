import Image from "next/image";

const TimeLine: React.FC = () => {
  return (
    <div className="relative mt-[7rem] xl:mt-[5rem]">
      <div className="flex justify-center">
        <div className="transform lg:translate-x-0">
          <div className="flex justify-center">
          <div className="flex xl:translate-x-[1rem] xl:translate-y-[-2.2rem] 2xl:translate-y-[-2.5rem] absolute">
              <p className="font-poppins hidden xl:block text-sm md:text-2xl translate-y-[19.5rem] md:translate-y-[23rem] lg:translate-y-[24rem] xl:translate-y-0 xl:translate-x-[-10.3rem] 2xl:translate-x-[-13.7rem]">
                2019
              </p>
              <p className="font-poppins hidden xl:block text-sm md:text-2xl translate-y-[34rem] md:translate-y-[40.5rem] lg:translate-y-[42rem] xl:translate-y-0 xl:translate-x-[7.4rem] 2xl:translate-x-[8.5rem]">
                2022
              </p>
            </div>
            <div className="xl:w-[1200px] xl:h-[1100px] 2xl:w-[1500px] 2xl:h-[1400px] absolute">
              <Image
                src="/barra.webp"
                alt="Timeline bar"
                width={1500}
                height={1400}
                className="hidden xl:block"
                quality={80}
              />
            </div>
          </div>
          <div className="w-[80%] md:w-full">
          <div className="flex flex-col absolute">
              <p className="font-poppins block xl:hidden text-sm md:text-2xl translate-x-[.5rem] md:translate-x-[-2rem] translate-y-[3rem] md:translate-y-[3.2rem]">
                2019
              </p>
              <p className="font-poppins block xl:hidden text-sm md:text-2xl translate-x-[.5rem] md:translate-x-[-2rem] translate-y-[19rem] md:translate-y-[23rem]">
                2022
              </p>
            </div>
            <div className="w-[20px] h-[20px] md:w-[25px] md:h-[25px] translate-x-[2.3rem] md:translate-x-[2.5rem]">
              <Image
                src="/barraV.webp"
                alt="Timeline bar"
                width={25}
                height={25}
                className="block xl:hidden"
                quality={80}
              />
            </div>
            <div className="flex flex-col xl:flex-row gap-[3rem] justify-center px-4 xl:px-0 xl:mt-[3rem] translate-x-[3rem] md:translate-x-[5rem]">
              <div className="flex flex-col w-full xl:w-2/12 transform translate-y-[-1rem] md:translate-y-[-.4rem] xl:translate-y-0 xl:translate-x-[-11.5rem] 2xl:translate-x-[-20rem]">
                <Image
                  src="/Logos/desec.webp"
                  width={200}
                  height={100}
                  alt="DESEC logo"
                  quality={80}
                />
                <p className="font-poppins text-[1.3rem] md:text-[1.5rem] mt-4 capitalize w-[18rem] text-left">
                  <span className="font-bold">DESEC</span> transforming Chihuahua&rsquo;s economy over the past 50 years.
                </p>
              </div>

              <div className="flex flex-col w-full xl:w-2/12 mt-6 lg:mt-0 translate-y-[.5rem] md:translate-y-[2rem] lg:translate-y-[4rem] xl:translate-y-0 xl:translate-x-[-4.5rem] 2xl:translate-x-[-7.5rem]">
                <Image
                  src="/Logos/futura.webp"
                  width={200}
                  height={100}
                  alt="Futura logo"
                  quality={80}
                />
                <p className="font-poppins text-[1.3rem] md:text-[1.5rem] mt-4 capitalize w-[15rem] md:w-[13rem] text-left">
                  <span className="font-bold">DESEC</span> launches <span className="font-bold">Chihuahua Futura</span> to drive innovation and technology.
                </p>
              </div>

              <div className="flex flex-col w-full lg:w-5/12 mt-6 lg:mt-0 translate-y-[-1.8rem] sm:translate-y-[.5rem] md:translate-y-[2rem] lg:translate-y-[4rem] xl:translate-y-0 xl:translate-x-[2rem] 2xl:translate-x-[4rem]">
                <div className="flex flex-wrap justify-start">
                  <Image
                    src="/Logos/mit.webp"
                    width={200}
                    height={100}
                    alt="MIT logo"
                    quality={80}
                  />
                  <Image
                    src="/Logos/startup.webp"
                    width={200}
                    height={100}
                    alt="Startup logo"
                    quality={80}
                  />
                </div>
                <p className="font-poppins text-[1.3rem] md:text-[1.5rem] capitalize mt-4 w-10/12 md:w-[32rem] text-left">
                  Chihuahua joins the <span className="font-bold">MIT REAP</span> program. Local leaders gather data, define a strategic plan, and create a collective organization to transform the ecosystem called <span className="font-bold">STARTUP CHIHUAHUA</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
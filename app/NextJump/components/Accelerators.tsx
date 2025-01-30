import Image from "next/image";

const Accelerators = () => {
  const accelerators = [
    {
      id: 1,
      logo: "/logos/manos.webp",
      secondLogo: "/logos/google.webp",
      text: "EMPOWERS LATINO FOUNDERS BY CONNECTING THEM WITH RESOURCES AND NETWORKS IN SILICON VALLEY.",
    },
    {
      id: 2,
      logo: "/logos/combinator.webp",
      text: "A RENOWNED STARTUP ACCELERATOR THAT HAS LAUNCHED COMPANIES LIKE AIRBNB AND DROPBOX.",
    },
    {
      id: 3,
      logo: "/logos/plata.webp",
      text: "ACCELERATES TECH STARTUPS IN LATIN AMERICA, FOCUSING ON SCALABLE DIGITAL PRODUCTS.",
    },
    {
      id: 4,
      logo: "/logos/techs.webp",
      text: "PROVIDES GLOBAL MENTORSHIP AND FUNDING TO HELP STARTUPS ACHIEVE RAPID GROWTH AND SCALE.",
    },
  ];

  return (
    <div className="overflow-hidden bg-cover bg-center">
      <div className="flex flex-col items-center py-[4rem] md:py-[8rem] px-[1rem] md:px-[3rem]">
        <div className="w-full mb-4 md:mb-8">
          <h2 className="text-[2rem] sm:text-[3rem] md:text-[5rem] lg:text-[7rem] text-ColorPrincipal font-PerformanceMark w-full leading-[2.5rem] sm:leading-[3.5rem] md:leading-[5rem] lg:leading-[7rem]">
            Accelerators
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-2 w-full max-w-[900px] mx-auto">
          {accelerators.map((accelerator) => (
            <div key={accelerator.id} className="flex flex-col items-center px-2">
              <div className="bg-white shadow-lg rounded-lg p-3 md:p-4 w-full mx-auto hover:shadow-2xl transition-shadow duration-300">
                <div className="flex justify-center items-center gap-4 mb-2 md:mb-3">
                  <Image
                    src={accelerator.logo}
                    alt=""
                    width={100}
                    height={100}
                    className="object-contain md:w-[200px] md:h-[70px]"
                  />
                  {accelerator.secondLogo && (
                    <Image
                      src={accelerator.secondLogo}
                      alt=""
                      width={100}
                      height={100}
                      className="object-contain md:w-[200px] md:h-[70px]"
                    />
                  )}
                </div>
              </div>
              <div className="flex gap-1 sm:gap-2 -mt-4 sm:-mt-5 items-end w-full px-2 justify-end">
                <button className="bg-blue-500 text-white py-1 md:py-2 px-3 md:px-6 rounded-lg hover:bg-blue-600 transition-colors text-xs md:text-base">
                  INFO
                </button>
                <button className="bg-blue-500 text-white py-1 md:py-2 px-3 md:px-6 rounded-lg hover:bg-blue-600 transition-colors text-xs md:text-base">
                  APPLY
                </button>
              </div>
              <div className="mt-1 flex flex-col items-end w-full px-2">
                <p className="font-pragmatica main-Tipography text-[0.9rem] sm:text-[1rem] md:text-[1rem] pt-2 md:pt-4 text-right">
                  {accelerator.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accelerators;
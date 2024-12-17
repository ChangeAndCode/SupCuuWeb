import Image from "next/image";
import CardEntrepreneur from "./CardEntrepreneur";
import CardStartups from "./CardStartups";
import CardInvestors from "./CardInvestors";
import CardCorporates from "./CardCorporates";
import Carrusel from "./Carrusel";
import WeAre from "./WeAre";
import AnImpact from "./AnImpact";
import TimeLine from "./TimeLine";
import KeyImpact from "./KeyImpact";
import Transformative from "./Transformative";
import Partners from "./Partners";
import MeetTeam from "./MeetTeam";
import Backbone from "./Backbone";
import Form from "../../form/page";


const CT = () => {
  return (
    <div className="pt-24">
      <div className="relative flex flex-col justify-center items-center py-24 lg:py-36 overflow-hidden">
        {/* Logo */}
        <div className="relative z-10 top-5 w-11/12" >
          <div className="flex justify-center">
            <Image
              src="/startupB.png"
              alt="Company Logo"
              width={470}
              height={370}
            />
          </div>
        </div>
        {/* Texto detrás */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="text-center">
            <p className="text-[9rem] lg:text-[10rem] font-pragmatica uppercase text-outline leading-[9rem] lg:leading-[11rem] whitespace-nowrap">
              We are
            </p>
            <p className="text-[9rem] lg:text-[10rem] font-pragmatica uppercase text-outline leading-[9rem] lg:leading-[11rem] whitespace-nowrap">
              startup chihuahua
            </p>
          </div>
        </div>
      </div>

      

      <div className="relative flex flex-col items-center md:pt-[-10rem] lg:pt-[15rem] lg:flex-row lg:justify-center bg-transparent space-y-6 lg:space-y-0">
        <div className="relative lg:absolute lg:z-30 lg:transform lg:-translate-x-[30rem] lg:translate-y-[-3rem]">
          <CardEntrepreneur />
        </div>
        <div className="relative lg:absolute lg:z-20 lg:transform lg:-translate-x-[6rem] lg:translate-y-[2rem]">
          <CardStartups />
        </div>
        <div className="relative lg:absolute lg:z-30 lg:transform lg:translate-x-[10.5rem] lg:translate-y-[2rem]">
          <CardInvestors />
        </div>
        <div className="relative lg:absolute lg:z-20 lg:transform lg:translate-x-[30rem] lg:translate-y-[1rem]">
          <CardCorporates />
        </div>
      </div>


      <div className="relative">
        <div className="relative z-30 flex justify-center pt-[5rem] lg:pt-[28rem] mb-[-61rem] md:mb-[-55rem] mac:mb-[-52rem] lg:mb-[-53rem]">
          <div className="w-[900px] h-[900px]">
            <Image
              src="/news.png"
              alt="Company Logo"
              width={900}
              height={900}
            />
          </div>
        </div>
        <div className="relative flex justify-center items-center bg-[url('/Bg/bgNews.png')] bg-no-repeat bg-center bg-[length:100vw_100%] z-10">
            <Carrusel />
        </div>
        <div className="absolute bottom-[-50px] right-[.5rem] md:right-[4rem] lg:right-[15rem] translate-y-[1.5rem]">
          <Image 
            src="/logoV.png"
            alt="Company Logo"
            width={370}
            height={270}
          />
        </div>
      </div>

      <div className="py-16 overflow-hidden">
      <WeAre />
      </div>
        <div className="relative hidden mac:block xl:block -mb-[9rem]">
          <Image 
            src="/cohete.png"
            width={600}
            height={500}
            alt="We are"
             className="absolute mac:right-[0rem] mac:bottom-[-20rem] xl:right-[6rem] xl:bottom-[-17rem] z-10"
          />
        </div>
        <AnImpact />
        <div className="pb-[20rem] md:pb-[35rem] lg:pb-[5rem]">
          <TimeLine />
        </div>
        <div className="mb-[-4rem] md:mb-[-8rem]">
          <KeyImpact />
        </div>
        <div className="bg-white mb-[-13rem]">
          <Transformative />
        </div>
        <div className="relative bg-[url('/Bg/bgPartners.png')] bg-no-repeat bg-center bg-[length:120vw_100%] z-10 py-20">
          <Partners />
        </div>
        <div>
          <MeetTeam />
          <div className="pb-[10rem] lg:pb-[2rem] bg-[#c4cfd6] mt-[-20rem] md:mt-[-33rem] lg:mt-[-30rem]">
          <Backbone />
        </div>
        </div>
        <div className="mt-[-3.5rem] md:mt-[-5rem] lg:mt-[-50rem]">
          <Form />
        </div>
    </div>
  );
};

export default CT;

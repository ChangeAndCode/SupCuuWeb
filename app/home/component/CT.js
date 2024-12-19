'use client';
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
        <div className="relative z-10 top-5 w-11/12">
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
            <p className="text-[9rem] xl-sm:text-[9rem] lg:text-[10rem] font-pragmatica uppercase text-outline leading-[9rem] lg:leading-[11rem] xl-sm:leading-[10rem] whitespace-nowrap">
              We are
            </p>
            <p className="text-[9rem] xl-sm:text-[9rem] lg:text-[10rem] font-pragmatica uppercase text-outline leading-[9rem] lg:leading-[11rem] xl-sm:leading-[10rem] whitespace-nowrap">
              startup chihuahua
            </p>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col items-center md:pt-[-10rem] xl:pt-[15rem] xl:flex-row xl:justify-center bg-transparent space-y-6 lg:space-y-0">
        <div className="relative xl:absolute xl:z-30 xl:transform xl:-translate-x-[30rem] xl:translate-y-[-3rem]">
          <CardEntrepreneur />
        </div>
        <div className="relative xl:absolute xl:z-20 xl:transform xl:-translate-x-[6rem] xl:translate-y-[2rem]">
          <CardStartups />
        </div>
        <div className="relative xl:absolute xl:z-30 xl:transform xl:translate-x-[10.5rem] xl:translate-y-[2rem]">
          <CardInvestors />
        </div>
        <div className="relative xl:absolute xl:z-20 xl:transform xl:translate-x-[30rem] xl:translate-y-[1rem]">
          <CardCorporates />
        </div>
      </div>

      <div className="relative">
        <div className="relative z-30 flex justify-center pt-[5rem] xl:pt-[28rem] mb-[-61rem] md:mb-[-55rem] xl:mb-[-53rem] xl-sm:mb-[-55rem]">
          <div className="w-[900px] h-[900px]">
            <Image
              src="/news.png"
              alt="News"
              width={900}
              height={900}
              quality={80}
            />
          </div>
        </div>

        <div className="relative flex justify-center items-center bg-[url('/Bg/bgNews.png')] bg-no-repeat bg-center bg-[length:100vw_100%] z-10">
          <Carrusel />
        </div>

        <div className="absolute bottom-[-50px] right-[.5rem] md:right-[4rem] lg:right-[15rem] xl-sm:right-[18rem] translate-y-[-2.5rem]">
          <Image
            src="/logoV.png"
            alt="Company Logo"
            width={370}
            height={270}
            quality={80}
          />
        </div>
      </div>


      <div className="py-16 overflow-hidden">
        <WeAre />
      </div>

      <div className="relative hidden xl:block 2xl:-mb-[9rem]">
        <Image
          src="/cohete.png"
          width={600}
          height={500}
          alt="We are"
          className="absolute xl:right-[1rem] xl:bottom-[-25rem] 2xl:right-[6rem] 2xl:bottom-[-17rem]  z-10"
        />
      </div>

      <AnImpact />
      <div className="pb-[20rem] md:pb-[35rem] lg:pb-[20rem] xl:pb-[6rem]">
        <TimeLine />
      </div>
      <div className="mb-[-4rem] md:mb-[-8rem] xl:mb-[-7rem]">
        <KeyImpact />
      </div>
      <div className="bg-white mb-[-6rem] md:mb-[-8rem] lg:mb-[-10rem] xl:mb-[-13rem] 2xl:mb-[-15rem]">
        <Transformative />
      </div>
      <div className="relative bg-[url('/Bg/bgPartners.png')] bg-no-repeat bg-center bg-[length:120vw_100%] z-10 py-20">
        <Partners />
      </div>
      <div>
        <MeetTeam />
        <div className="pb-[10rem] lg:pb-[2rem] bg-[#c4cfd6] mt-[-20rem] md:mt-[-33rem] lg:mt-[-30rem] xl:mt-[-27rem]">
          <Backbone />
        </div>
      </div>
      <div className="mt-[-4rem] lg:mt-[-6rem] xl:mt-[-55rem]">
        <Form />
      </div>
    </div>
  );
};

export default CT;

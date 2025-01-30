import Image from "next/image";
import CardEntrepreneur from "./CardEntrepreneur";
import CardStartups from "./CardStartups";
import CardInvestors from "./CardInvestors";
import CardCorporates from "./CardCorporates";
import Carrusel from "./Carousel";
import WeAre from "./WeAre";
import AnImpact from "./AnImpact";
import TimeLine from "./TimeLine";
import KeyImpact from "./KeyImpact";
import Transformative from "./Transformative";
import Partners from "./Partners";
import MeetTeam from "./MeetTeam";
import Backbone from "./Backbone";
import Form from "../../form/page";

const CT: React.FC = () => {
  return (
    <div className="pt-24 overflow-hidden">
      <div className="relative flex flex-col justify-center items-center pt-[3rem] md:pt-[1rem] lg:pt-[4rem] xl:pt-[8rem] overflow-hidden pointer-events-none">
        {/* Logo */}
        <div className="relative z-10 md:top-[7rem] lg:top-[10rem] xl:top-[5rem] w-[350px] md:w-[290px] lg:w-[400px] xl:w-[470px] h-[350px] md:h-[290px] lg:h-[470px] xl:h-[370px]">
          <div className="flex justify-center">
            <Image
              src="/startupB.webp"
              alt="Company Logo"
              width={470}
              height={370}
              style={{ height: 'auto' }}
              quality={80}
              priority
              loading="eager"
              placeholder="blur"
              blurDataURL="/startupB.webp"
            />
          </div>
        </div>
        {/* Texto detrás */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="text-center">
            <p className="main-Tipography hidden md:block text-[2rem] md:text-[4rem] lg:text-[6rem] xl:text-[8rem] 2xl:text-[11rem] font-pragmatica uppercase text-outline  md:leading-[5rem] lg:leading-[8rem] 2xl:leading-[8rem] whitespace-nowrap">
              We are
            </p>
            <p className="main-Tipography hidden md:block text-[2rem] md:text-[4rem] lg:text-[5rem] xl:text-[7rem] 2xl:text-[9.5rem] font-pragmatica uppercase text-outline md:leading-[5rem] lg:leading-[8rem] 2xl:leading-[8rem] whitespace-nowrap">
              startup chihuahua
            </p>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col items-center md:pt-[-10rem] lg:pt-[-20rem] xl:pt-[11.2rem] 2xl:pt-[12rem] xl:flex-row xl:justify-center bg-transparent space-y-6 lg:space-y-0 pointer-events-none">
        <div className="relative xl:absolute xl:z-[10] xl:transform xl:-translate-x-[30rem] xl:translate-y-[-3rem]">
          <CardEntrepreneur />
        </div>
        <div className="relative xl:absolute xl:z-[5] xl:transform xl:-translate-x-[6rem] xl:translate-y-[2rem]">
          <CardStartups />
        </div>
        <div className="relative xl:absolute xl:z-[10] xl:transform xl:translate-x-[10.5rem] xl:translate-y-[2rem]">
          <CardInvestors />
        </div>
        <div className="relative xl:absolute xl:z-[5] xl:transform xl:translate-x-[30rem] xl:translate-y-[1rem]">
          <CardCorporates />
        </div>
      </div>
      <div className="relative">
        <div className="relative z-30 flex justify-center pt-[5rem] xl:pt-[28rem] mb-[-63rem] md:mb-[-57rem] lg:mb-[-62rem] xl:mb-[-53rem] xl-sm:mb-[-55rem] pointer-events-none">
          <div className="w-[900px] h-[900px]">
            <Image
              src="/news.webp"
              alt="News"
              width={900}
              height={900}
              style={{ height: 'auto' }}
              quality={80}
              priority
            />
          </div>
        </div>

        <div className="relative flex justify-center items-center bg-[url('/Bg/bgNews.webp')] bg-no-repeat bg-center bg-cover z-10 py-0 lg:py-[7rem] xl:py-0">
          <Carrusel />
        </div>

        <div className="absolute bottom-[-50px] right-[.5rem] md:right-[4rem] lg:right-[8rem] xl-sm:right-[18rem] translate-y-[-2.5rem]">
          <Image
            src="/logoV.webp"
            alt="Company Logo"
            width={370}
            height={270}
            style={{ height: 'auto' }}
            quality={80}
          />
        </div>
      </div>


      <div className="py-16 overflow-hidden">
        <WeAre />
      </div>
      <div className="relative hidden xl:block 2xl:-mb-[9rem]">
        <Image
          src="/cohete.webp"
          width={600}
          height={500}
          style={{ height: 'auto' }}
          alt="We are"
          className="absolute xl:bottom-[-25rem] 2xl:bottom-[-22rem] xl:right-[-1rem] 2xl:right-[3rem] z-10"
        />
      </div>
      <AnImpact />
      <div className="pb-[5rem] sm:pb-[10rem] md:pb-[20rem] lg:pb-[20rem] xl:pb-[6rem]">
        <TimeLine />
      </div>
      <div className="mb-[-2rem] md:mb-[-4rem] lg:mb-[-6rem] xl:mb-[-7rem]">
        <KeyImpact />
      </div>
      <div className="bg-white mb-[-5rem] md:mb-[-8rem] lg:mb-[-10rem] xl:mb-[-13rem] 2xl:mb-[-15rem]">
        <Transformative />
      </div>
      <div className="relative bg-[url('/Bg/bgPartners.webp')] bg-no-repeat bg-center bg-cover z-10 py-[15rem]">
        <Partners />
      </div>
      <div>
        <MeetTeam />
        <div className="pb-[10rem] lg:pb-[2rem] bg-[#c4cfd6] mt-[-20rem] md:mt-[-33rem] lg:mt-[-30rem] xl:mt-[-35rem]">
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

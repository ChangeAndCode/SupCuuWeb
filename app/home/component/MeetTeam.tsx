import Image from "next/image";

const MeetTeam: React.FC = () => {
  return (
    <div>
      <div className="flex justify-center items-center space-x-8">
        <hr className="w-[60%] md:w-[76%] lg:w-[75%] xl:w-[73%] 2xl:w-[67%] border-t-[4px] border-ColorPrincipal" />
        <Image
          src="/logo2.webp"
          width={80}
          height={80}
          alt="logo"
          quality={80}
        />
      </div>
      <div className="ml-[1rem] md:ml-[3rem] mt-[4rem] lg:ml-[4rem] xl:ml-[9rem] 2xl:ml-[16rem] relative overflow-hidden">
        <h3 className="text-[1.5rem] md:text-[2.1rem] lg:text-[2.5rem] xl:text-[3rem] 2xl:text-[3.3rem] text-ColorPrincipal font-pragmatica uppercase md:leading-[3.5rem] relative z-10 xl:w-8/12 2xl:w-7/12">
          This team works every day to inspire and empower entrepreneurs.
        </h3>
        <h4 className="text-[2rem] md:text-[4.5rem] lg:text-[5.3rem] xl:text-[6rem] 2xl:text-[7rem] text-ColorPrincipal font-pragmatica uppercase md:leading-[6rem] relative z-10">
          Meet the team
        </h4>
        <h5 className="text-[2rem] md:text-[2.1rem] lg:text-[2.5rem] xl:text-[2.8rem] 2xl:text-[3.3rem] text-ColorPrincipal font-pragmatica uppercase md:leading-[3.5rem] relative z-10">
          that makes our vision possible.
        </h5>

        {/* Texto detrás */}
        <div className="absolute inset-0 md:left-[40%] xl:left-[25%] 2xl:left-[19%] md:top-[2%] xl:top-[6%] 2xl:top-[6%]  flex justify-center items-center z-0">
          <p className="main-Tipography text-[3rem] hidden md:block md:text-[5rem] xl:text-[8rem] 2xl:text-[10rem] font-PerformanceMark text-white uppercase leading-[9rem] lg:leading-[9rem] whitespace-nowrap">
            the team
          </p>
        </div>
      </div>

      <div className="flex justify-end lg:mr-[2rem] xl:mr-[7rem] 2xl:mr-[13rem]">
        <div className="relative w-[500px] h-[500px]">
          <Image
            src="/advisory.webp"
            width={500}
            height={500}
            alt="advisory"
            quality={80}
          />
          <div className="absolute inset-[5rem] sm:inset-[6.4rem] md:inset-[6rem]">
            <p className="text-[1.7rem] xs:text-[1.6rem] md:text-[2.3rem] text-white font-PerformanceMark uppercase">
              advisory team
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-[-17rem] px-0 md:px-[3rem] lg:px-[4rem] xl:px-[8rem] 2xl:px-[5rem] mb-[-40rem] md:mb-[-38rem] lg:mb-[-30rem] xl:mb-[-24rem] 2xl:mb-[-27rem] relative z-20">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          <Image
            src="/Team/team1.webp"
            width={260}
            height={260}
            alt="Team 1"
            quality={80}
          />
          <Image
            src="/Team/team0.webp"
            width={260}
            height={260}
            alt="Team 2"
            quality={80}
          />
          <Image
            src="/Team/team3.webp"
            width={260}
            height={260}
            alt="Team 3"
            quality={80}
          />
          <Image
            src="/Team/team0.webp"
            width={260}
            height={260}
            alt="Team 4"
            quality={80}
          />
          <Image
            src="/Team/team5.webp"
            width={260}
            height={260}
            alt="Team 5"
            quality={80}
          />
          <Image
            src="/Team/team0.webp"
            width={260}
            height={260}
            alt="Team 6"
            quality={80}
          />
          <Image
            src="/Team/team7.webp"
            width={260}
            height={260}
            alt="Team 7"
            quality={80}
          />
          <Image
            src="/Team/team8.webp"
            width={260}
            height={260}
            alt="Team 8"
            quality={80}
          />
          <Image
            src="/Team/team9.webp"
            width={260}
            height={260}
            alt="Team 9"
            quality={80}
          />
          <Image
            src="/Team/team10.webp"
            width={260}
            height={260}
            alt="Team 10"
            quality={80}
          />
        </div>
      </div>
      <div className="relative flex justify-center items-center bg-[url('/Bg/bgHoja.webp')] bg-no-repeat bg-center bg-[length:120vw_100%] z-10 pb-[15rem] md:pb-[15rem] lg:pb-[30rem] pt-[40rem] md:pt-[28rem] xl:py-[32rem]">
        <div className="flex flex-col-reverse justify-center items-center xl:flex-row px-[2rem] xl:px-0">
          <div className="bg-white w-full xl:w-[60rem] px-[2rem] xl:px-[5rem] py-[3rem] xl:py-[3.5rem] rounded-[4rem] xl:translate-x-[-6rem]">
            <p className="text-[1.2rem] md:text-[1.5rem] lg:text-[1.7rem] font-pragmatica uppercase leading-[2rem] md:leading-[5rem]">
              nearshoring financing
            </p>
            <p className="text-[1.2rem] lg:text-[1.5rem] xl:text-[1.7rem] font-pragmatica uppercase leading-[3rem]">
              ceo & founder of
            </p>
            <Image
              src="/Logos/equity.webp"
              width={400}
              height={400}
              alt="Equity"
              className="mb-[2rem]"
              quality={80}
            />
            <p className="text-[1.2rem] md:text-[1.5rem] lg:text-[1.6rem] font-pragmatica uppercase w-full leading-[2rem]">
              Member of business councils such as COPARMEX, ASOFOM, and DESEC
            </p>
          </div>
          <div className="relative xl:absolute xl:translate-x-[24rem] mb-[-4rem] md:mb-[-6rem] lg:mb-[-6.5rem] xl:mb-0 xl:mt-[6rem]">
            <Image
              src="/Team/presidente.webp"
              width={650}
              height={650}
              alt="Presidente"
              quality={80}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetTeam;

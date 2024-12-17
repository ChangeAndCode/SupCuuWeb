import Image from "next/image"

const MeetTeam = () => {
  return (
    <div>
        <div className="flex justify-center items-center space-x-8">
          <hr className="w-[67%] border-t-[4px] border-ColorPrincipal" />
          <Image 
                src="/logo2.png"
                width={80}
                height={80}
                alt="We are"
              />
        </div>
        <div className="ml-[2rem] mt-[4rem] lg:ml-[16rem] relative">
          <h3 className="text-[2rem] md:text-[2rem] xl:text-[3.3rem] text-ColorPrincipal font-pragmatica uppercase md:leading-[3.5rem] relative z-10 lg:w-7/12">
            This team works every day to inspire and empower entrepreneurs.
          </h3>
          <h4 className="text-[2.3rem] md:text-[4.5rem] xl:text-[7rem] text-ColorPrincipal font-pragmatica uppercase md:leading-[6rem] relative z-10">
            Meet the team
          </h4>
          <h5 className="text-[2rem] md:text-[2rem] xl:text-[3rem] text-ColorPrincipal font-pragmatica uppercase md:leading-[3.5rem] relative z-10">
            that makes our vision possible.
          </h5>
          
          {/* Texto detrás */}
          <div className="absolute inset-0 top-[6%] left-[19%] flex justify-center items-center z-0">
            <p className="text-[9rem] lg:text-[10rem] font-PerformanceMark text-white uppercase leading-[9rem] lg:leading-[9rem] whitespace-nowrap">
              the team
            </p>
          </div>
        </div>

            <div className="flex justify-end lg:mr-[13rem]">
              <div className="relative w-[500px] h-[500px]">
                <Image
                  src="/advisory.png"
                  width={500}
                  height={500}
                  alt="We are"
                  className=""
                />
                <div className="absolute inset-[5rem] md:inset-[6rem]">
                  <p className="text-[1.7rem] md:text-[2.3rem] text-white font-PerformanceMark uppercase">advisory team</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-[-17rem] px-0 lg:px-[5rem] mb-[-27rem] relative z-20">
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                <Image
                src="/Team/team1.png"
                width={260}
                height={260}
                alt="Team"
                className=""
              />
              <Image
                src="/Team/team0.png"
                width={260}
                height={260}
                alt="Team"
                className=""
              />
              <Image
                src="/Team/team3.png"
                width={260}
                height={260}
                alt="Team"
                className=""
              />
              <Image
                src="/Team/team0.png"
                width={260}
                height={260}
                alt="Team"
                className=""
              />
              <Image
                src="/Team/team5.png"
                width={260}
                height={260}
                alt="Team"
                className=""
              />
              <Image
                src="/Team/team0.png"
                width={260}
                height={260}
                alt="Team"
                className=""
              />
              <Image
                src="/Team/team7.png"
                width={260}
                height={260}
                alt="Team"
                className=""
              />
              <Image
                src="/Team/team8.png"
                width={260}
                height={260}
                alt="Team"
                className=""
              />
              <Image
                src="/Team/team9.png"
                width={260}
                height={260}
                alt="Team"
                className=""
              />
              <Image
                src="/Team/team10.png"
                width={260}
                height={260}
                alt="Team"
                className=""
              />
              </div>
            </div>
          <div className="relative flex justify-center items-center bg-[url('/Bg/bgHoja.png')] bg-no-repeat bg-center bg-[length:110vw_100%] z-10 py-[32rem]">
            <div className="flex flex-col-reverse justify-center items-center mac:flex-row lg:flex-row px-[2rem] lg:px-0">
              <div className="bg-white w-full lg:w-[60rem] px-[2rem] lg:px-[5rem] py-[3rem] lg:py-[3.5rem] rounded-[4rem] lg:translate-x-[-6rem]">
                <p className="text-[1.2rem] md:text-[1.5rem] lg:text-[1.7rem] font-pragmatica uppercase leading-[2rem] md:leading-[5rem]">nearshoring financing</p>
                <p className="text-[1.2rem] md:text-[1.5rem] lg:text-[1.7rem] font-pragmatica uppercase leading-[3rem]">ceo & founder of</p>
                <Image
                  src="/Logos/equity.png"
                  width={400}
                  height={400}
                  alt="Team"
                  className="mb-[2rem]"
                />
                <p className="text-[1.2rem] md:text-[1.5rem] lg:text-[1.6rem] font-pragmatica uppercase w-full leading-[2rem]">Member of business councils such as COPARMEX, ASOFOM, and DESEC</p>
              </div>
              <div className="mac:absolute translate-x-[1rem] mac:translate-x-[24rem] mac:mt-[6rem] lg:absolute lg:translate-x-[24rem] lg:mt-[6rem]">
                <Image 
                  src="/Team/presidente.png"
                  width={650}
                  height={650}
                  alt="Team"
                  className=""
                />
              </div>
            </div>
          </div>
    </div>
  )
}

export default MeetTeam

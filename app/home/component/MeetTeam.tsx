import Image from "next/image";
import { teamMembers } from "../data/DataTeams";
import Presidente from "./presidente";

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
        <h3 className="main-Tipography text-[1.5rem] md:text-[2.1rem] lg:text-[2.5rem] xl:text-[3rem] 2xl:text-[3.3rem] text-ColorPrincipal font-pragmatica uppercase md:leading-[3.5rem] relative z-10 xl:w-8/12 2xl:w-7/12">
          This team works every day to inspire and empower entrepreneurs.
        </h3>
        <h4 className="main-Tipography text-[2rem] md:text-[4.5rem] lg:text-[5.3rem] xl:text-[6rem] 2xl:text-[7rem] text-ColorPrincipal font-pragmatica uppercase md:leading-[6rem] relative z-10">
          Meet the team
        </h4>
        <h5 className="main-Tipography text-[2rem] md:text-[2.1rem] lg:text-[2.5rem] xl:text-[2.8rem] 2xl:text-[3.3rem] text-ColorPrincipal font-pragmatica uppercase md:leading-[3.5rem] relative z-10">
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

      <div className="flex justify-center mt-[-17rem] px-0 md:px-[3rem] lg:px-[4rem] xl:px-[8rem] 2xl:px-[5rem] mb-[-40rem] md:mb-[-38rem] lg:mb-[-30rem] xl:mb-[-24rem] 2xl:mb-[-35rem] relative z-20">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {teamMembers.map((member, index) => (
            <div key={member.id} className="relative group">
              <div className={`absolute top-0 ${
                index + 1 < teamMembers.length && teamMembers[index + 1].id < member.id 
                  ? '2xl:-left-[100%] xl:left-0' 
                  : 'left-0'
              } w-full h-full opacity-0 group-hover:opacity-100 ${
                'group-hover:h-[200%] sm:group-hover:h-[200%] md:group-hover:h-[200%] lg:group-hover:h-[200%] xl:group-hover:h-[200%] 2xl:group-hover:w-[200%] 2xl:group-hover:h-full'
              } transition-all duration-300 origin-top z-20`}>
                <div className="bg-[#EDEFF0] rounded-[5rem] w-full h-full flex flex-col justify-end items-center 2xl:justify-center 2xl:items-end p-4">
                  <div className='w-full 2xl:w-1/2 text-left pl-2 md:pl-3'>
                    <div className='bg-white flex justify-start items-center w-full rounded-full px-3 mb-4'>
                      <h3 className="main-Tipography text-ColorPrincipal text-[0.8rem] sm:text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] 2xl:text-[1.3rem] uppercase mb-1 md:mb-2 line-clamp-1">{member.name}</h3>
                    </div>
                    <p className="main-Tipography uppercase text-[0.8rem] sm:text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] 2xl:text-[1.3rem] mb-1 md:mb-2 line-clamp-1">{member.position}</p>
                    <p className="font-poppins text-[0.8rem] sm:text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] 2xl:text-[1.2rem] uppercase line-clamp-3">{member.description}</p>
                  </div>
                </div>
              </div>
              <div className={`relative transition-all duration-300 ${
                member.id === teamMembers[index].id ? 'group-hover:z-30' : 'z-10'
              }`}>
                <Image
                  src={member.image}
                  width={260}
                  height={260}
                  alt={`Team ${member.id}`}
                  quality={80}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex justify-center items-center bg-[url('/Bg/bgHoja.webp')] bg-no-repeat bg-center bg-cover z-10 pb-[15rem] md:pb-[15rem] lg:pb-[30rem] pt-[40rem] md:pt-[25rem] xl:py-[50rem]">
        <Presidente />
      </div>
    </div>
  );
};

export default MeetTeam;

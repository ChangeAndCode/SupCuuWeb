import Entrepreneurship from "./Entrepreneurship";
import Innovation from "./Innovation";
import Investment from "./investiment";
import Sensitized from "./Sensitized";

const Transformative: React.FC = () => {
  return (
    <>
      <div className="flex justify-start px-[3rem] sm:px-[6.5rem] md:px-[8rem] lg:px-[10rem] xl:px-[12rem] xl-md:px-[14rem] 2xl:px-[16rem] translate-y-[-2rem] md:translate-y-[-3.3rem] lg:translate-y-[-4.3rem] xl:translate-y-[-5rem] xl-md:translate-y-[-6rem] 2xl:translate-y-[-6.3rem]">
        <div>
          <h2 className="main-Typography text-[2rem] md:text-[3.5rem] lg:text-[4.5rem] xl:text-[5.5rem] xl-md:text-[6rem] 2xl:text-[6.5rem] font-semibold text-ColorPrincipal w-3/5 leading-[2.5rem] md:leading-[4rem] lg:leading-[5rem] xl:leading-[6rem] xl-md:leading-[6.5rem] 2xl:leading-[7rem]">
            with transformative results
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xl-md:grid-cols-4 gap-y-8 gap-x-6 md:gap-x-8 lg:gap-x-10 xl:gap-x-12 xl-md:gap-x-14 px-[3rem] sm:px-[4rem] md:px-[5rem] lg:px-[6rem] xl:px-[7rem] xl-md:px-[9rem] 2xl:px-[10rem]">
        <Investment />
        <Sensitized />
        <Innovation />
        <Entrepreneurship />
      </div>
      <div className="flex justify-end relative z-10 px-[1rem] md:px-[2rem] lg:px-[3rem] xl:px-[4rem] xl-md:px-[5rem] 2xl:px-[6rem]">
        <p className="text-[3rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] xl-md:text-[12rem] 2xl:text-[14rem] text-[#EDEFF0] font-PerformanceMark z-20">
          partners
        </p>
      </div>
    </>
  );
};

export default Transformative;

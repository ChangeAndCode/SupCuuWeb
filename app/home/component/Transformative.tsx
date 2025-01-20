import Entrepreneurship from "./Entrepreneurship";
import Innovation from "./Innovation";
import Investment from "./investiment";
import Sensitized from "./Sensitized";

const Transformative: React.FC = () => {
  return (
    <>
      <div className="flex justify-start px-[3rem] sm:px-[6.5rem] md:px-[10.5rem] lg:px-[13rem] xl:px-[11rem] 2xl:px-[16rem] translate-y-[-2rem] md:translate-y-[-3.8rem] lg:translate-y-[-4.9rem] xl:translate-y-[-5.9rem] 2xl:translate-y-[-6.8rem]">
        <div>
          <h2 className="main-Typography text-[2rem] md:text-[4rem] lg:text-[5rem] xl:text-[7rem] 2xl:text-[8rem] font-semibold text-ColorPrincipal w-8/12 leading-[2.5rem] md:leading-[4.5rem] lg:leading-[6rem] xl:leading-[7rem]">
            with transformative results
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 md:px-[5rem] lg:px-[10rem] xl:px-[5rem] 2xl:px-[15rem]">
        <Investment />
        <Sensitized />
        <Innovation />
        <Entrepreneurship />
      </div>
      <div className="flex justify-end relative z-10 px-[1rem] md:px-[2rem] xl:px-[3rem]">
        <p className="text-[4rem] md:text-[9rem] lg:text-[12rem] xl:text-[16rem] 2xl:text-[20rem] text-[#EDEFF0] font-PerformanceMark z-20">
          partners
        </p>
      </div>
    </>
  );
};

export default Transformative;

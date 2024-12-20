import Image from 'next/image';

const Transformative = () => {
  return (
    <>
      <div className="flex justify-end pr-[2rem] md:pr-[4rem] lg:px-[3rem] translate-y-[-2rem] md:translate-y-[-3.8rem] lg:translate-y-[-5rem]">
        <h2 className="text-[2rem] md:text-[4rem] lg:text-[5rem] xl:text-[7rem] font-semibold text-ColorPrincipal text-end w-8/12 md:leading-[4.5rem] lg:leading-[6rem]">
          with transformative results
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 md:px-[10rem] 2xl:px-[15rem] gap-6">
        <div className="flex flex-col items-center space-y-6">
          <h3 className="text-[2rem] font-PerformanceMark text-ColorPrincipal">Investment</h3>
          <Image src="/Transformative/Investment1.webp" alt="Investment 1" width={300} height={200} quality={80} />
          <Image src="/Transformative/Investment2.webp" alt="Investment 2" width={300} height={200} quality={80} />
          <Image src="/Transformative/Investment3.webp" alt="Investment 3" width={300} height={200} quality={80} />
        </div>
        <div className="flex flex-col items-center space-y-6">
          <h3 className="text-[2rem] font-PerformanceMark text-ColorPrincipal">Sensitized</h3>
          <Image src="/Transformative/Sensitized1.webp" alt="Sensitized 1" width={300} height={200} quality={80} />
          <Image src="/Transformative/Sensitized2.webp" alt="Sensitized 2" width={300} height={200} quality={80} />
          <Image src="/Transformative/Sensitized3.webp" alt="Sensitized 3" width={300} height={200} quality={80} />
          <Image src="/Transformative/Sensitized4.webp" alt="Sensitized 4" width={300} height={200} quality={80} />
        </div>
        <div className="flex flex-col items-center space-y-6">
          <h3 className="text-[2rem] font-PerformanceMark text-ColorPrincipal">Innovation</h3>
          <Image src="/Transformative/Innovation1.webp" alt="Innovation 1" width={300} height={200} quality={80} />
          <Image src="/Transformative/Innovation2.webp" alt="Innovation 2" width={300} height={200} quality={80} />
          <Image src="/Transformative/Innovation3.webp" alt="Innovation 3" width={300} height={200} quality={80} />
        </div>
        <div className="flex flex-col items-center space-y-6">
          <h3 className="text-[2rem] font-PerformanceMark text-ColorPrincipal">Entrepreneurship</h3>
          <Image src="/Transformative/Entrepreneurship1.webp" alt="Entrepreneurship 1" width={300} height={200} quality={80} />
          <Image src="/Transformative/Entrepreneurship2.webp" alt="Entrepreneurship 2" width={300} height={200} quality={80} />
          <Image src="/Transformative/Entrepreneurship3.webp" alt="Entrepreneurship 3" width={300} height={200} quality={80} />
        </div>
      </div>
      <div className="flex justify-end relative z-10">
        <p className="text-[4rem] md:text-[9rem] lg:text-[12rem] xl:text-[16rem] 2xl:text-[20rem] text-[#EDEFF0] font-PerformanceMark z-20">
          partners
        </p>
      </div>
    </>
  );
};

export default Transformative;

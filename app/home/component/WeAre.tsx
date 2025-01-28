const WeAre: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <h2 className="text-ColorPrincipal font-PerformanceMark translate-x-5 md:translate-x-[8rem] lg:translate-x-[10rem] -mb-[10rem] md:-mb-[11rem] lg:-mb-[14rem] xl:-mb-[14rem] 2xl:-mb-[16rem] text-[6rem] md:text-[8rem] lg:text-[11rem] xl:text-[14rem] 2xl:text-[20rem]">
        We are
      </h2>
      <div className="flex items-center bg-[url('/Bg/bgWeAre.webp')] bg-no-repeat bg-center bg-cover z-10 relative px-[2rem] lg:px-[6rem] xl:px-[4rem] 2xl:px-[8rem] py-[12rem] md:py-[14rem] lg:py-[16rem] xl:py-[15rem]">
        <p className="uppercase font-poppins font-semibold text-white text-2xl md:text-[2.3rem] lg:text-[3rem] xl:text-[2rem] 2xl:text-[2.8rem] w-full xl:w-7/12 2xl:w-8/12 leading-[1.7rem] md:leading-[2.7rem] lg:leading-[3.2rem] 2xl:leading-[3.2rem]">
          a collective organization designed to boost tech entrepreneurship in Chihuahua.{" "}
          <span className="font-bold font-pragmatica main-Typography">By connecting with us, you access an entire ecosystem</span> ready to support you at any stage of your entrepreneurial journey—whether to grow your own venture, invest, or strengthen the ecosystem.
        </p>
      </div>
    </div>
  );
};

export default WeAre;

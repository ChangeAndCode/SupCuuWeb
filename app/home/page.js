import Image from 'next/image';

const Home = () => {
  return (
    <>
      <div className="px-14 lg:px-32 py-32 md:py-48">
        <h2 className="font-PerformanceMark xs:text-[1rem] sm:text-[3rem] md:text-[2.5rem] lg:text-[2.8rem] xl:text-[2rem] xl-md:text-[3rem] 2xl:text-[5rem] md:leading-[4rem] lg:leading-[5rem] xl-md:leading-[6rem] xl:leading-[7rem] text-white uppercase">
          Building a stronger
        </h2>
        <p className="font-pragmatica xs:text-[1.3rem] sm:text-[3rem] md:text-[3rem] lg:text-[3.8rem] xl:text-[7rem] xl-md:text-[5rem] 2xl:text-[7rem] md:leading-[4rem] lg:leading-[6rem] xl-md:leading-[6.5rem] xl:leading-[7rem] text-white uppercase">
          technology-based entrepreneurial ecosystem
        </p>
        <p className="font-PerformanceMark xs:text-[1rem] sm:text-[3rem] md:text-[2.5rem] lg:text-[2.8rem] xl-md:text-[3rem] 2xl:text-[5rem] md:leading-[4rem] lg:leading-[5rem] xl-md:leading-[6rem] xl:leading-[7rem] text-white uppercase">
          in chihuahua
        </p>
        <Image
          src="/etiqueta.webp"
          width={200}
          height={200}
          alt="We are"
          className="absolute hidden md:block md:top-[21rem] lg:top-[25rem] xl:top-[29rem] xl-md:top-[27rem] 2xl-md:top-[30rem] right-[4rem] md:right-[15rem] lg:right-[17rem] xl:right-[32rem] 2xl:right-[48rem]"
          quality={80}
          priority
        />
      </div>
    </>
  );
};

export default Home;

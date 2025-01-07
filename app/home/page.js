import Image from 'next/image';

const Home = () => {
  return (
    <div className="px-14 lg:px-24 xl:px-32 py-32 md:py-48">
      <div className="max-w-[1920px] mx-auto w-full">
        <h2 className="font-PerformanceMark xs:text-[1rem] sm:text-[1.2rem] md:text-[2.5rem] lg:text-[2.8rem] xl:text-[2rem] xl-md:text-[3rem] 2xl:text-[5rem] md:leading-[3.5rem] lg:leading-[5rem] xl:leading-[5rem] 2xl:leading-[7rem] text-white uppercase">
          Building a stronger
        </h2>
        <p className="main-Tipography font-pragmatica xs:text-[1.3rem] sm:text-[1.5rem] md:text-[3rem] lg:text-[3.8rem] xl:text-[5rem] 2xl:text-[7rem] md:leading-[3.5rem] lg:leading-[5rem] xl:leading-[5rem] 2xl:leading-[7rem] text-white uppercase">
          technology-based&nbsp;
          <span className="relative inline-block">
            <span className="pl-[10px]">entrepreneurial</span>
              <Image
                src="/etiqueta.webp"
                width={180}
                height={180}
                alt="We are"
                className="absolute hidden md:block top-[50%] transform -translate-x-[-380%] z-10"
                style={{ width: "11vw", height: "auto" }}
                quality={80}
                priority
              />
          </span>
          ecosystem
        </p>
        <p className="font-PerformanceMark xs:text-[1rem] sm:text-[1.2rem] md:text-[2.5rem] lg:text-[2.8rem] xl-md:text-[3rem] 2xl:text-[5rem] md:leading-[3.5rem] lg:leading-[5rem] xl:leading-[5rem] 2xl:leading-[7rem] text-white uppercase">
          in chihuahua
        </p>
      </div>
    </div>
  );
};

export default Home;

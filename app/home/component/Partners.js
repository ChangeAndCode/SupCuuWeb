import Image from 'next/image';

const Partners = () => {
  return (
    <div className="relative pb-16">
      <div className="flex justify-end">
        <div className="relative w-[1300px] h-[900px]">
          <Image
            src="/Bg/bgTitulo.webp"
            width={1300}
            height={900}
            alt="Bg Titulo"
            quality={80}
          />
          <div className="absolute inset-[3.5rem] sm:inset-[4.4rem] md:inset-[7.4rem] lg:inset-[9rem] xl:inset-[11.5rem] 2xl:inset-[11.5rem]">
            <p className="main-Tipography text-white text-[.8rem] xs:text-[.7rem] sm:text-[1rem] md:text-[1.6rem] lg:text-[2rem] xl:text-[2.4rem] 2xl:text-[2.7rem] font-pragmatica uppercase">
              Our community’s growing daily
            </p>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 flex justify-center items-center mt-[-8rem] sm:mt-[-2rem] md:mt-[2rem] lg:mt-[4rem] xl:mt-[10rem] 2xl:mt-[10rem] z-10">
        <Image
          src="/tabla.webp"
          width={1400}
          height={1400}
          alt="Tabla"
          quality={80}
        />
      </div>
      <div>
        <p className="text-[1.8rem] md:text-[2.5rem] lg:text-[2.8rem] xl:text-[2.8rem] 2xl:text-[3.5rem] text-ColorPrincipal font-pragmatica w-full md:w-10/12 lg:w-9/12 xl:w-7/12 2xl:w-8/12 leading-[2rem] lg:leading-[2.5rem] xl:leading-[3rem] 2xl:leading-[3.5rem] mt-[-37rem] sm:mt-[-30rem] md:mt-[-15rem] lg:mt-[-3rem] xl:mt-[10rem] 2xl:mt-[11rem] pl-[2rem] xl:pl-[7rem] 2xl:pl-[19rem]">
          Thanks to the collaboration of our partner companies, all our work is possible.
        </p>
      </div>
    </div>
  );
};

export default Partners;

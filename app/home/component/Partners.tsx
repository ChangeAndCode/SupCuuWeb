import Image from 'next/image';

const Partners: React.FC = () => {
  return (
    <div className="pb-16">
      <div className="flex justify-end">
        <div className="relative w-[1300px] h-[130px] sm:h-[160px] md:h-[230px] lg:h-[260px] xl:h-[320px] 2xl:h-[400px] 4xl:w-[1800px] 4xl:h-[400px]">
          <Image
            src="/Bg/bgTitulo.webp"
            width={1300}
            height={600}
            alt="Bg Titulo"
            quality={80}
            className="h-auto w-[350px] sm:w-[450px] md:w-[600px] lg:w-[800px] xl:w-[1000px] 2xl:w-[1300px] ml-auto"
          />
          <div className="absolute inset-[3.2rem] sm:inset-[4rem] md:inset-[5rem] lg:inset-[7rem] xl:inset-[9rem] 2xl:inset-[11.5rem] right-0 flex justify-end">
            <p className="main-Tipography text-white text-[.8rem] xs:text-[.7rem] sm:text-[1rem] md:text-[1.3rem] lg:text-[1.8rem] xl:text-[2.2rem] 2xl:text-[2.7rem] font-pragmatica uppercase text-nowrap pr-4">
              Our community&rsquo;s growing daily
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/tabla.webp"
          width={1400}
          height={1400}
          alt="Tabla"
          quality={80}
          className="w-auto h-auto xl:w-[1300px] 2xl:w-[1400px] 4xl:w-[2200px] z-10"
          style={{ height: 'auto' }}
        />
      </div>
      <div>
        <p className="main-Tipography text-[1.8rem] md:text-[2.5rem] lg:text-[2.8rem] xl:text-[2.8rem] 2xl:text-[3.5rem] 4xl:text-[4rem] text-ColorPrincipal font-pragmatica w-full md:w-10/12 lg:w-9/12 xl:w-7/12 2xl:w-8/12 leading-[2rem] lg:leading-[2.5rem] xl:leading-[3rem] 2xl:leading-[3.5rem] pl-[2rem] xl:pl-[7rem] 2xl:pl-[19rem]">
          Thanks to the collaboration of our partner companies, all our work is possible.
        </p>
      </div>
    </div>
  );
};

export default Partners;

import Image from 'next/image';

const Partners = () => {
  return (
    <div className='relative pb-24'>
      <div className='flex justify-end'>
        <div className='relative w-[1300px] h-[900px]'>
          <Image
            src='/Bg/bgTitulo.png'
            width={1300}
            height={900}
            alt='Bg Titulo'
            quality={80}
          />
          <div className='absolute inset-[3.5rem] md:inset-[6.3rem] lg:inset-[11.5rem] lg:pl-[3rem]'>
            <p className='text-[.8rem] md:text-[1.6rem] lg:text-[2.4rem] text-white font-pragmatica uppercase'>Our community’s growing daily</p>
          </div>
        </div>
      </div>
      <div className='absolute inset-0 flex justify-center items-center mt-[-15rem] md:mt-[-5rem] lg:mt-[10rem] z-10'>
        <Image
          src='/tabla.png'
          width={1400}
          height={1400}
          alt='Tabla'
          quality={80}
        />
      </div>
      <div>
        <p className='text-[2rem] md:text-[2.5rem] text-ColorPrincipal font-pragmatica w-10/12 lg:w-6/12 leading-[2.5rem] mt-[-30rem] md:mt-[-15rem] lg:mt-[10rem] pl-[3rem] lg:pl-[19rem]'>Thanks to the collaboration of our partner companies, all our work is possible.</p>
      </div>
    </div>
  );
};

export default Partners;

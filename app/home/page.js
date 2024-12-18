import Image from 'next/image';
const Home = () => {
  return (
    <>
        <div className='px-8 lg:px-32 py-24 md:py-48'>
          <h2 className='font-PerformanceMark text-2xl md:text-[3.8rem] mac:text-[5rem] lg:text-[6rem] md:leading-[4rem] lg:leading-[7rem] text-white uppercase'>Building a stronger</h2>
          <p className='text-3xl font-pragmatica md:text-[3.8rem] mac:text-[5rem] lg:text-[8rem] md:leading-[4rem] lg:leading-[6.5rem] text-white uppercase'>technology-based</p>
          <p className='text-3xl font-pragmatica md:text-[3.8rem] mac:text-[5rem] lg:text-[8rem] md:leading-[4rem] lg:leading-[6.5rem] text-white uppercase'>entrepreneurial</p>
          <p className='text-3xl font-pragmatica md:text-[3.8rem] mac:text-[5rem] lg:text-[8rem] md:leading-[4rem] lg:leading-[6.5rem] text-white uppercase'>ecosystem</p>
          <p className='font-PerformanceMark text-[2rem] md:text-[3rem] mac:text-[4rem] lg:text-[6rem] md:leading-[4rem] lg:leading-[7rem] text-white uppercase'>in chihuahua</p>
          <Image 
            src='/etiqueta.png'
            width={200}
            height={200}
            alt='We are'
            className='absolute hidden md:block md:top-[30rem] md:right-[6rem] mac:top-[28rem] mac:right-[32rem] xl:top-[29rem] xl:right-[41rem]'
            quality={80}
          />
        </div>
    </>
  )
}

export default Home;
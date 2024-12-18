import Image from 'next/image';

const TimeLine = () => {
  return (
    <div className='relative'>
      <div className='flex justify-center'>
        <div className='transform lg:translate-x-0'>
          <div className='flex justify-center'>
            <div className='flex flex-col lg:flex-row translate-x-[-10.8rem] md:translate-x-[-21.5rem] lg:translate-x-0 lg:translate-y-[-2.5rem] absolute'>
              <p className='text-sm md:text-2xl translate-y-[19.5rem] md:translate-y-[23rem] lg:translate-y-0 mac:translate-x-[-9.7rem] lg:translate-x-[-13.7rem]'>2019</p>
              <p className='text-sm md:text-2xl translate-y-[34rem] md:translate-y-[40.5rem] lg:translate-y-0 mac:translate-x-[7.5rem] lg:translate-x-[10.3rem]'>2022</p>
            </div>
            <div className='mac:w-[1200px] mac:h-[1100px] lg:w-[1600px] lg:h-[1500px] absolute'>
            <Image
              src='/barra.png'
              alt='Timeline bar'
              width={1600}
              height={1500}
              className='hidden lg:block'
              quality={80}
            />
            </div>
          </div>
          <div>
            <div className='w-[20px] h-[20px] md:w-[25px] md:h-[25px] translate-x-[-9.5rem] md:translate-x-[-18rem]'>
            <Image
              src='/barraV.png'
              alt='Timeline bar'
              width={25}
              height={25}
              className='block lg:hidden'
              quality={80}
            />
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row mac:gap-[5.5rem] xl:gap-[9rem] justify-center px-4 lg:px-0 lg:mt-[3rem] ml-[3rem] md:ml-[8rem] lg:ml-0'>
        <div className='flex flex-col w-full lg:w-2/12 tranform translate-y-[-1rem] md:translate-y-[-.4rem] lg:translate-y-0 mac:translate-x-0 lg:translate-x-[1.7rem]'>
          <Image
            src='/Logos/desec.png'
            width={200}
            height={100}
            alt='DESEC logo'
            quality={80}
          />

          <p className='text-[1.3rem] md:text-[1.5rem] mt-4 uppercase w-[18rem] text-left'>
            <span className='font-bold'>DESEC</span> transforming Chihuahua&rsquo;s economy over the past 50 years.
          </p>

        </div>

        <div className='flex flex-col w-full lg:w-2/12 mt-6 lg:mt-0 translate-y-[3.7rem] md:translate-y-[5rem] lg:translate-y-0 mac:translate-x-[1rem] lg:translate-x-[1.7rem]'>
          <Image
            src='/Logos/futura.png'
            width={200}
            height={100}
            alt='Futura logo'
            quality={80}
          />
          <p className='text-[1.3rem] md:text-[1.5rem] mt-4 uppercase w-[15rem] md:w-[13rem] text-left'>
            <span className='font-bold'>DESEC</span> launches <span className='font-bold'>Chihuahua Futura</span> to drive innovation and technology.
          </p>
        </div>

        <div className='flex flex-col w-full lg:w-4/12 mt-6 lg:mt-0 translate-y-[4rem] md:translate-y-[8rem] lg:translate-y-0 mac:translate-x-[1.5rem]'>
          <div className='flex flex-wrap justify-start'>
            <Image
              src='/Logos/mit.png'
              width={200}
              height={100}
              alt='MIT logo'
              quality={80}
            />
            <Image
              src='/Logos/startup.png'
              width={200}
              height={100}
              alt='Startup logo'
              quality={80}
            />
          </div>
          <p className='text-[1.3rem] md:text-[1.5rem] uppercase mt-4 w-full md:w-[32rem] text-left'>
            Chihuahua joins the <span className='font-bold'>MIT REAP</span> program. Local leaders gather data, define a strategic plan, and create a collective organization to transform the ecosystem called <span className='font-bold'>STARTUP CHIHUAHUA</span>.
          </p>
        </div>
      </div >
    </div >
  );
};

export default TimeLine;

import Image from 'next/image'

const Possible = () => {
  return (
    <>
      <h2 className='font-PerformanceMark text-ColorPrincipal text-[3rem] md:text-[3.5rem] lg:text-[4.5rem] xl:text-[6rem] 2xl:text-[8rem] text-center'>This is possible thanks to:</h2>
      <div className='flex flex-col md:flex-row md:flex-wrap xl:flex-nowrap justify-center xl:justify-around items-center gap-8'>
        <div className='w-full md:w-[45%] xl:w-auto flex justify-center'>
          <div className='relative w-[200px] h-[150px] md:w-[250px] md:h-[180px] xl:w-[250px] xl:h-[170px]'>
            <Image
              src='/carrusel/chihuahua.webp'
              alt='Company Logo'
              fill
              className='object-contain'
              quality={80}
              loading='eager'
              placeholder='blur'
              blurDataURL='/carrusel/chihuahua.webp'
            />
          </div>
        </div>
        <div className='w-full md:w-[45%] xl:w-auto flex justify-center'>
          <div className='relative w-[200px] h-[150px] md:w-[250px] md:h-[180px] xl:w-[250px] xl:h-[170px]'>
            <Image
              src='/carrusel/gobierno.webp'
              alt='Company Logo'
              fill
              className='object-contain'
              quality={80}
              loading='eager'
              placeholder='blur'
              blurDataURL='/carrusel/gobierno.webp'
            />
          </div>
        </div>
        <div className='w-full md:w-[45%] xl:w-auto flex justify-center'>
          <div className='relative w-[200px] h-[150px] md:w-[250px] md:h-[180px] xl:w-[250px] xl:h-[170px]'>
            <Image
              src='/carrusel/madata.webp'
              alt='Company Logo'
              fill
              className='object-contain'
              quality={80}
              loading='eager'
              placeholder='blur'
              blurDataURL='/carrusel/madata.webp'
            />
          </div>
        </div>
        <div className='w-full md:w-[45%] xl:w-auto flex justify-center'>
          <div className='relative w-[200px] h-[150px] md:w-[250px] md:h-[180px] xl:w-[250px] xl:h-[170px]'>
            <Image
              src='/carrusel/ilum.webp'
              alt='Company Logo'
              fill
              className='object-contain'
              quality={80}
              loading='eager'
              placeholder='blur'
              blurDataURL='/carrusel/ilum.webp'
            />
          </div>
        </div>
      </div>
      <div className='flex flex-col md:flex-row flex-wrap justify-center items-center gap-8 mt-8'>
        <div className='w-full md:w-[45%] xl:w-auto flex justify-center'>
          <div className='relative w-[200px] h-[150px] md:w-[250px] md:h-[180px] xl:w-[250px] xl:h-[170px]'>
            <Image
              src='/carrusel/orion.webp'
              alt='Company Logo'
              fill
              className='object-contain'
              quality={80}
              loading='eager'
              placeholder='blur'
              blurDataURL='/carrusel/orion.webp'
            />
          </div>
        </div>
        <div className='w-full md:w-full xl:w-auto flex justify-center'>
          <div className='relative w-[300px] h-[200px] md:w-[500px] md:h-[200px] xl:w-[500px] xl:h-[170px]'>
            <Image
              src='/carrusel/tec.webp'
              alt='Company Logo'
              fill
              className='object-contain'
              quality={80}
              loading='eager'
              placeholder='blur'
              blurDataURL='/carrusel/tec.webp'
            />
          </div>
        </div>
        <div className='w-full md:w-[45%] xl:w-auto flex justify-center'>
          <div className='relative w-[200px] h-[150px] md:w-[250px] md:h-[180px] xl:w-[250px] xl:h-[170px]'>
            <Image
              src='/carrusel/alfa.webp'
              alt='Company Logo'
              fill
              className='object-contain'
              quality={80}
              loading='eager'
              placeholder='blur'
              blurDataURL='/carrusel/alfa.webp'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Possible

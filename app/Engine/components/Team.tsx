import Image from 'next/image'

const Team = () => {
  return (
    <>
        <div className='flex justify-center'>
            <Image
                src='/engineTeam/titulo.webp'
                alt='Company Logo'
                width={670}
                height={570}
                quality={80}
                loading='lazy'
                placeholder='blur'
                blurDataURL='/engineTeam/titulo.webp'
            />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 lg:gap-16 px-4 md:px-8 max-w-7xl mx-auto'>
            <div className='flex flex-col items-center h-full'>
                <Image
                    src='/engineTeam/1.webp'
                    alt='Company Logo'
                    width={300}
                    height={200}
                    quality={80}
                    loading='lazy'
                    placeholder='blur'
                    blurDataURL='/engineTeam/1.webp'
                    className='w-auto h-[320px] object-cover'
                />
                <div className='w-[300px]'>
                    <p className='font-pragmatica main-Tipography uppercase text-[1.4rem]'>Kevin Koym</p>
                    <p className='font-poppins uppercase text-[1.2rem]'>CEO TECH RANCH</p>
                </div>
            </div>
            <div className='flex flex-col items-center h-full'>
                <Image
                    src='/engineTeam/2.webp'
                    alt='Company Logo'
                    width={300}
                    height={200}
                    quality={80}
                    loading='lazy'
                    placeholder='blur'
                    blurDataURL='/engineTeam/2.webp'
                    className='w-auto h-[320px] object-cover'
                />
                <div className='w-[300px]'>
                    <p className='font-pragmatica main-Tipography uppercase text-[1.4rem]'>Angela Pack Zia</p>
                    <p className='font-poppins uppercase text-[1.2rem]'>Economic Development Consultant, Tech Ranch.</p>
                </div>
            </div>
            <div className='flex flex-col items-center h-full'>
                <Image
                    src='/engineTeam/3.webp'
                    alt='Company Logo'
                    width={300}
                    height={200}
                    quality={80}
                    loading='lazy'
                    placeholder='blur'
                    blurDataURL='/engineTeam/3.webp'
                    className='w-auto h-[320px] object-cover'
                />
                <div className='w-[300px]'>
                    <p className='font-pragmatica main-Tipography uppercase text-[1.4rem]'>Emma Reyes</p>
                    <p className='font-poppins uppercase text-[1.2rem]'>program Manager, Tech Ranch</p>
                </div>
            </div>
            <div className='flex flex-col items-center h-full'>
                <Image
                    src='/engineTeam/4.webp'
                    alt='Company Logo'
                    width={300}
                    height={200}
                    quality={80}
                    loading='lazy'
                    placeholder='blur'
                    blurDataURL='/engineTeam/4.webp'
                    className='w-auto h-[320px] object-cover'
                />
                <div className='w-[300px]'>
                    <p className='font-pragmatica main-Tipography uppercase text-[1.4rem]'>Andrés Guzmán</p>
                    <p className='font-poppins uppercase text-[1.2rem]'>CEO, Startup Chihuahua</p>
                </div>
            </div>
            <div className='flex flex-col items-center h-full'>
                <Image
                    src='/engineTeam/5.webp'
                    alt='Company Logo'
                    width={300}
                    height={200}
                    quality={80}
                    loading='lazy'
                    placeholder='blur'
                    blurDataURL='/engineTeam/5.webp'
                    className='w-auto h-[320px] object-cover'
                />
                <div className='w-[300px]'>
                    <p className='font-pragmatica main-Tipography uppercase text-[1.4rem]'>Ana Victoria Gutiérrez</p>
                    <p className='font-poppins uppercase text-[1.2rem]'>Ecosystem Intelligence, Startup Chihuahua</p>
                </div>
            </div>
            <div className='flex flex-col items-center h-full'>
                <Image
                    src='/engineTeam/6.webp'
                    alt='Company Logo'
                    width={300}
                    height={200}
                    quality={80}
                    loading='lazy'
                    placeholder='blur'
                    blurDataURL='/engineTeam/6.webp'
                    className='w-auto h-[320px] object-cover'
                />
                <div className='w-[300px]'>
                    <p className='font-pragmatica main-Tipography uppercase text-[1.4rem]'>Estefanía Sansón</p>
                    <p className='font-poppins uppercase text-[1.2rem]'>Experiences Manager, Startup Chihuahua</p>
                </div>
            </div>
            <div className='flex justify-center col-span-full'>
                <div className='flex flex-col items-center h-full'>
                    <Image
                        src='/engineTeam/7.webp'
                        alt='Company Logo'
                        width={300}
                        height={200}
                        quality={80}
                        loading='lazy'
                        placeholder='blur'
                        blurDataURL='/engineTeam/7.webp'
                        className='w-auto h-[320px] object-cover'
                    />
                    <div className='w-[300px]'>
                        <p className='font-pragmatica main-Tipography uppercase text-[1.4rem]'>Ulises Fernández</p>
                        <p className='font-poppins uppercase text-[1.2rem]'>Innovation and Economic Development Secretariat, Chihuahua State Government</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='absolute flex justify-center lg:justify-between w-full'>
        <Image
              src='/alwais/manzana.webp'
              alt='Company Logo'
              width={390}
              height={290}
              quality={80}
              loading='lazy'
              placeholder='blur'
              blurDataURL='/alwais/manzana.webp'
              className='hidden lg:block'
            />
            <Image
              src='/alwais/cinta.webp'
              alt='Company Logo'
              width={670}
              height={270}
              quality={80}
              loading='lazy'
              placeholder='blur'
              blurDataURL='/alwais/cinta.webp'
            />
      </div>
    </>
  )
}

export default Team

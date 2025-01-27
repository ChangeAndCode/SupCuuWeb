import Image from "next/image"

const World = () => {
  return (
    <div className='relative flex items-center pb-[5rem] px-[2rem] md:px-[4.6rem] lg:px-[6.5rem] xl:px-[9rem] 2xl:px-[15rem] 3xl:px-[17rem]'>
        <div>
            <h3 className='font-pragmatica main-Tipography text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] xl:text-[3.5rem] 2xl:text-[3.8rem] 3xl:text-[5rem]
                ml-0 md:ml-[-3rem] lg:ml-[-5rem] xl:ml-[-7rem] 2xl:ml-[-7rem]
                uppercase text-ColorPrincipal leading-tight md:leading-[4rem] lg:leading-[5rem] xl:leading-[6rem]'>
                The world is<br/> open to those with<br/>
                <span className='font-PerformanceMark text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[6.5rem] 2xl:text-[7.3rem] 3xl:text-[9.5rem]'>
                    great ideas
                </span><br/>
                and the courage to<br/> pursue them <span className='font-poppins text-[1.5rem]'>-Paul Graham</span>
            </h3>
        </div>
        <div className='hidden md:block absolute right-0 md:right-[3rem] lg:right-7 xl:right-[2rem] 2xl:right-[2rem] 3xl:right-[7rem] md:bottom-[-5rem] lg:bottom-[-2rem]
            xl:bottom-[-8.5rem] 2xl:bottom-[-8rem] w-[500px] h-[600px] md:w-[380px] md:h-[500px] lg:w-[500px] lg:h-[500px] 
            xl:w-[600px] xl:h-[800px] 2xl:w-[700px] 2xl:h-[800px]'>
            <Image
                src='/mundo.webp'
                alt='Company Logo'
                fill
                className='object-contain'
                quality={80}
                loading='lazy'
            />
        </div>
    </div>
  )
}

export default World

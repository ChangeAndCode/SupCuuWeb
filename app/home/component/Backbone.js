import Image from 'next/image'


const Backbone = () => {
  return (
    <div className='relative flex flex-col items-center lg:pb-[10rem] xl:pb-0' >
        <div className='absolute z-20 mt-[7rem] md:mt-[18rem] lg:mt-[5rem] xl:mt-0'>
            <Image 
                src='/Team/backbone.webp'
                alt='Team Backbone'
                width={1430}
                height={1430}
                quality={80}
            />
        </div>
        <div className='relative z-30 mt-[19rem] md:mt-[43rem]  lg:mt-[36rem] xl:mt-[43rem] px-[1rem]'>
            <div className='absolte xl:h-[1350px] xl:w-[1350px]'>
              <Image 
                  src='/globo.webp'
                  alt='Team Backbone'
                  width={1350}
                  height={1350}
                  quality={80}
              />
            </div>
            <div className='absolute inset-4 md:inset-[3.5rem] xl:inset-[6rem] py-[.5rem] md:py-0 px-[1rem] md:px-0'>
                <p className='text-[.5rem] md:text-[1rem] lg:text-[2.5rem] xl:text-[3rem] xl:leading-[3rem] text-ColorPrincipal font-pragmatica uppercase'>Hello, I&rsquo;m Andres.</p>
                <p className='text-[.5rem] md:text-[1rem] lg:text-[1.3rem] xl:text-[1.5rem] xl:mb-[1.5rem] text-ColorPrincipal font-pragmatica uppercase'>Director of Startup Chihuahua.</p>
                <p className='text-[.5rem] md:text-[1rem] lg:text-[1.3rem] xl:text-[1.5rem] text-ColorPrincipal font-pragmatica uppercase md:mb-[.7rem] xl:mb-[1.5rem]'>Do you have a strategic project or are you looking to financially support the ecosystem?</p>
                <p className='text-[.5rem] md:text-[1rem] lg:text-[1.3rem] xl:text-[1.5rem] text-ColorPrincipal font-pragmatica uppercase md:mb-[.7rem] xl:mb-[1.5rem]'>Let&rsquo;s schedule a meeting. Feel free to send us an email at&nbsp;
                  <a
                    href="mailto:hola@startupchihuahua.com" 
                    className='text-[.8rem] md:text-[1.3rem] lg:text-[1.5rem] xl:text-[1.8rem] text-blue-600 hover:underline'
                  >hola@startupchihuahua.com</a>.
                </p>

          </div>
        </div>
    </div>
  )
}

export default Backbone

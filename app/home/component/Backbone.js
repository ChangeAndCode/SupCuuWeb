import Image from 'next/image'


const Backbone = () => {
  return (
    <div className='relative flex flex-col items-center'>
        <div className='absolute  z-20'>
            <Image 
                src='/Team/backbone.png'
                alt='Team Backbone'
                width={1430}
                height={1430}
                quality={80}
            />
        </div>
        <div className='relative z-30 mt-[12rem] md:mt-[23rem] lg:mt-[43rem] px-[1rem]'>
            <div className='absolte lg:h-[1350px] lg:w-[1350px]'>
              <Image 
                  src='/globo.png'
                  alt='Team Backbone'
                  width={1350}
                  height={1350}
                  quality={80}
              />
            </div>
            <div className='absolute inset-4 md:inset-[2.8rem] lg:inset-[6rem] py-[.5rem] md:py-0 px-[1rem] md:px-0'>
                <p className='text-[.5rem] md:text-[1rem] lg:text-[3rem] lg:leading-[3rem] text-ColorPrincipal font-pragmatica uppercase'>Hello, I&rsquo;m Andres.</p>
                <p className='text-[.5rem] md:text-[1rem] lg:text-[1.5rem] lg:mb-[1.5rem] text-ColorPrincipal font-pragmatica uppercase'>Director of Startup Chihuahua.</p>
                <p className='text-[.5rem] md:text-[1rem] lg:text-[1.5rem] text-ColorPrincipal font-pragmatica uppercase md:mb-[.7rem] lg:mb-[1.5rem]'>Do you have a strategic project or are you looking to financially support the ecosystem?</p>
                <p className='text-[.5rem] md:text-[1rem] lg:text-[1.5rem] text-ColorPrincipal font-pragmatica uppercase md:mb-[.7rem] lg:mb-[1.5rem]'>Let&rsquo;s schedule a meeting. Feel free to send us an email at&nbsp;
                  <a
                    href="mailto:hola@startupchihuahua.com" 
                    className='text-[.8rem] md:text-[1.3rem] lg:text-[1.8rem] text-blue-600 hover:underline'
                  >hola@startupchihuahua.com</a>.
                </p>

          </div>
        </div>
    </div>
  )
}

export default Backbone

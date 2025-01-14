import Image from 'next/image'
import BtnCT from '@components/btnct/BtnCT'
import WhoIs from './components/WhoIs'
import NextBest from './components/NextBest'

const page = () => {
  return (
    <>
      <div className='flex flex-col xl:flex-row items-center justify-center py-[8rem] md:py-[10rem] xl:py-[8rem] 2xl:py-[2rem] px-[3rem]'>
          <div className='w-full 2xl:w-6/12'>
              <h2 className='font-PerformanceMark text-ColorPrincipal uppercase text-[1.3rem] sm:text-[2.5rem] md:text-[4rem] xl:text-[4rem] 2xl:text-[5rem] md:leading-[5rem]'>ChihuahuA’s innovation engine</h2>
              <h3 className='font-pragmatica main-Tipography text-ColorPrincipal uppercase text-[1rem] sm:text-[1.4rem] md:text-[2.4rem] lg:text-[3rem] xl:text-[2.5rem] 2xl:text-[3rem] md:leading-[4rem] mt-[1rem]'>Igniting Connections and Fueling Sustainability for Chihuahua City’s Innovative Technologies.</h3>
              <div className='flex flex-col md:flex-row items-center w-full justify-between md:pr-[2.5rem] mt-[4rem] gap-4'>
                  <BtnCT Text='INQUIRY' />
                  <BtnCT Text='EXPLORE OPPORTUNITIES' />
              </div>
          </div>
          <div>
              <Image
                  src='/tele.png'
                  alt='Company Logo'
                  width={770}
                  height={670}
                  quality={80}
                  priority
                  loading='eager'
                  placeholder='blur'
                  blurDataURL='/tele.png'
              />
          </div>
      </div>
      <div className="relative bg-[url('/bglandin.png')] bg-no-repeat bg-center bg-[length:120vw_110%]">
        <WhoIs />
        <div className='flex justify-center absolute bottom-[-3rem] right-0 left-0'>
          <Image
            src='/titelLogo.png'
            alt='Company Logo'
            width={670}
            height={570}
            quality={80}
            loading='eager'
            placeholder='blur'
            blurDataURL='/titelLogo.png'
          />
        </div>
      </div>
      <div>
        <NextBest />
      </div>
    </>
  )
}

export default page

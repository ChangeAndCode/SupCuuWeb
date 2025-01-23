import Image from 'next/image'
import BtnCT from '@components/btnct/BtnCT'
import WhoIs from './components/WhoIs'
import NextBest from './components/NextBest'
import FocusIn from './components/FocusIn'
import InnovationEngine from './components/InnovationEngine';
import Team from './components/Team';
import Alwais from './components/Alwais'
import History from './components/History'
import Supports from './components/Supports'
import Provides from './components/Provides'
import Together from './components/Together'
import CarruselDoors from './components/CarruselDoors'
import Possible from './components/Possible'
import World from './components/World'
import Form from '../form/page'

const page = () => {
  return (
    <div className='overflow-hidden'>
      <div className='flex flex-col-reverse xl:flex-row items-center justify-center py-[8rem] md:py-[10rem] xl:py-[8rem] 2xl:py-[2rem] px-[3rem]'>
          <div className='w-full 2xl:w-6/12'>
              <h2 className='font-PerformanceMark text-ColorPrincipal uppercase text-[1.3rem] sm:text-[2.5rem] md:text-[4rem] xl:text-[4rem] 2xl:text-[5rem] md:leading-[5rem]'>ChihuahuA&rsquo;s innovation engine</h2>
              <h3 className='font-pragmatica main-Tipography main-Tipography text-ColorPrincipal uppercase text-[1rem] sm:text-[1.4rem] md:text-[2.4rem] lg:text-[3rem] xl:text-[2.5rem] 2xl:text-[3rem] md:leading-[4rem] mt-[1rem]'>Igniting Connections and Fueling Sustainability for Chihuahua City&rsquo;s Innovative Technologies.</h3>
              <div className='flex flex-col md:flex-row items-center w-full justify-between md:pr-[2.5rem] mt-[4rem] gap-4'>
                  <BtnCT 
                    Text='INQUIRY' 
                    href="https://zcform.com/btnwb"
                  />
                  <BtnCT Text='EXPLORE OPPORTUNITIES' />
              </div>
          </div>
          <div>
              <Image
                  src='/tele.webp'
                  alt='Company Logo'
                  width={770}
                  height={670}
                  quality={80}
                  priority
                  loading='eager'
                  placeholder='blur'
                  blurDataURL='/tele.webp'
              />
          </div>
      </div>
      <div className="relative bg-landing bg-no-repeat bg-center bg-[length:120vw_100%]">
        <WhoIs />
        <div className='flex justify-center absolute bottom-[-2rem] xl:bottom-0 right-0 left-0'>
          <Image
            src='/titelLogo.webp'
            alt='Company Logo'
            width={670}
            height={570}
            quality={80}
            loading='lazy'
          />
        </div>
      </div>
      <div>
        <NextBest />
      </div>
      <div className='bg-[#c4cfd6] pb-[10rem]'>
        <FocusIn />
      </div>
      <div className='pt-[5rem] md:pt-0'>
        <InnovationEngine />
      </div>
      <div className="bg-engine bg-no-repeat bg-center bg-cover pt-[10rem] pb-[16rem] mt-[-6rem] md:mt-[-3rem] xl:mt-0 relative z-10 pointer-events-none">
        <Team />
      </div>
      <div className='bg-ColorPrincipal mt-[-14rem] md:mt-[-9rem] lg:mt-[-8rem] xl:mt-[-12rem] relative z-[1]'>
        <Alwais />
      </div>
      <div className="bg-history bg-no-repeat bg-center bg-cover pt-[52rem] sm:pt-[43rem] md:pt-[48rem] lg:pt-[46rem] xl:pt-[28rem] 2xl:pt-[26rem] pb-[55rem] sm:pb-[46rem] md:pb-[50rem] xl:pb-[35rem] mt-[-48rem] sm:mt-[-45rem] lg:mt-[-43rem] xl:mt-[-28rem] relative z-10 pointer-events-none">
        <History />
      </div>
      <div className='pb-[5rem] mt-[-33rem] sm:mt-[-29rem] md:mt-[-25rem] xl:mt-[-8rem] 2xl:mt-[-6rem]'>
        <Supports />
      </div>
      <div className='pb-[5rem]'>
        <Provides />
      </div>
      <div className='bg-[#E9EBED] pt-[8rem] pb-[20rem]'>
        <Together />
      </div>
      <div className="bg-landing bg-no-repeat bg-center bg-[length:120vw_100%] mt-[-12rem]">
        <CarruselDoors />
      </div>
      <div className='pb-[5rem]'>
        <Possible />
      </div>
      <div>
        <World />
      </div>
      <Form />
    </div>
  )
}

export default page

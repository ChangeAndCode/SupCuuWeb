import Image from 'next/image'
import Globo from './globo'


const Backbone = () => {
  return (
    <div className='relative flex flex-col items-center lg:pb-[10rem] xl:pb-0'>
        <div className='absolute z-20 mt-[7rem] md:mt-[18rem] lg:mt-[5rem] xl:mt-0'>
            <Image 
                src='/Team/backbone.webp'
                alt='Team Backbone'
                width={1430}
                height={1430}
                quality={80}
            />
        </div>
        <div className='relative z-30 mt-[21rem] sm:mt-[24rem] md:mt-[46rem] lg:mt-[39rem] xl:mt-[47rem]'>
          <Globo />
        </div>
    </div>
  )
}

export default Backbone

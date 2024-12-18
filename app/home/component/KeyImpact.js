import Image from 'next/image'

const KeyImpact = () => {
  return (
        <div>
            <div className='flex flex-col justify-center items-center overflow-hidden'>
                <div className='flex items-center translate-x-[2.5rem] md:translate-x-[7rem] lg:translate-x-[11.2rem]'>
                    <div className='relative z-20'>
                        <h2 className='text-[2rem] md:text-[3rem] lg:text-[8rem] font-pragmatica uppercase whitespace-nowrap text-ColorPrincipal leading-[2rem] md:leading-[4rem] lg:leading-[9rem]'>Key Impact</h2>
                        <h2 className='text-[2rem] md:text-[3rem] lg:text-[7.9rem] font-pragmatica uppercase whitespace-nowrap text-ColorPrincipal leading-[2rem] md:leading-[4rem] lg:leading-[6rem]'>Indicators</h2>
                    </div>
                    <p className='text-[4rem] md:text-[12rem] lg:text-[19rem] font-PerformanceMark translate-x-[-2rem] whitespace-nowrap text-white relative z-10'>2030</p>
                </div>
                <div className='flex flex-col lg:flex-row items-center lg:items-start lg:justify-around px-6 md:px-12 lg:px-24'>
                    <div className='flex flex-col w-full md:w-10/12 lg:w-3/12 mb-10 lg:mb-0 gap-8'>
                        <Image 
                            src='/Indicators/startup.png'
                            alt='Company Logo'
                            width={400}
                            height={400}
                        />
                        <p className='text-2xl font-semibold uppercase'>Attract or promote tech-based companies in the region, with a focus on sectors aligned with regional specialization.</p>
                    </div>
                    <div className='flex flex-col w-full md:w-10/12 lg:w-3/12 mb-10 lg:mb-0 gap-8'>
                        <Image 
                            src='/Indicators/millions.png'
                            alt='Company Logo'
                            width={400}
                            height={400}
                        />
                        <p className='text-2xl font-semibold uppercase'>Structure risk capital funds with an emphasis on angel investment, seeking to achieve this total investment.</p>
                    </div>
                    <div className='flex flex-col w-full md:w-10/12 lg:w-3/12 mb-10 lg:mb-0 gap-8'>
                        <Image 
                            src='/Indicators/chihuahua.png'
                            alt='Company Logo'
                            width={400}
                            height={400}
                        />
                        <p className='text-2xl font-semibold uppercase'>Encourage regional startups and tech-based companies to contribute to this percentage of the region’s economic output.</p>
                    </div>
                </div>
            </div>
            <div className='px-7'>
                <p className='text-[10rem] md:text-[19rem] font-PerformanceMark whitespace-nowrap text-white'>now</p>
            </div>
        </div>
  )
}

export default KeyImpact

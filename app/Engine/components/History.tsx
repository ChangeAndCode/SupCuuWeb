import Image from 'next/image'


const History = () => {
  return (
    <>
        <div className='flex flex-col items-center justify-center px-[3rem] xl:px-0'>
            <div className='pr-[2rem] md:pr-[7rem] lg:pr-[8rem]'>
                <Image
                    src='/history/tituloHistory.webp'
                    alt='Company Logo'
                    width={770}
                    height={570}
                    quality={80}
                    loading='eager'
                    placeholder='blur'
                    blurDataURL='/history/tituloHistory.webp'
                />
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='font-poppins text-[1.2rem] text-justify w-full md:w-8/12'>
                Once an emerging settlement near valuable mining in the region, Chihuahua, the city “between two waters,” first evolved into a trade post for cattle and agricultural products. Next she transformed into a manufacturing center. Most recently the city advanced to produce goods such as electronics, automobile parts, textiles and medical products. By the 1990’s Chihuahua had grown to be the third richest city per capita in Mexico.
                </p>
                <p className='font-poppins text-[1.2rem] text-justify w-full md:w-8/12'>
                In recent years, the city intentionally strengthened the industrial sector, boosted the economy, and initiated a multitude of diverse programs to invest in the city’s quality of life, education system, business infrastructure and supportive industries. Now attracting official gatherings, business expos, international meetings, and industrial networking opportunities, Chihuahua steadily advances. With its legacy of business families intact, the city, as an international ambassador, now naturally progresses deep into the realm of technology and innovative industries.
                </p>
            </div>
            <div className='relative flex flex-col xl:flex-row items-center xl:justify-end mt-[5rem]'>
                <Image
                    src='/history/mapa.webp'
                    alt='Company Logo'
                    width={670}
                    height={570}
                    quality={80}
                    loading='eager'
                    placeholder='blur'
                    blurDataURL='/history/mapa.webp'
                    className='xl:absolute 2xl:top-[-2rem] xl:right-[40rem] 2xl:right-[55rem]'
                />
                <div className='bg-white md:w-8/12 xl:w-1/2 rounded-3xl xl:rounded-none xl:rounded-l-3xl p-[1rem] md:p-[4rem] lg:p-[7rem]'>
                    <p className='font-poppins text-[1.2rem] text-justify xl:w-10/12 2xl:w-8/12'>
                    Chihuahua City is the entrepreneurial center for northern Mexico. The state is the largest exporting state in Mexico to the United States. Between 2014 and 2019, Chihuahua recorded a 61 percent increase in GDP. And the growth continues. In the second quarter of 2023 alone, the state’s exports surpassed $35 billion USD. The City of Chihuahua has also experienced this significant economic growth, with an estimated GDP of $13.9 Billion USD, last measured in 2022. Its projected growth rate continues steadily, between 4 and 6 percent.
                    </p>
                </div>
            </div>
            <div className='mt-[5rem] flex flex-col justify-center w-full md:w-8/12'>
                <h3 className='font-PerformanceMark text-ColorPrincipal text-[4rem]'>Way of Life</h3>
                <p className='font-poppins text-[1.2rem] text-justify'>
                    Businesses also come here for the right balance between affordability and a thriving middle class. The city continues to invest in quality of life, already achieving notoriety as a safe city and one of Mexico’s cleanest, even in air quality. People enjoy visiting the area’s landmarks, such as Copper Canyon, and other popular destinations in Mexico and the U.S. by train or car. More distant travel is available thanks to nearby international air travel options. But you might not want to leave Chihuahua. Unlike some areas in the region, where summer temperatures can soar, Chihuahua City summers are more mild due to the 4,800 feet in elevation.
                </p>
            </div>
        </div>
    </>
  )
}

export default History

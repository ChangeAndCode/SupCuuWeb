'use client'
import Image from 'next/image'
import Globo from './globo'
import { useState } from 'react'


const Backbone = () => {
  const [selectedImage, setSelectedImage] = useState<number>(0);

  return (
    <div className='relative flex flex-col items-center lg:pb-[10rem] xl:pb-0 pt-[10rem]'>
        <div className='absolute z-20 mt-[4rem] sm:mt-[5rem] md:mt-[18rem] lg:mt-[5rem] xl:mt-0'>
          <div className='relative flex justify-center bg-white px-[.5rem] sm:px-[.2rem] md:px-[3rem] lg:px-[5rem] xl:px-[12rem] 2xl:px-[19rem] pt-[8rem] rounded-[2rem] shadow-xl items-center'>
            <div className='absolute top-[-5rem] sm:top-[-6rem] md:top-[-10rem] 2xl:top-[-13rem] left-[-3rem] sm:left-[-3rem] md:left-[-5rem] lg:left-[-8rem] xl:left-[-11rem] 2xl:left-[-14rem]'>
            <Image 
                src='/tituloBackbone.png'
                alt='Titulo Backbone'
                width={800}
                height={800}
                quality={80}
                className='object-contain w-[310px] sm:w-[400px] md:w-[500px] lg:w-[600px] 2xl:w-[700px]'
              />
            </div>
            <div className='flex justify-center items-center -space-x-[4rem] sm:-space-x-[5rem] md:-space-x-[6rem] lg:-space-x-[7rem]'>
              <div onClick={() => setSelectedImage(0)} className="cursor-pointer">
                <Image 
                  src='/Team/backbone/guzman.png'
                  alt='Team Backbone'
                  width={300}
                  height={300}
                  quality={80}
                  className='object-contain w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px]'
                />
              </div>
              <div onClick={() => setSelectedImage(1)} className="cursor-pointer">
                <Image 
                  src='/Team/backbone/vic.png'
                  alt='Team Backbone'
                  width={300}
                  height={300}
                  quality={80}
                  className='object-contain w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px]'
                />
              </div>
              <div onClick={() => setSelectedImage(2)} className="cursor-pointer">
                <Image 
                  src='/Team/backbone/estefania.png'
                  alt='Team Backbone'
                  width={300}
                  height={300}
                  quality={80}
                  className='object-contain w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px]'
                />
              </div>
            </div>
          </div>
          <div className='absolute md:right-[-10rem] lg:right-[-13rem] xl:right-[-15rem] 2xl:right-[-19rem] md:top-[30rem] lg:top-[33rem] xl:top-[31rem] 2xl:top-[27rem]'>
            <Image 
                src='/cinta.webp'
                alt='Team Backbone'
                width={500}
                height={500}
                quality={80}
                className='object-contain w-[150px] sm:w-[200px] md:w-[400px] lg:w-[500px] xl:w-[600px] 2xl:w-[700px] hidden md:block'
            />
          </div>
        </div>
        <div className='relative z-30 mt-[32rem] sm:mt-[38rem] md:mt-[58rem] lg:mt-[51rem] xl:mt-[46rem]'>
          <Globo selectedImage={selectedImage} />
        </div>
    </div>
  )
}

export default Backbone
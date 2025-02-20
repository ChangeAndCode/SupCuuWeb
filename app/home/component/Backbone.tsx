'use client'
import Image from 'next/image'
import Bubble from './Bubble'
import { useState, useEffect } from 'react'
import { teamBackboneData } from '../data/dataTeamBackbone'

const Backbone = () => {
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className='relative flex flex-col items-center lg:pb-[10rem] xl:pb-0 pt-[10rem] w-full'>
        <div className='absolute z-20 xl:mt-0 w-full flex justify-center'>
          <div className='relative bg-white px-[.5rem] sm:px-[.2rem] md:px-[3rem] lg:px-[5rem] xl:px-[12rem] 2xl:px-[19rem] 4xl:px-[25rem] rounded-[2rem] pt-[8rem] shadow-xl'>
            <div className='absolute top-[-5rem] sm:top-[-6rem] md:top-[-10rem] 2xl:top-[-13rem] left-[-3rem] sm:left-[-3rem] md:left-[-5rem] lg:left-[-8rem] xl:left-[-11rem] 2xl:left-[-14rem]'>
            <Image 
                src='/tituloBackbone.png'
                alt='Titulo Backbone'
                width={800}
                height={800}
                quality={80}
                className='object-contain w-[310px] sm:w-[400px] md:w-[500px] lg:w-[600px] 2xl:w-[700px] 4xl:w-[900px]'
              />
            </div>
            <div className='flex justify-center items-center -space-x-[4rem] sm:-space-x-[5rem] md:-space-x-[6rem] lg:-space-x-[7rem] 4xl:-space-x-[9rem]'>
              {teamBackboneData.map((member) => (
                <div 
                  key={member.id} 
                  onMouseEnter={() => setSelectedImage(member.id)} 
                  className="cursor-pointer"
                >
                  <Image 
                    src={member.image}
                    alt={`Team Backbone - ${member.name}`}
                    width={300}
                    height={300}
                    quality={80}
                    className='object-contain w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] 4xl:w-[400px]'
                  />
                </div>
              ))}
            </div>
          </div>
          <div className='absolute md:right-[1rem] lg:right-[-2rem] xl:right-[1rem] 2xl:right-[6rem] 4xl:right-[10rem] md:top-[33rem] lg:top-[37rem] xl:top-[33rem] 2xl:top-[32rem] 4xl:top-[41rem]'>
            <Image 
                src='/cinta.webp'
                alt='Team Backbone'
                width={500}
                height={500}
                quality={80}
                className='object-contain w-[150px] sm:w-[200px] md:w-[200px] lg:w-[300px] xl:w-[400px] 2xl:w-[500px] 4xl:w-[600px] hidden md:block'
            />
          </div>
        </div>
        <div className='relative z-30 mt-[28rem] sm:mt-[34rem] md:mt-[40rem] lg:mt-[46rem] xl:mt-[46rem] 4xl:mt-[58rem]'>
          {selectedImage !== null && <Bubble selectedImage={selectedImage} />}
        </div>
    </div>
  )
}

export default Backbone
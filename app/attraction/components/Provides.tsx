'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

const Provides = () => {
      const [openSections, setOpenSections] = useState({startup: false})
      const toggleSection = (section: string) => {
        setOpenSections(prev => ({
          ...prev,
          [section]: !prev[section]
        }))
      }
  return (
    <>
      <h2 className='font-PerformanceMark text-ColorPrincipal text-center text-[1.7rem] md:text-[3rem] lg:text-[3.7rem] xl:text-[5rem] 2xl:text-[6rem]'>What Startup Chihuahua Provides</h2>
      <h3 className='font-pragmatica main-Tipography text-ColorPrincipal text-center text-[.9rem] md:text-[1.5rem] lg:text-[1.9rem] xl:text-[2.5rem] 2xl:text-[3rem]'>The Entrepreneurial Ecosystem of Chihuahua City</h3>
      <div className='flex flex-col xl:flex-row justify-center items-center'>
            <div className='w-11/12 md:w-8/12 xl:w-4/12'>
                <div className='flex items-center mb-6'>
                    <Image
                        src='/check.webp'
                        alt='Company Logo'
                        width={40}
                        height={40}
                        quality={80}
                        loading='lazy'
                    />
                    <p className='font-poppins font-semibold text-[1.3rem] pt-12 md:pt-5'>Assistance in accessing capital investments</p>
                </div>
                <div className='flex items-center mb-6'>
                    <Image
                        src='/check.webp'
                        alt='Company Logo'
                        width={40}
                        height={40}
                        quality={80}
                        loading='lazy'
                    />
                    <p className='font-poppins font-semibold text-[1.3rem] pt-20 sm:pt-12 md:pt-12'>Networking opportunities with industry leaders and representatives</p>
                </div>
                <div className='flex items-center mb-6'>
                    <Image
                        src='/check.webp'
                        alt='Company Logo'
                        width={40}
                        height={40}
                        quality={80}
                        loading='lazy'
                    />
                    <p className='font-poppins font-semibold text-[1.3rem] pt-12 md:pt-12 2xl:pt-5'>Access to applications for equity-free grant money</p>
                </div>
                <div className='flex items-center mb-6'>
                    <Image
                        src='/check.webp'
                        alt='Company Logo'
                        width={40}
                        height={40}
                        quality={80}
                        loading='lazy'
                    />
                    <p className='font-poppins font-semibold text-[1.3rem] pt-20 sm:pt-12 md:pt-12'>Entry to mentorship and professional development programs</p>
                </div>
                <div className='flex items-center mb-6'>
                    <Image
                        src='/check.webp'
                        alt='Company Logo'
                        width={40}
                        height={40}
                        quality={80}
                        loading='lazy'
                    />
                    <p className='font-poppins font-semibold text-[1.3rem] pt-20 sm:pt-12 md:pt-12 lg:pt-5 xl:pt-12'>Opportunities for corporate sponsorship and collaboration</p>
                </div>
                <div className='flex items-center mb-6'>
                    <Image
                        src='/check.webp'
                        alt='Company Logo'
                        width={40}
                        height={40}
                        quality={80}
                        loading='lazy'
                    />
                    <p className='font-poppins font-semibold text-[1.3rem] pt-24 sm:pt-20 md:pt-12 xl:pt-20 2xl:pt-12'>Connections to local entrepreneurial support (legal, administrative and operational)</p>
                </div>
            </div>
            <Image
                src='/mano.webp'
                alt='Company Logo'
                width={700}
                height={600}
                quality={80}
                loading='lazy'
            />
      </div>
        <div className='flex justify-center mt-[5rem]'>
            <div className='w-11/12'>
                <button 
                  onClick={() => toggleSection('startup')}
                  className='w-full bg-[#f0f0f0] text-ColorPrincipal font-pragmatica text-[1.5rem] py-2 px-6 flex justify-between items-center rounded-2xl uppercase'
                >
                  <span>Startup Chihuahua:</span>
                  {openSections.startup ? <IoIosArrowUp size={20} /> : <IoIosArrowDown size={20} />}
                </button>
                {openSections.startup && (
                  <p className='font-poppins mt-2 p-4 text-[1.2rem] px-[2rem] text-justify'>
                    Serves as the backbone office for the innovation-driven entrepreneurial ecosystem in the region. Its mission is to support and promote high-tech and scientific business models. Established through the collaboration of municipal and state governments, economic development leaders like DESEC A.C., and expert institutions such as the Orion Technology Park, Startup Chihuahua focuses on fostering innovation through  startups created or attracted to the region.
                  </p>
                )}
              </div>
        </div>
    </>
  )
}

export default Provides

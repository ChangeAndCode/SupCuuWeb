import Image from 'next/image'


const Transformative = () => {
  return (
    <>
     <div className='flex justify-end pr-[2rem] md:pr-[4rem] mac:px-[8rem] lg:px-[17rem] translate-y-[-2rem] md:translate-y-[-3.8rem] mac:translate-y-[-4.8rem] lg:translate-y-[-5.5rem]'>
        <h2 className='text-[2rem] md:text-[4rem] mac:text-[5rem] lg:text-[5rem] xl:text-[7rem] font-semibold text-ColorPrincipal text-end w-8/12 md:leading-[4.5rem] mac:leading-[5.5rem] lg:leading-[6rem]'>with transformative results</h2>
     </div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mac:px-[8rem] lg:px-[10rem] xl:px-[15rem] gap-6'>
        <div className='flex flex-col items-center space-y-6'>
            <h3 className='text-[2rem] font-PerformanceMark text-ColorPrincipal'>Investment</h3>
            <Image src='/Transformative/Investment1.png' alt='Company Logo' width={300} height={200} />
            <Image src='/Transformative/Investment2.png' alt='Company Logo' width={300} height={200} />
            <Image src='/Transformative/Investment3.png' alt='Company Logo' width={300} height={200} />
        </div>
        <div className='flex flex-col items-center space-y-6'>
            <h3 className='text-[2rem] font-PerformanceMark text-ColorPrincipal'>Sensitized</h3>
            <Image src='/Transformative/Sensitized1.png' alt='Company Logo' width={300} height={200} />
            <Image src='/Transformative/Sensitized2.png' alt='Company Logo' width={300} height={200} />
            <Image src='/Transformative/Sensitized3.png' alt='Company Logo' width={300} height={200} />
            <Image src='/Transformative/Sensitized4.png' alt='Company Logo' width={300} height={200} />
        </div>
        <div className='flex flex-col items-center space-y-6'>
            <h3 className='text-[2rem] font-PerformanceMark text-ColorPrincipal'>Innovation</h3>
            <Image src='/Transformative/Innovation1.png' alt='Company Logo' width={300} height={200} />
            <Image src='/Transformative/Innovation2.png' alt='Company Logo' width={300} height={200} />
            <Image src='/Transformative/Innovation3.png' alt='Company Logo' width={300} height={200} />
        </div>
        <div className='flex flex-col items-center space-y-6'>
            <h3 className='text-[2rem] font-PerformanceMark text-ColorPrincipal'>Entrepreneurship</h3>
            <Image src='/Transformative/Entrepreneurship1.png' alt='Company Logo' width={300} height={200} />
            <Image src='/Transformative/Entrepreneurship2.png' alt='Company Logo' width={300} height={200} />
            <Image src='/Transformative/Entrepreneurship3.png' alt='Company Logo' width={300} height={200} />
        </div>
    </div>
        <div className='flex justify-end relative z-10'>
            <p className='text-[15rem] text-[#EDEFF0] font-PerformanceMark z-20'>partners</p>
        </div>
    </>
  )
}

export default Transformative

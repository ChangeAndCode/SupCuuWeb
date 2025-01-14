import Image from 'next/image'

const WhoIs = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-[4rem] md:pt-[7rem] xl:pt-[9rem] pb-[8rem] sm:pb-[11rem] md:pb-[15rem] px-[2rem] sm:px-[4rem] md:px-[4rem] lg:px-[6rem] 2xl:px-0">
      <h2 className='font-pragmatica main-Tipography text-ColorPrincipal uppercase text-[1.5rem] sm:text-[2rem] md:text-[3rem]'>who is chihuahua?</h2>
        <div className='border-[.4rem] border-ColorPrincipal mt-[3rem]'>
            <Image
                src='/pruebaVideo.png'
                alt='Company Logo'
                width={1370}
                height={1270}
                quality={80}
                priority
                loading='eager'
                placeholder='blur'
                blurDataURL='/pruebaVideo.png'
            />
        </div>
    </div>
  )
}

export default WhoIs

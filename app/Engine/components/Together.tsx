import BtnCT from "@components/btnct/BtnCT"
import Image from "next/image"


const Together = () => {
  return (
    <div className='flex flex-col items-center justify-center px-[1rem] md:px-[4rem] xl:px-[8rem]'>
      <h2 className='font-pragmatica text-ColorPrincipal uppercase text-[1.3rem] md:text-[1.8rem] lg:text-[2.4rem] xl:text-[3rem] 2xl:text-[4rem] text-center'>TOGETHER we will create a thriving and expanding entrepreneurial ecosystem, where we can live, grow and play.</h2>
        <div className='relative flex flex-col justify-center xl:w-9/12 2xl:w-9/12 mt-[4rem] lg:mt-[10rem] bg-white p-[4rem] rounded-[3rem] shadow-2xl'>
            <div className='absolute hidden lg:block top-[-13rem] xl:top-[-11rem] right-[-6rem] xl:right-[-18rem]'>
                <Image
                    src='/tituloTogether.webp'
                    alt='Company Logo'
                    width={670}
                    height={570}
                    quality={80}
                    loading='eager'
                    placeholder='blur'
                    blurDataURL='/tituloTogether.webp'
                />
            </div>
            <p className='text-[1.2rem] md:text-[2rem] font-poppins uppercase text-justify'>Let&rsquo;s continue the conversation. We have so much more to share with you. Click below and we&rsquo;ll start by sending you an inquiry form, and then a representative from our Startup Chihuahua team will contact you to answer your questions. We can learn more about each other and discover whether Chihuahua and your company together can create the <span className='font-bold'>innovative engine</span> you need to reach your business goals. </p>
            <div className='absolute bottom-[-2rem] left-1/2 transform -translate-x-1/2'>
                <BtnCT Text='CLICK HERE' variant='secondary' />
            </div>
        </div>
    </div>
  )
}

export default Together

import Image from "next/image"

const FocusIn = () => {
  return (
    <>
        <div className="flex justify-end">
            <Image
                src='/focusin/lupa.png'
                alt='Company Logo'
                width={870}
                height={670}
                quality={80}
                loading='eager'
                placeholder='blur'
                blurDataURL='/focusin/lupa.png'
                className="2xl:mt-[-7rem]"
            />
        </div>
        <div className="md:px-[3rem] xl:px-[5rem] 2xl:px-[20rem] xl:mt-[-25rem]">
            <div>
                <Image
                    src='/focusin/1.png'
                    alt='Company Logo'
                    width={570}
                    height={370}
                    quality={80}
                    loading='eager'
                    placeholder='blur'
                    blurDataURL='/focusin/1.png'
                />
            </div>
            <div className="flex justify-end lg:mt-[-6rem] xl:mt-[-8rem]">
                <Image
                    src='/focusin/2.png'
                    alt='Company Logo'
                    width={570}
                    height={370}
                    quality={80}
                    loading='eager'
                    placeholder='blur'
                    blurDataURL='/focusin/2.png'
                />
            </div>
            <div className="lg:mt-[-3rem] xl:mt-[-8rem] z-10">
                <Image
                    src='/focusin/3.png'
                    alt='Company Logo'
                    width={570}
                    height={370}
                    quality={80}
                    priority
                    loading='eager'
                    placeholder='blur'
                    blurDataURL='/focusin/3.png'
                />
            </div>
            <div className="flex justify-end lg:mt-[-5rem] xl:mt-[-8rem]">
                <Image
                    src='/focusin/4.png'
                    alt='Company Logo'
                    width={570}
                    height={370}
                    quality={80}
                    loading='eager'
                    placeholder='blur'
                    blurDataURL='/focusin/4.png'
                />
            </div>
            <div className="lg:mt-[-5rem] xl:mt-[-8rem]">
                <Image
                    src='/focusin/5.png'
                    alt='Company Logo'
                    width={570}
                    height={370}
                    quality={80}
                    loading='eager'
                    placeholder='blur'
                    blurDataURL='/focusin/5.png'
                />
            </div>
            <div className="flex justify-end lg:mt-[-5rem] xl:mt-[-8rem]">
                <Image
                    src='/focusin/6.png'
                    alt='Company Logo'
                    width={570}
                    height={370}
                    quality={80}
                    loading='eager'
                    placeholder='blur'
                    blurDataURL='/focusin/6.png'
                />
            </div>
        </div>
    </>
  )
}

export default FocusIn

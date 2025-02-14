'use client';

import Image from 'next/image'

const Cohete = () => {
  return (
    <div>
        <Image
          src="/cohete1.webp"
          width={600}
          height={500}
          style={{ height: 'auto' }}
          alt="We are"
          className="absolute xl:bottom-[-25rem] 2xl:bottom-[-22rem] 4xl:bottom-[-20rem] xl:right-[-1rem] 2xl:right-[3rem] 4xl:right-[4rem] z-10 float-animation xl:w-[600px] 4xl:w-[800px]"
        />
    </div>
  )
}

export default Cohete
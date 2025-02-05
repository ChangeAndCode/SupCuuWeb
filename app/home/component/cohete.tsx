'use client';

import Image from 'next/image'

const Cohete = () => {
  return (
    <div>
        <Image
          src="/cohete.webp"
          width={600}
          height={500}
          style={{ height: 'auto' }}
          alt="We are"
          className="absolute xl:bottom-[-25rem] 2xl:bottom-[-22rem] xl:right-[-1rem] 2xl:right-[3rem] z-10 float-animation"
        />
    </div>
  )
}

export default Cohete
import Image from "next/image"

const ContacUs = () => {
  return (
    <div className='md:w-5/12'>
      <p className='text-[1.5rem] md:text-[2rem] font-pragmatica uppercase text-white mb-[1.5rem]'>Contact-us</p>
      <div className="flex items-center gap-x-4 mb-[1.5rem]">
        <Image
          src='/redesSociales/redesTel.png'
            alt='Teléfono'
            width={35}
            height={35}
             className="object-contain"
            />
        <p className='text-[1em] font-pragmatica uppercase text-white'>614 226 78 40</p>
      </div>
      <div className="flex items-center gap-x-4 mb-[1.5rem]">
        <Image
          src='/redesSociales/pin.png'
            alt='Teléfono'
            width={35}
            height={35}
             className="object-contain"
          />
        <p className='text-[1em] font-pragmatica uppercase text-white w-9/12'>Parque Tecnológico PIT 3 Av. H. Colegio Militar 31300 Chihuahua, Chih.</p>
      </div>
    </div>
  )
}

export default ContacUs

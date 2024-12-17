import Image from 'next/image'

const RedesSociales = () => {
  return (
    <div>
      <p className='text-[1.5rem] md:text-[2rem] font-pragmatica uppercase text-white mb-[1.5rem]'>@startupchihuahua</p>
        <div className='flex lg:justify-end'>
            <Image
                src='/redesSociales/insta.png'
                alt='facebook'
                width={75}
                height={75}
            />
            <Image
                src='/redesSociales/link.png'
                alt='facebook'
                width={75}
                height={75}
            />
            <Image
                src='/redesSociales/facebook.png'
                alt='facebook'
                width={75}
                height={75}
            />
        </div>
    </div>
  )
}

export default RedesSociales

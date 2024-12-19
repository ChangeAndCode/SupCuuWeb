import Image from 'next/image';

const RedesSociales: React.FC = () => {
  return (
    <div>
      <p className='text-[1.5rem] md:text-[2rem] font-pragmatica uppercase text-white mb-[1.5rem]'>@startupchihuahua</p>
      <div className='flex lg:justify-end'>
        <Image
          src='/redesSociales/insta.webp'
          alt='Instagram'
          width={75}
          height={75}
          quality={80}
        />
        <Image
          src='/redesSociales/link.webp'
          alt='LinkedIn'
          width={75}
          height={75}
          quality={80}
        />
        <Image
          src='/redesSociales/facebook.webp'
          alt='Facebook'
          width={75}
          height={75}
          quality={80}
        />
      </div>
    </div>
  );
};

export default RedesSociales;

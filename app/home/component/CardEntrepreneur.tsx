import Image from 'next/image';
import BtnCT from './BtnCT';

const CardEntrepreneur: React.FC = () => {
  return (
    <div className='flex flex-col justify-center items-center group'>
      <div>
        <Image
          src='/CT/primera.webp'
          alt='Entrepreneur'
          width={490}
          height={390}
          style={{ height: 'auto' }}
          quality={80}
          priority
          loading="eager"
          placeholder="blur"
          blurDataURL='/CT/primera.webp'
          className='grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300'
        />
      </div>
      <div className='text-center xl:translate-y-[1.8rem] space-y-4'>
        <div className='group-hover:scale-105 group-hover:grayscale-0'>
          <BtnCT 
            buttonText='ENTREPRENEUR'
            link='/DreamBig'
          />
        </div>
        <div>
          <p className='font-PerformanceMark text-ColorPrincipal text-2xl uppercase'>Ready to</p>
          <p className='font-PerformanceMark text-ColorPrincipal text-2xl uppercase'>develop your ideas?</p>
        </div>
      </div>
    </div>
  );
};

export default CardEntrepreneur;

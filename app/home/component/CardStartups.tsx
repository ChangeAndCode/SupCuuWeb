import Image from 'next/image';
import BtnCT from './BtnCT';

const CardStartups: React.FC = () => {
  return (
    <div className='flex flex-col justify-center items-center group'>
      <div>
        <Image
          src='/CT/segunda.webp'
          alt='STARTUP & SCALEUPS'
          width={560}
          height={460}
          style={{ height: 'auto' }}
          quality={80}
          priority
          loading="eager"
          placeholder="blur"
          blurDataURL='/CT/segunda.webp'
          className='grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300'
        />
      </div>
      <div className='xl:-translate-x-[4rem] xl:translate-y-[.5rem] text-center space-y-4'>
        <div className='group-hover:scale-105 group-hover:grayscale-0'>
          <BtnCT 
            buttonText={['STARTUP &', 'SCALEUPS']}
            link='/NextJump'
          />
        </div>
        <div>
          <p className='font-PerformanceMark text-ColorPrincipal text-2xl uppercase'>Need capital</p>
          <p className='font-PerformanceMark text-ColorPrincipal text-2xl uppercase'>or want to</p>
          <p className='font-PerformanceMark text-ColorPrincipal text-2xl uppercase'>strengthen</p>
          <p className='font-PerformanceMark text-ColorPrincipal text-2xl uppercase'>your startup?</p>
        </div>
      </div>
    </div>
  );
};

export default CardStartups;

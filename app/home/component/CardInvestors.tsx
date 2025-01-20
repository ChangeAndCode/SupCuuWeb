import Image from 'next/image';
import BtnCT from './BtnCT';

const CardInvestors: React.FC = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div>
        <Image
          src='/CT/tercera.webp'
          alt='Investors'
          width={490}
          height={390}
          style={{ height: 'auto' }}
          quality={80}
          priority
          loading="eager"
          placeholder="blur"
          blurDataURL='/CT/tercera.webp'
        />
      </div>
      <div className='text-center space-y-4'>
        <BtnCT buttonText='INVESTORS' />
        <div>
          <p className='font-PerformanceMark text-ColorPrincipal text-2xl uppercase'>want to grow</p>
          <p className='font-PerformanceMark text-ColorPrincipal text-2xl uppercase'>your money</p>
          <p className='font-PerformanceMark text-ColorPrincipal text-2xl uppercase'>while supporting</p>
          <p className='font-PerformanceMark text-ColorPrincipal text-2xl uppercase'>chihuahua talent?</p>
        </div>
      </div>
    </div>
  );
};

export default CardInvestors;

import Image from 'next/image';
import BtnCT from './BtnCT';

const CardCorporates: React.FC = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div>
        <Image
          src='/CT/cuarta.webp'
          alt='Corporates Partners'
          width={490}
          height={390}
          style={{ height: 'auto' }}
          quality={80}
          priority
          loading="eager"
          placeholder="blur"
          blurDataURL="/CT/cuarta.webp"
        />
      </div>
      <div className='xl:transform xl:translate-x-[2rem] xl:translate-y-[2.4rem] text-center space-y-4'>
        <BtnCT buttonText='CORPORATES PARTNERS'/>
        <div>
          <p className='font-PerformanceMark text-ColorPrincipal text-2xl uppercase'>want to promote</p>
          <p className='font-PerformanceMark text-ColorPrincipal text-2xl uppercase'>your calls,</p>
          <p className='font-PerformanceMark text-ColorPrincipal text-2xl uppercase'>fund projects,</p>
          <p className='font-PerformanceMark text-ColorPrincipal text-2xl uppercase'>or collaborate?</p>
        </div>
      </div>
    </div>
  );
};

export default CardCorporates;

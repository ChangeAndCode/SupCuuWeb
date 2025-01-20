import Image from 'next/image';

interface BtnCTProps {
  buttonText: string | string[];
  customLines?: string[];
}

const BtnCT: React.FC<BtnCTProps> = ({ buttonText, customLines }) => {
  const lines = customLines || (typeof buttonText === 'string' ? buttonText.split(' ') : buttonText);

  return (
    <button className='relative main-Tipography bg-ColorPrincipal text-white h-[3.9rem] w-[18rem] uppercase font-pragmatica rounded-full flex flex-col justify-center items-center'>
      {lines.map((line, index) => (
        <span key={index}>{line}</span>
      ))}

      <Image 
        src='/btn.webp'
        width={35}
        height={35}
        alt='Tabla'
        className='absolute right-[1.3rem] bottom-[-.8rem]'
        quality={80}
        priority
        loading="eager"
        blurDataURL='/btn.webp'
      />

    </button>
  );
};

export default BtnCT;

import Image from 'next/image';

const BtnCT = ({ buttonText, customLines }) => {
  // Usa customLines si está disponible, de lo contrario divide el texto automáticamente
  const lines = customLines || buttonText.split(' ');

  return (
    <button className='relative bg-ColorPrincipal text-white h-[3.9rem] w-[18rem] uppercase font-pragmatica rounded-full flex flex-col justify-center items-center'>
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
      />

    </button>
  );
};

export default BtnCT;

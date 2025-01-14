interface BtnCTProps {
  Text: string;
  customLines?: string[];
  variant?: 'primary' | 'secondary' | 'outline'; // Variantes disponibles
}

const BtnCT: React.FC<BtnCTProps> = ({ Text, variant = 'primary' }) => {
  // Estilos basados en la variante
  const variantClasses = {
    primary: 'bg-ColorPrincipal',
    secondary: 'bg-[#ff4544] py-[1rem] px-[6rem]',
  };

  return (
    <button
      className={`relative main-Tipography text-white text-[.8rem] sm:text-[1.3rem] lg:text-[1.5rem] py-[.7rem] px-[3rem] uppercase font-pragmatica rounded-full flex justify-center items-center ${
        variantClasses[variant]
      }`}
    >
      <span>{Text}</span>
    </button>
  );
};

export default BtnCT;

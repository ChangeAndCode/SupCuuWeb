interface BtnCTProps {
  Text: string;
  customLines?: string[];
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  href?: string;
}

const BtnCT: React.FC<BtnCTProps> = ({ Text, variant = 'primary', href, className }) => {
  const variantClasses = {
    primary: 'bg-ColorPrincipal text-white w-full md:w-auto py-[.7rem] md:px-[3rem]',
    secondary: 'bg-[#ff4544] text-white py-[1rem] px-[6rem]',
    outline: 'bg-white text-ColorPrincipal py-[1rem] px-[6rem]',
  };

  const baseClasses = `relative main-Tipography text-[.8rem] sm:text-[1.3rem] lg:text-[1.5rem] uppercase font-pragmatica rounded-full flex justify-center items-center ${variantClasses[variant]}`;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${baseClasses} ${className}`}>
        <span>{Text}</span>
      </a>
    );
  }

  return (
    <button className={`${baseClasses} ${className}`}>
      <span>{Text}</span>
    </button>
  );
};

export default BtnCT;
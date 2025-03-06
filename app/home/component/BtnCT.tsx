import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

interface BtnCTProps {
  buttonText: string | string[];
  customLines?: string[];
  link?: string;
  buttonIcon?: string;
  buttonIconAlt?: string;
}

const BtnCT: React.FC<BtnCTProps> = ({
  buttonText,
  customLines,
  link,
  buttonIcon,
  buttonIconAlt = "Button icon",
}) => {
  const lines =
    customLines ||
    (typeof buttonText === "string"
      ? buttonText.includes(" & ")
        ? buttonText
            .split(" & ")
            .map((line, index) => (index === 0 ? `${line} &` : line))
        : [buttonText]
      : buttonText);

  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <Link
        href={link || "#"}
        className="relative main-Tipography bg-ColorPrincipal text-white h-[3.9rem] w-[18rem] uppercase font-pragmatica rounded-full flex flex-col justify-center items-center z-[20] pointer-events-auto"
      >
        {lines.map((line, index) => (
          <span key={index}>{line}</span>
        ))}
        {buttonIcon && (
          <Image
            src={buttonIcon}
            width={35}
            height={35}
            alt={buttonIconAlt}
            className="absolute right-[1.3rem] bottom-[-.8rem]"
            quality={80}
            priority
            loading="eager"
            blurDataURL={buttonIcon}
          />
        )}
      </Link>
    </Suspense>
  );
};

export default BtnCT;

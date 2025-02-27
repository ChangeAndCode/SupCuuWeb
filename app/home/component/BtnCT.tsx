import Image from "next/image";
import Link from "next/link";
import { BtnCTProps } from "@/types/landingPage";
import { fetchIconData } from "@/lib/landing-page";
import { Suspense } from "react";

const BtnCT: React.FC<BtnCTProps> = async ({
  buttonText,
  customLines,
  link,
}) => {
  const { buttonIcon, altButton } = await fetchIconData();
  const nextPublicApiUrl = process.env.NEXT_PUBLIC_API_URL;

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

        <Image
          src={`${nextPublicApiUrl}${buttonIcon}`}
          width={35}
          height={35}
          alt={altButton}
          className="absolute right-[1.3rem] bottom-[-.8rem]"
          quality={80}
          priority
          loading="eager"
          blurDataURL={`${nextPublicApiUrl}${buttonIcon}`}
        />
      </Link>
    </Suspense>
  );
};

export default BtnCT;

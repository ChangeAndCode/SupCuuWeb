"use client";
import Image from "next/image";
import Link from "next/link";
import { UmbracoApi } from "@/lib/api";
import { useState, useEffect } from "react";

interface BtnCTProps {
  buttonText: string | string[];
  customLines?: string[];
  link?: string;
}

const BtnCT: React.FC<BtnCTProps> = ({ buttonText, customLines, link }) => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const nextPublicApiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const data = await UmbracoApi.getContent("landing-page");
        if (data && data.properties) {
          setContent(data);
        }
      } catch (error) {
        console.error("Error fetching content: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchContent();
  }, []);

  if (!content || loading) {
    return <div>Cargando...</div>;
  }
  const { properties } = content;
  const buttonIcon = `${nextPublicApiUrl}${properties.profileIcon[0].url}`;
  const altButton = properties.profileIcon[0].name;

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
    <Link
      href={link || "#"}
      className="relative main-Tipography bg-ColorPrincipal text-white h-[3.9rem] w-[18rem] uppercase font-pragmatica rounded-full flex flex-col justify-center items-center z-[20] pointer-events-auto"
    >
      {lines.map((line, index) => (
        <span key={index}>{line}</span>
      ))}

      <Image
        src={buttonIcon}
        width={35}
        height={35}
        alt={altButton}
        className="absolute right-[1.3rem] bottom-[-.8rem]"
        quality={80}
        priority
        loading="eager"
        blurDataURL={buttonIcon}
      />
    </Link>
  );
};

export default BtnCT;

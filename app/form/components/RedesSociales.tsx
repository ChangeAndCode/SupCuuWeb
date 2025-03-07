"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FooterData } from "@/types/form";

interface SocialMediaProps {
  data: FooterData;
}

const RedesSociales: React.FC<SocialMediaProps> = ({ data }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const socialMedia =
    data.socialMedia?.socialMedia?.items
      ?.filter(
        (item: any) =>
          item?.content?.properties?.logo?.length > 0 &&
          item?.content?.properties?.url?.length > 0
      )
      .map((item: any) => ({
        src: item.content.properties.logo[0]?.url || "",
        alt: item.content.properties.url[0]?.title || "Unknown",
        href: item.content.properties.url[0]?.url || "#",
      })) || [];

  console.log("mensaje ", socialMedia);

  if (!mounted) {
    return (
      <div className="h-[200px] animate-pulse bg-gray-200/20 rounded-lg" />
    );
  }

  return (
    <div suppressHydrationWarning>
      <p className="text-[1.2rem] xs:text-[1.5rem] md:text-[2rem] font-pragmatica uppercase text-white mb-[1.5rem]">
        {data.nameCompany.markup}
      </p>
      <div className="flex lg:justify-end">
        {socialMedia.map((red) => (
          <a
            key={red.alt}
            href={red.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <Image
              src={red.src}
              alt={red.alt}
              width={75}
              height={75}
              quality={80}
              priority
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default RedesSociales;

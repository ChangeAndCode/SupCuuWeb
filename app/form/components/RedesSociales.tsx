"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FooterData } from "@/types/form";
import { Suspense } from "react";
import Loading from "../loading";
import { parseSocialMedia } from "@/utils/parseSocialMedia";

interface SocialMediaProps {
  data: FooterData;
}

const RedesSociales: React.FC<SocialMediaProps> = ({ data }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const socialMedia = parseSocialMedia(data);

  if (!mounted) {
    return (
      <div className="h-[200px] animate-pulse bg-gray-200/20 rounded-lg" />
    );
  }

  return (
    <Suspense fallback={<Loading />}>
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
    </Suspense>
  );
};

export default RedesSociales;

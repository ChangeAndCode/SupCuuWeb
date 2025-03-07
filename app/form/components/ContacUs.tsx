"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FooterData } from "@/types/form";

interface ContactUsProps {
  data: FooterData;
}

const ContacUs: React.FC<ContactUsProps> = ({ data }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Render a placeholder with same dimensions
  if (!mounted) {
    return (
      <div className="md:w-5/12 h-[200px] animate-pulse bg-gray-200/20 rounded-lg" />
    );
  }

  return (
    <div className="md:w-5/12" suppressHydrationWarning>
      <p className="text-[1.5rem] md:text-[2rem] font-pragmatica uppercase text-white mb-[1.5rem]">
        Contact-us
      </p>
      <div className="flex items-center gap-x-4 mb-[1.5rem]">
        <Image
          src={data.telephoneIcon.url}
          alt={data.telephoneIcon.name}
          width={35}
          height={35}
          className="object-contain"
          quality={80}
          priority
        />
        <p className="text-[1em] font-pragmatica uppercase text-white">
          {data.telephone.markup}
        </p>
      </div>
      <div className="flex items-center gap-x-4 mb-[1.5rem]">
        <Image
          src={data.locationIcon.url}
          alt={data.locationIcon.name}
          width={35}
          height={35}
          className="object-contain"
          quality={80}
          priority
        />
        <p className="text-[1em] font-pragmatica uppercase text-white w-9/12">
          {data.location.markup}
        </p>
      </div>
    </div>
  );
};

export default ContacUs;

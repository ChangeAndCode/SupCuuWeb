import Image from "next/image";
import BtnCT from "./BtnCT";
import { Suspense } from "react";
import { ProfileCTA } from "@/types/home";

interface CardCorporatesProps {
  profile: ProfileCTA;
  buttonIcon: string;
  buttonIconAlt: string;
}

export default function CardCorporates({ profile, buttonIcon, buttonIconAlt }: CardCorporatesProps) {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
    <div className="flex flex-col justify-center items-center group">
      <div>
        <Image
          src={profile.imageUrl}
          alt={profile.imageAlt}
          width={490}
          height={390}
          style={{ height: "auto" }}
          quality={80}
          priority
          loading="eager"
          placeholder="blur"
          blurDataURL={profile.imageUrl}
          className="grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
        />
      </div>
      <div className="xl:transform xl:translate-x-[2rem] xl:translate-y-[2.4rem] text-center space-y-4">
        <div className="group-hover:scale-105 group-hover:grayscale-0">
          <BtnCT
            buttonText={profile.buttonContent}
            link={profile.buttonLink}
            buttonIcon={buttonIcon}
            buttonIconAlt={buttonIconAlt}
          />
        </div>
        <div>
          <p
            className="font-PerformanceMark text-ColorPrincipal text-2xl uppercase"
            dangerouslySetInnerHTML={{
              __html: profile.question.join("<br />"),
            }}
          />
        </div>
      </div>
    </div>
    </Suspense>
  );
}

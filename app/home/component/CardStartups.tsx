import Image from "next/image";
import BtnCT from "./BtnCT";
import { ProfileCTA } from "@/types/home";

interface CardStartupsProps {
  profile: ProfileCTA;
  buttonIcon: string;
  buttonIconAlt: string;
}

export default function CardStartups({ profile, buttonIcon, buttonIconAlt }: CardStartupsProps) {
  return (
    <div className="flex flex-col justify-center items-center group">
      <div>
        <Image
          src={profile.imageUrl}
          alt={profile.imageAlt}
          width={560}
          height={460}
          style={{ height: "auto" }}
          quality={80}
          priority
          loading="eager"
          placeholder="blur"
          blurDataURL={profile.imageUrl}
          className="grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
        />
      </div>
      <div className="xl:-translate-x-[4rem] xl:translate-y-[.5rem] text-center space-y-4">
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
  );
}
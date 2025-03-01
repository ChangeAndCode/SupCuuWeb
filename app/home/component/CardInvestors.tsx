import Image from "next/image";
import BtnCT from "./BtnCT";
import { ProfileCTA } from "@/lib/home/umbracoDataService";

interface CardInvestorsProps {
  profile: ProfileCTA;
  buttonIcon: string;
  buttonIconAlt: string;
}

export default function CardInvestors({ profile, buttonIcon, buttonIconAlt }: CardInvestorsProps) {
  return (
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
          className="grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
          blurDataURL={profile.imageUrl}
        />
      </div>
      <div className="text-center space-y-4">
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
import Image from "next/image";
import BtnCT from "./BtnCT";
import { ProfileCTA } from "@/types/home";
import { GetStaticProps } from "next";
import { Suspense } from "react";
import { getLandingPageData } from "@/lib/home/umbracoDataService";

interface CardEntrepreneurProps {
  profile: ProfileCTA;
  buttonIcon: string;
  buttonIconAlt: string;
}

export default function CardEntrepreneur({ profile, buttonIcon, buttonIconAlt }: CardEntrepreneurProps) {
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
        <div className="text-center xl:translate-y-[1.8rem] space-y-4">
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

export const getStaticProps: GetStaticProps = async () => {
  try {
    const profiles = await getLandingPageData();

    if (!profiles) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        profiles,
      },
      revalidate: 3600,
    };
  } catch (error) {
    console.error("Error al obtener los datos de Umbraco:", error);

    return {
      notFound: true,
    };
  }
};
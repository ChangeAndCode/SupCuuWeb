
import Image from "next/image";
import BtnCT from "./BtnCT";
import { getCardCorporateData } from "@/lib/landing-page";
import { GetStaticProps } from "next";
import { Suspense } from "react";
import Loading from "../loading";

export default async function CardEntrepreneur({
  itemIndex,
}: {
  itemIndex?: number;
}) {
  const profiles = await getCardCorporateData(itemIndex);
  return (
    <Suspense fallback={<Loading />}>
      <div className="flex flex-col justify-center items-center group">
        <div>
          <Image
            src={profiles.imageUrl}
            alt={profiles.imageAlt}
            width={490}
            height={390}
            style={{ height: "auto" }}
            quality={80}
            priority
            loading="eager"
            placeholder="blur"
            blurDataURL={profiles.imageUrl}
            className="grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
          />
        </div>
        <div className="text-center xl:translate-y-[1.8rem] space-y-4">
          <div className="group-hover:scale-105 group-hover:grayscale-0">
            <BtnCT
              buttonText={profiles.buttonContent}
              link={profiles.buttonLink}
            />
          </div>
          <div>
            <p
              className="font-PerformanceMark text-ColorPrincipal text-2xl uppercase"
              dangerouslySetInnerHTML={{
                __html: profiles.question.join("<br />"),
              }}
            />
          </div>
        </div>
      </div>
    </Suspense>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const profiles = await getCardCorporateData(0);
  return {
    props: {
      profiles,
    },
    revalidate: 3600,
  };
};

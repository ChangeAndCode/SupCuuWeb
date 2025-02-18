"use client";
import Image from "next/image";
import BtnCT from "./BtnCT";
import { UmbracoApi } from "@/lib/api";
import { useState, useEffect } from "react";

interface ProfileCTA {
  imageUrl: string;
  imageAlt: string;
  buttonContent: string;
  buttonLink: string;
  question: string[];
}

export default function CardInvestors() {
  const [content, setContent] = useState<any>(null);
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

  const profiles: ProfileCTA = {
    imageUrl:
      properties.profileUrl.items[2].content.properties.profileImage[0].url,
    imageAlt:
      properties.profileUrl.items[2].content.properties.profileImage[0].name,
    buttonContent: properties.profileUrl.items[2].content.properties.title,
    buttonLink:
      properties.profileUrl.items[2].content.properties.callToAction[0].url,
    question:
      properties.profileUrl.items[2]?.content?.properties?.question?.items?.map(
        (item: any) =>
          item?.content?.properties?.stringText ?? "Texto no disponible"
      ) ?? [],
  };

  return (
    <div className="flex flex-col justify-center items-center group">
      <div>
        <Image
          src={`${nextPublicApiUrl}${profiles.imageUrl}`}
          alt={profiles.imageAlt}
          width={490}
          height={390}
          style={{ height: "auto" }}
          quality={80}
          priority
          loading="eager"
          placeholder="blur"
          className="grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
          blurDataURL={`${nextPublicApiUrl}${profiles.imageUrl}`}
        />
      </div>
      <div className="text-center space-y-4">
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
  );
}

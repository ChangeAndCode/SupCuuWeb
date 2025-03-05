import Image from "next/image";
import { BannerProps } from "@/types/NextJump";

/**
 * Banner Component (Image with Text Overlay)
 */
function Banner({ checklistBannerText }: BannerProps) {
  return (
    <div className="mt-[2rem] md:mt-[-80px] relative z-0 w-full md:max-w-[800px] lg:max-w-[900px] xl:max-w-[1000px]">
      <Image
        src={"/Bg/bgWeAre.webp"}
        alt="STARTUP & SCALEUPS"
        width={800}
        height={450}
        quality={80}
        priority
        loading="eager"
        placeholder="blur"
        blurDataURL={"/Bg/bgWeAre.webp"}
        className="object-cover w-full"
      />

      {/* Text Overlay */}
      <div className="absolute inset-0 flex items-center">
        <div className="w-[90%] mx-auto pl-8 sm:pl-12 md:pl-16 lg:pl-20">
          <h3 className="font-pragmatica main-Tipography text-white leading-none text-left w-full">
            {checklistBannerText.map((text, index) => {
              // For the first half of the items (headlines), use the larger style
              if (index < Math.ceil(checklistBannerText.length / 2)) {
                return (
                  <span
                    key={index}
                    className="block text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[4rem] font-bold leading-[1.1]"
                  >
                    {text}
                  </span>
                );
              }
              // For the second half (subtext), use the smaller style
              else {
                return (
                  <span
                    key={index}
                    className="block text-[0.875rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[2rem] leading-[1.2]"
                  >
                    {text}
                  </span>
                );
              }
            })}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Banner;

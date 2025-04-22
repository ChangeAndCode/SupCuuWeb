// app/NextJump/components/Banner.tsx
import Image from "next/image";
import { BannerProps } from "@/types/NextJump";

/**
 * Banner Component (Image with Text Overlay)
 * Uses fluid typography (clamp) for better text resizing across screen widths.
 * Adjusted clamp MIN values and calc base for better fit on xs screens.
 */
function Banner({ checklistBannerText }: BannerProps) {
  // Define fluid font sizes using clamp(MIN, PREFERRED, MAX)
  // Reduced MIN and calc() base values to prevent overflow on xs screens
  // Kept vw and MAX the same to maintain size on md+
  const headlineFontSize =
    "text-[clamp(0.85rem,calc(0.7rem+3vw),4rem)]"; // Min: ~13.6px, Reduced calc base
  const subtextFontSize =
    "text-[clamp(0.6rem,calc(0.55rem+1.5vw),2rem)]"; // Min: 9.6px, Reduced calc base

  // Symmetrical padding with clamp
  const horizontalPadding = "px-[clamp(0.6rem,4vw,2.5rem)]"; // Min: ~9.6px

  return (
    // Reduced default top margin for screens < md
    <div className="mt-[0.5rem] md:mt-[-80px] relative z-0 w-full md:max-w-[800px] lg:max-w-[900px] xl:max-w-[1000px]">
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
        className="object-cover w-full aspect-[16/9]"
        // sizes="(max-width: 767px) 100vw, (max-width: 1023px) 800px, (max-width: 1279px) 900px, 1000px"
      />

      {/* Text Overlay */}
      <div className="absolute inset-0 flex items-center">
        {/* Use w-full and symmetrical padding */}
        <div className={`w-full ${horizontalPadding}`}>
          <div className="font-pragmatica main-Tipography text-white leading-none text-left w-full">
            {checklistBannerText.map((text, index) => {
              const isHeadline =
                index < Math.ceil(checklistBannerText.length / 2);

              return (
                <span
                  key={index}
                  className={`block ${
                    isHeadline
                      ? `${headlineFontSize} font-bold leading-[1.1]` // Use updated headline clamp
                      : `${subtextFontSize} leading-[1.2]` // Use updated subtext clamp
                  }`}
                >
                  {text}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;

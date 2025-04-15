// app/NextJump/components/Header.tsx
import Image from "next/image";
import { getImageUrl } from "@/utils/umbracoImageHelper";
import { HeaderProps } from "@/types/common/header";

function Header({ principalText, subtext, backgroundImage }: HeaderProps) {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
      <div className="flex-shrink-0 w-full md:w-1/2 lg:w-5/12 xl:w-1/2 relative z-10">
        <Image
          src={getImageUrl(backgroundImage.url, "/CT/segunda.webp")}
          alt="STARTUP & SCALEUPS"
          width={700} // Max render width
          height={600} // Maintain aspect ratio
          quality={80}
          priority
          loading="eager"
          placeholder="blur"
          blurDataURL={getImageUrl(backgroundImage.url, "/CT/segunda.webp")}
          // Ensure image scales correctly within its container
          className="object-cover w-full h-auto animate-slide-left"
        />
      </div>

      {/* Text container: Takes remaining space */}
      <div className="text-center md:text-left w-full md:w-1/2 lg:w-7/12 xl:w-1/2 relative z-20 md:pt-4 lg:pt-8">
        <h3
          className="font-pragmatica main-Tipography text-ColorPrincipal uppercase
                     text-[clamp(2rem,4vw,4rem)] /* Reduced max/vw */
                     leading-tight md:leading-[clamp(2.5rem,5vw,5rem)] /* Adjusted leading */
                     mt-0 md:mt-[clamp(1rem,3vw,2rem)] /* Adjusted margin */
                     " // REMOVED: transform md:translate-x[...]
        >
          {principalText[0]}
        </h3>
        <h2
          className="text-ColorPrincipal font-PerformanceMark
                     text-[clamp(4rem,10vw,9rem)] /* Reduced max/vw */
                     leading-[.85] /* Slightly increased leading */
                     w-full /* Let text wrap naturally */
                     " 

        >
          {subtext[0]}
        </h2>
        <h2
          className="text-ColorPrincipal font-PerformanceMark
                     text-[clamp(4rem,10vw,9rem)] /* Reduced max/vw */
                     leading-[clamp(3.5rem,9vw,8rem)] /* Adjusted leading */
                     w-full /* Let text wrap naturally */
                     mb-[clamp(1.5rem,4vw,2rem)] /* Adjusted margin */
                     " 
        >
          {subtext[1]}
        </h2>
      </div>
    </div>
  );
}

export default Header;

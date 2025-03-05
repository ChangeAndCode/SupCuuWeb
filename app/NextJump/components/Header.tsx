import Image from "next/image";
import { getImageUrl } from "@/utils/umbracoImageHelper";
import { HeaderProps } from "@/types/common/header";
function Header({ principalText, subtext, backgroundImage }: HeaderProps) {
    return (
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
        {/* Image container */}
        <div className="flex-shrink-0 w-full md:w-[500px] lg:w-[600px] xl:w-[650px] 2xl:w-[700px] h-auto relative z-10">
          <Image
            src={getImageUrl(backgroundImage.url, "/CT/segunda.webp")}
            alt="STARTUP & SCALEUPS"
            width={700}
            height={600}
            quality={80}
            priority
            loading="eager"
            placeholder="blur"
            blurDataURL={getImageUrl(backgroundImage.url, "/CT/segunda.webp")}
            className="object-cover w-full h-full animate-slide-left"
          />
        </div>
  
        {/* Text container */}
        <div className="text-center md:text-left w-full md:w-auto relative z-20">
          <h3 className="font-pragmatica main-Tipography text-ColorPrincipal uppercase 
                  text-[clamp(2rem,5vw,5rem)]  
                  leading-tight md:leading-[clamp(3rem,12vw,6rem)] 
                  mt-[clamp(1.5rem,4vw,3rem)] 
                  transform md:translate-x-[clamp(-200px,-12vw,-180px)]">
            {principalText[0]}
          </h3>
          <h2 className="text-ColorPrincipal font-PerformanceMark 
                  text-[clamp(6rem,16vw,13rem)] leading-[.80] 
                  w-full md:w-4/5 
                  transform md:translate-x-[clamp(-115px,-10vw,-170px)]">
            {subtext[0]}
          </h2>
          <h2 className="text-ColorPrincipal font-PerformanceMark 
                  text-[clamp(6rem,16vw,13rem)] leading-[clamp(6rem,14vw,10rem)]
                  w-full md:w-4/5 
                  transform md:translate-x-[clamp(-50px,-7vw,-100px)]
                  mb-[clamp(2rem,5vw,2rem)]">
            {subtext[1]}
          </h2>
        </div>
      </div>
    );
  }
  
  export default Header;  
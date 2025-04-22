// app/NextJump/page.tsx or wherever NextJumpComponent is defined

import Accelerators from "./Accelerators";
import Checklist from "./Checklist";
import { NextJumpProps } from "@/types/NextJump";
import Header from "./Header";
import Banner from "./Banner";
import CarouselEventsContainer from "@components/CarouselEvents/CarouselEventsContainer";
import Form from "../../form/page";

/**
 * NextJump main presentation component
 */
function NextJumpComponent({
  principalText,
  subtext,
  backgroundImage,
  checklistBannerText,
  checklistItems,
  checkListCtaParagraph,
  checkListCtaButtonText,
  checkListCtaButtonHref,
  acceleratorsTitle,
  accelerators,
}: NextJumpProps) {
  return (
    <div className="overflow-hidden">
      {/* Removed 'container' class. mx-auto and padding classes remain. */}
      <div className="mx-auto px-4 sm:px-8 md:px-14 lg:px-24 xl:px-32 py-8 sm:py-16 md:py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto w-full">
          <Header
            principalText={principalText}
            subtext={subtext}
            backgroundImage={backgroundImage}
          />

          {/* Banner image with text overlay */}
          <Banner checklistBannerText={checklistBannerText} />

          {/* Checklist */}
          <div className="mt-1 md:mt-2">
            <Checklist
              checklistItems={checklistItems}
              ctaParagraph={checkListCtaParagraph}
            />
          </div>

          {/* CTA Button */}
          <a
            href={checkListCtaButtonHref}
            className="mt-4 flex justify-center lg:justify-end relative z-20" // Add relative and z-20
          >
            <button
              className="bg-[#ff4544] text-white
                py-[0.75rem] sm:py-[0.875rem] md:py-[1rem]
                px-[2rem] sm:px-[3rem] md:px-[4rem] lg:px-[6rem]
                rounded-md
                main-Tipography
                text-[0.75rem] sm:text-[1rem] md:text-[1.3rem] lg:text-[1.5rem]
                uppercase
                font-pragmatica
                hover:bg-[#e63e3d] transition-colors duration-200
                w-auto min-w-[180px] sm:min-w-[220px] md:min-w-[260px]
                relative" // Add relative positioning
            >
              {checkListCtaButtonText}
            </button>
          </a>
        </div>
      </div>

      {/* Accelerators Section */}
      <div
        className="bg-[url('/Bg/bgPartners.webp')]
          bg-no-repeat bg-center
          bg-cover md:bg-[length:120vw_100%]
          mt-[-8rem] sm:mt-[-12rem] md:mt-[-17rem]
          relative pb-24"
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-14 lg:px-24 xl:px-32">
          {/* Content inside Accelerators section background, if any, goes here */}
        </div>
        {/* Ensure Accelerators is outside the inner padded div if it needs full background width */}
        <Accelerators accelerators={accelerators} title={acceleratorsTitle} />
      </div>
      <div className="max-w-[1500px] mx-auto">
        <CarouselEventsContainer />
      </div>

      {/* Contact Form */}
      <div className="mt-4">
        <Form />
      </div>
    </div>
  );
}

export default NextJumpComponent;

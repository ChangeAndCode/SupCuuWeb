"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { presidentCardData } from "@/types/home";

interface PresidenteProps {
  presidentData: presidentCardData;
}

export default function Presidente({ presidentData }: PresidenteProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div className="w-full max-w-[1920px] mx-auto relative translate-y-[-8rem] md:translate-y-0 4xl:translate-y-[-15rem]">
      <div className="flex flex-col-reverse justify-center items-center xl:flex-row px-[2rem] xl:px-0">
        <div className="bg-white w-full xl:w-[60rem] px-[2rem] xl:px-[5rem] py-[3rem] xl:py-[3.5rem] rounded-[4rem] xl:translate-x-[-6rem] 4xl:w-[100rem] 4xl:px-[7rem] 4xl:py-[7rem]">
          {presidentData.firstContent.map((item, index) => (
            <p
              key={index}
              className="text-[1.2rem] md:text-[1.5rem] lg:text-[1.7rem] font-pragmatica uppercase leading-[2rem] md:leading-[5rem] 4xl:text-[3.2rem]"
            >
              {item}
            </p>
          ))}
          <Image
            src={presidentData.logoImageUrl}
            width={500}
            height={500}
            alt={presidentData.logoImageName}
            className="mb-[2rem]"
            quality={80}
          />
          {presidentData.subContent.map((item, index) => (
            <p
              key={index}
              className="text-[1.2rem] md:text-[1.5rem] lg:text-[1.6rem] 4xl:text-[2.9rem] font-pragmatica uppercase w-full xl:w-10/12 leading-[2rem] 4xl:leading-[3.2rem]"
            >
              {item}
            </p>
          ))}
        </div>
        <div
          ref={elementRef}
          className="relative xl:absolute xl:translate-x-[24rem] 4xl:translate-x-[39rem] mb-[-4rem] md:mb-[-6rem] lg:mb-[-6.5rem] xl:mb-0 xl:mt-[6rem]"
        >
          <Image
            src={presidentData.presidentImageUrl}
            width={650}
            height={650}
            alt={presidentData.presidentImageName}
            quality={80}
            className={`${
              isVisible ? "slide-in-right" : "opacity-0"
            } 4xl:w-[1000px]`}
          />
        </div>
      </div>
    </div>
  );
}

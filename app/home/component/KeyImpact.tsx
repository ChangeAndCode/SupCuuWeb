'use client';
import { useEffect, useState } from "react";
import Image from "next/image";


interface Indicator {(UmbracoPageData)}

const KeyImpact: React.FC = () => {
  const [indicators, setIndicators] = useState<Indicator[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/umbraco?path=landing-page");
        const data = await response.json();
        
        console.log("Fetched Data:", data); 
  
        if (!data.indicators?.items || !Array.isArray(data.indicators.items)) {
          console.error("No indicators found in API response");
          return;
        }
  
        const parsedIndicators = data.indicators.items.map((item: any) => {
          const id = item.content.id;
          const matchingImage = data.impactImage.find((img: any) => img.id === id);
          const imageUrl = matchingImage ? matchingImage.url : "";
  
          console.log(`Indicator: ${id} -> Image URL: ${imageUrl}`);
  
          return {
            value: item.content.properties.value,
            unit: item.content.properties.unit,
            indicatorDescription: item.content.properties.indicatorDescription,
            imageUrl: data.impactImage[index]?.url ?? ""
          };
        });
  
        setIndicators(parsedIndicators);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <div>
      <div className="flex flex-col justify-center items-center overflow-hidden">
        <div className="flex items-center translate-x-[2.5rem] md:translate-x-[7rem] lg:translate-x-[11.2rem]">
          <div className="relative z-20">
            <h2 className="main-Tipography text-[2rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[6rem] 2xl:text-[8rem] font-pragmatica uppercase text-ColorPrincipal leading-[2rem] md:leading-[4rem] xl:leading-[6rem] 2xl:leading-[8rem]">
              Key Impact Indicators
            </h2>
          </div>
          <p className="text-[3rem] sm:text-[5.3rem] md:text-[8rem] lg:text-[9rem] xl:text-[14rem] 2xl:text-[20rem] font-PerformanceMark translate-x-[-2.5rem] sm:translate-x-[-2.5rem] md:translate-x-[-7rem] lg:translate-x-[-13rem] xl:translate-x-[-11rem] 2xl:translate-x-[-12rem] text-white relative z-10">
            2030
          </p>
        </div>

        <div className="flex flex-col xl:flex-row items-center xl:items-start xl:justify-around px-10 md:px-12 lg:px-28 gap-8">
          {indicators.map((indicator, index) => (
            <div key={index} className="flex flex-col w-full md:w-7/12 lg:w-6/12 xl:w-3/12 mb-10 lg:mb-0 gap-8">
              <Image
                src={indicator.imageUrl}
                alt={indicator.indicatorDescription}
                width={400}
                height={400}
                quality={80}
                style={{ width: "auto", height: "auto" }}
              />
              <p className="text-2xl font-poppins font-semibold capitalize">
                {indicator.indicatorDescription}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="px-7 flex justify-end">
        <p className="text-[5rem] md:text-[11rem] lg:text-[15rem] xl:text-[19rem] font-PerformanceMark whitespace-nowrap text-white">
          now
        </p>
      </div>
    </div>
  );
};

export default KeyImpact;

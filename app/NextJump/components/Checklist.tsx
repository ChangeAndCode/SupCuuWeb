import React from "react";
import Image from "next/image";


const ChecklistItem = ({ children }: { children: React.ReactNode }) => (
  <p className="font-poppins font-semibold text-base sm:text-lg md:text-xl lg:text-[1.3rem] pt-[-2]">
    {children}
  </p>
);

const Checklist = () => {
  const checklistItems = [
    "HAVE A CLEAR, PROVEN BUSINESS MODEL",
    "HAVE A STRONG, COMMITTED TEAM",
    "SHOW MARKET TRACTION (SALES, USERS, GROWTH)",
    "DEFINE A SCALABLE GROWTH PLAN",
    "KNOW YOUR KEY METRICS (CAC, LTV, ROI, ETC.)",
    "BE CLEAR ABOUT HOW RAISED FUNDS WILL BE USED",
    "HAVE A UNIQUE, DIFFERENTIATED VALUE PROPOSITION",
    "BE READY TO ANSWER INVESTOR QUESTIONS",
    "HAVE REALISTIC FINANCIAL PROJECTIONS",
    "HAVE A SOLID, COMPELLING PITCH",
  ];

  return (
    <div className="bg-white p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {checklistItems.map((item, index) => (
          <div
            className="flex items-center space-x-3 hover:bg-gray-50 rounded-lg p-2 transition-colors duration-200"
            key={index}
          >
            <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center flex-shrink-0">
              <Image
                src="/check.webp"
                alt="Check Icon"
                width={40}
                height={40}
                className="w-full h-full object-contain"
                quality={80}
                loading="lazy"
              />
            </div>
            <span className="text-gray-700 flex-1">
              <ChecklistItem>{item}</ChecklistItem>
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center lg:text-right">
        <p className="font-pragmatica main-Tipography text-ColorPrincipal text-base sm:text-lg md:text-xl lg:text-[1.3rem]">
          IF YOU&apos;VE GOT ALL THESE POINTS COVERED,
        </p>
        <p className="font-pragmatica main-Tipography text-ColorPrincipal text-base sm:text-lg md:text-xl lg:text-[1.3rem]">
          FILL OUT THE FORM BELOW, AND WE&apos;LL GET IN TOUCH WITH YOU
        </p>
      </div>

      <div className="mt-4 flex justify-center lg:justify-end">
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
    w-auto min-w-[180px] sm:min-w-[220px] md:min-w-[260px]"
        >
          CLICK HERE
        </button>
      </div>
    </div>
  );
};

export default Checklist;

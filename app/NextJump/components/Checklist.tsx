// app/NextJump/components/Checklist.tsx
import React from "react";
import Image from "next/image";

interface ChecklistProps {
  checklistItems: any[];
  ctaParagraph?: string; // BlockList of StringTextElement
}

const ChecklistItem = ({ children }: { children: React.ReactNode }) => (
  <p className="font-poppins font-semibold text-base sm:text-lg md:text-xl lg:text-[1.3rem] pt-[-2]">
    {children}
  </p>
);

const Checklist = ({ checklistItems, ctaParagraph }: ChecklistProps) => {
  return (
    <div className="bg-white p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {checklistItems.map((item, index) => (
          <div
            className="flex items-center space-x-3 hover:bg-gray-50 rounded-lg p-2 transition-colors duration-200"
            key={item.content.id}
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
              <ChecklistItem>
                {item.content.properties.stringText}
              </ChecklistItem>
            </span>
            
          </div>
        ))}
        
      </div>
      {ctaParagraph && (
        <div className="mt-6 text-center lg:text-right">
          {ctaParagraph.split('\n').map((line, index) => (
            <p key={index} className="font-pragmatica main-Tipography text-ColorPrincipal text-base sm:text-lg md:text-xl lg:text-[1.3rem]">
              {line}
            </p>
          ))}
        </div>
      )}
    </div>
    
  );
};

export default Checklist;

import React from "react";
import { resultGrids } from "@/types/home";

interface Props {
  grids: resultGrids;
}
const TransGrid: React.FC<Props> = ({ grids }) => {
  return (
    <>
      {grids.items.map((grid, index) => (
        <div key={index} className="flex flex-col items-center">
          <h3 className="text-[2rem] font-PerformanceMark text-ColorPrincipal">
            {grid.content.properties.resultGridTitle}
          </h3>
          <div className="space-y-6">
            {grid.content.properties.resultGrid.items.map((item, idx) => (
              <div key={idx}>
                <div className="flex items-center justify-center w-[290px] h-[290px]">
                  <div className="bg-white border-[.4rem] border-ColorPrincipal w-full h-full rounded-[3rem] uppercase">
                    <div className="bg-ColorPrincipal px-[1rem] py-[2.8rem] text-center rounded-[2rem]">
                      <h2 className="font-pragmatica main-Tipography text-white text-[2rem] leading-8">
                        {item.content.properties.resultTitle}
                      </h2>
                    </div>
                    <div className="font-pragmatica text-ColorPrincipal px-[1rem] py-[2rem] text-[1.2rem]">
                      <p className="text-center main-Tipography">
                        {item.content.properties.resultDescription}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default TransGrid;

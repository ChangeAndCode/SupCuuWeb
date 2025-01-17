import React from 'react';

const Innovation: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-[2rem] font-PerformanceMark text-ColorPrincipal">Innovation</h3>
      <div className="space-y-6">
        <div className="flex items-center justify-center w-[290px] h-[290px]">
          <div className="bg-white border-[.4rem] border-ColorPrincipal w-full h-full rounded-[3rem] uppercase">
            <div className="bg-ColorPrincipal px-[4rem] py-[3.8rem] text-center rounded-[2rem]">
              <h2 className="font-pragmatica text-white text-[2rem] leading-8">+100</h2>
            </div>
            <div className="font-pragmatica text-ColorPrincipal px-[2rem] py-[2.5rem] text-[1.2rem]">
              <p className="text-center">New Patents Requested</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-[290px] h-[290px]">
          <div className="bg-white border-[.4rem] border-ColorPrincipal w-full h-full rounded-[3rem] uppercase">
            <div className="bg-ColorPrincipal px-[4rem] py-[3.8rem] text-center rounded-[2rem]">
              <h2 className="font-pragmatica text-white text-[2rem] leading-8">16</h2>
            </div>
            <div className="font-pragmatica text-ColorPrincipal px-[2rem] py-[2.1rem] text-[1.2rem]">
              <p className="text-center">IMCO Patent Rankings</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-[290px] h-[290px]">
          <div className="bg-white border-[.4rem] border-ColorPrincipal w-full h-full rounded-[3rem] uppercase">
            <div className="bg-ColorPrincipal px-[4rem] py-[3.8rem] text-center rounded-[2rem]">
              <h2 className="font-pragmatica text-white text-[2rem] leading-8">8</h2>
            </div>
            <div className="font-pragmatica text-ColorPrincipal px-[2rem] py-[2.8rem] text-[1.2rem]">
              <p className="text-center">IMPI IP Ranking</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Innovation;

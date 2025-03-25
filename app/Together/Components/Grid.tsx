// app/Together/Components/Grid.tsx
import Image from "next/image";
import { GridElement } from "@/types/Together";

interface GridProps {
  gridElements: GridElement[];
}

const Grid: React.FC<GridProps> = ({ gridElements }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center gap-y-[5rem]">
      {gridElements.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-center w-[290px] h-[250px] relative" 
        >
          <div className="bg-white group hover:bg-ColorPrincipal border-[.4rem] border-ColorPrincipal w-full h-full rounded-[3rem] flex flex-col justify-between transition-colors duration-300">
            <div className="absolute top-[-5rem] left-0 right-0 flex justify-center">
              <div className="icon-container p-[1rem] rounded-full">
                <Image
                  src={item.icon}
                  alt={item.title}
                  className="w-[8rem] h-[8rem]"
                  width={50}
                  height={50}
                />
              </div>
            </div>
            <div className="font-pragmatica text-ColorPrincipal group-hover:text-white px-[2rem] py-[3.5rem] text-[1.2rem] text-center transition-colors duration-300">
              <p className="main-Tipography">{item.description || item.title}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Grid;

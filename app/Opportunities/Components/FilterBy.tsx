"use client";
import { ChevronDown } from "lucide-react";

interface FilterByProps {
  onFilterChange: (searchTerm: string) => void;
  filterType: string;
  onFilterTypeChange: (type: string) => void;
}

const FilterBy = ({ onFilterChange, filterType, onFilterTypeChange }: FilterByProps) => {
  return (
    <div
      className="
      xs:text-xs xs:my-5
      flex 
      items-center 
      border 
      border-none
      rounded-md 
      w-full
      bg-white"
    >
      <button
        className="
        md:text-2xl
        px-4 
        py-2 
        font-pragmatica
        bg-ColorPrincipal
        text-white 
        font-semibold 
        rounded-l-md"
      >
        FILTER BY
      </button>

      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => onFilterChange(e.target.value)}
        className="
        xs:text-xs
        sm:text-sm
        md:text-3xl
        lg:text-4xl
        flex-grow 
        px-4 
        border-l 
        border-gray-300 
        outline-none"
      />

      <div className="relative">
        <select
          value={filterType}
          onChange={(e) => onFilterTypeChange(e.target.value)}
          className="
          appearance-none
          px-4 
          py-2 
          pr-8
          cursor-pointer
          text-gray-700
          bg-transparent
          border-l
          border-gray-300
          focus:outline-none"
        >
          <option value="title">Título</option>
          <option value="description">Descripción</option>
          <option value="all">Todos</option>
        </select>
        <div className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2">
          <ChevronDown size={16} className="text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default FilterBy;
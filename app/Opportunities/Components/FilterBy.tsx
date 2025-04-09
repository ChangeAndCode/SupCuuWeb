// app/sites/opportunities/Components/FilterBy.tsx
"use client";
import { ChevronDown } from "lucide-react";

interface FilterByProps {
  onFilterChange: (searchTerm: string) => void;
  filterType: string;
  onFilterTypeChange: (type: string) => void;
  locale: string;
}

const FilterBy = ({
  onFilterChange,
  filterType,
  onFilterTypeChange,
  locale,
}: FilterByProps) => {
  const translations = {
    "en-us": {
      filterByButton: "FILTER BY",
      searchPlaceholder: "Search...",
      titleOption: "Title",
      descriptionOption: "Description",
      allOption: "All",
    },
    "es-mx": {
      filterByButton: "FILTRAR POR",
      searchPlaceholder: "Buscar...",
      titleOption: "Título",
      descriptionOption: "Descripción",
      allOption: "Todos",
    },
    // Add more locales as needed
  };

  const i18n = translations[locale] || translations["en-us"]; // Default to English if locale is not found

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
        {i18n.filterByButton}
      </button>

      <input
        type="text"
        placeholder={i18n.searchPlaceholder}
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
          <option value="title">{i18n.titleOption}</option>
          <option value="description">{i18n.descriptionOption}</option>
          <option value="all">{i18n.allOption}</option>
        </select>
        <div className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2">
          <ChevronDown size={16} className="text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default FilterBy;

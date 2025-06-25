// app/sites/opportunities/Components/FilterBy.tsx
"use client";
import { ChevronDown } from "lucide-react";
import { filterByTranslations } from "@/lib/Localization/opportunities"; // Import translations

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
  // Select the correct translation based on locale, defaulting to en-us
  // Use const for i18n as it's not reassigned
  const i18n =
    filterByTranslations[locale as keyof typeof filterByTranslations] ||
    filterByTranslations["en-us"];

  return (
    <div
      className="
      flex
      flex-col sm:flex-row /* Stack vertically on xs, row on sm+ */
      items-stretch sm:items-center /* Stretch items vertically when stacked */
      border-none
      rounded-md
      w-full
      bg-white
      my-5 /* Keep vertical margin */
      overflow-hidden /* Prevent internal overflow */
      sm:space-x-0 /* Remove space between items for sm+ if needed, handled by borders */
      "
    >
      {/* Filter Button */}
      <button
        className="
        text-sm md:text-base lg:text-lg /* Adjusted font sizes */
        px-3 py-2 /* Slightly reduced padding */
        font-pragmatica
        bg-ColorPrincipal
        text-white
        font-semibold
        rounded-t-md sm:rounded-l-md sm:rounded-tr-none /* Adjust rounding for stacking */
        w-full sm:w-auto /* Full width when stacked */
        text-center sm:text-left /* Center text when stacked */
        flex-shrink-0 /* Prevent shrinking */
        "
      >
        {i18n.filterByButton}
      </button>

      {/* Search Input */}
      <input
        type="text"
        placeholder={i18n.searchPlaceholder}
        onChange={(e) => onFilterChange(e.target.value)}
        className="
        text-sm md:text-base lg:text-lg /* Adjusted font sizes */
        px-3 py-2 /* Slightly reduced padding */
        border border-gray-300 /* Add full border when stacked */
        sm:border-l sm:border-t-0 sm:border-b-0 /* Specific borders for horizontal */
        outline-none
        w-full sm:flex-grow /* Full width when stacked, grow when horizontal */
        rounded-none /* No rounding in middle */
        "
      />

      {/* Filter Type Select */}
      <div className="relative w-full sm:w-auto flex-shrink-0 /* Full width when stacked */">
        <select
          title="filterType"
          value={filterType}
          onChange={(e) => onFilterTypeChange(e.target.value)}
          className="
          appearance-none
          text-sm md:text-base lg:text-lg /* Adjusted font sizes */
          px-3 py-2 /* Slightly reduced padding */
          pr-8 /* Space for arrow */
          cursor-pointer
          text-gray-700
          bg-transparent
          border border-gray-300 /* Add full border when stacked */
          sm:border-l sm:border-t-0 sm:border-b-0 /* Specific borders for horizontal */
          focus:outline-none
          rounded-b-md sm:rounded-r-md sm:rounded-bl-none /* Adjust rounding for stacking */
          w-full sm:w-auto /* Full width when stacked */
          text-left /* Ensure text aligns left */
          "
        >
          {/* Use values directly from i18n */}
          <option value="title">{i18n.titleOption}</option>
          <option value="description">{i18n.descriptionOption}</option>
          <option value="category">Categoría</option>
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

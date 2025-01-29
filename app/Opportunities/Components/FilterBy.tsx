import { ChevronDown } from "lucide-react";

const FilterBy = () => {
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
        rounded-l-md
        "
      >
        FILTER BY
      </button>

      <input
        type="text"
        placeholder="Search..."
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
        <button
          aria-label="dropdown"
          className="px-4 py-2 text-blue-600 flex items-center"
        >
          <ChevronDown size={16} />
        </button>
      </div>
    </div>
  );
};

export default FilterBy;

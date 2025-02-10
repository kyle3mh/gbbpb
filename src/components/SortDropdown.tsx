import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface SortDropdownProps {
  sortBy: string | null;
  setSortBy: (
    value:
      | "ranking"
      | "company"
      | "name"
      | "revenueNum"
      | "founded"
      | "industry"
  ) => void;
}

const SortDropdown: React.FC<SortDropdownProps> = ({ sortBy, setSortBy }) => {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { value: "ranking", label: "Rank (valuation)" },
    { value: "company", label: "Company (a-z)" },
    { value: "name", label: "Founder (a-z)" },
    { value: "industry", label: "Industry" },
    { value: "revenueNum", label: "Revenue" },
    { value: "founded", label: "Founded" },
  ] as const;

  // Display "SORT BY" if no sorting has been selected
  const currentSortLabel =
    options.find((option) => option.value === sortBy)?.label || "SORT BY";

  return (
    <div className="relative w-full md:w-44 h-9">
      {/* Button to Open Dropdown */}
      <button
        className="w-full h-9 px-4 py-2 bg-white rounded border border-neutral-900 flex justify-between items-center text-xs leading-none font-bold text-neutral-900 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{currentSortLabel}</span>
        {isOpen ? (
          <FaChevronUp className="text-black" />
        ) : (
          <FaChevronDown className="text-black" />
        )}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute w-full mt-1 bg-white rounded border border-black shadow-md z-10">
          {options.map((option) => (
            <button
              key={option.value}
              className={`w-full text-left px-4 py-2 text-xs font-normal text-neutral-900 hover:bg-slate-300 cursor-pointer ${
                sortBy === option.value
                  ? "bg-blue-400 text-white font-bold"
                  : ""
              }`}
              onClick={() => {
                setSortBy(option.value);
                setIsOpen(false);
              }}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortDropdown;

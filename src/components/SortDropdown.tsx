import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const SortDropdown = ({
  sortBy,
  setSortBy,
}: {
  sortBy: string;
  setSortBy: (value: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { value: "ranking", label: "Rank (valuation)" },
    { value: "company", label: "Company (a-z)" },
    { value: "name", label: "Founder (a-z)" },
    { value: "industry", label: "Industry" },
    { value: "revenueNum", label: "Revenue" },
    { value: "founded", label: "Founded" },
  ];

  return (
    <div className="relative w-44">
      {/* Button to Open Dropdown */}
      <button
        className="w-full h-9 px-4 py-2 bg-white rounded border border-neutral-900 flex justify-between items-center text-xs font-bold text-neutral-900"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>SORT BY</span>
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
              className={`w-full text-left px-4 py-2 text-xs font-normal text-neutral-900 hover:bg-slate-300 ${
                sortBy === option.value ? "bg-slate-300" : ""
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

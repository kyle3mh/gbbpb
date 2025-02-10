import { useState } from "react";
import { FaList } from "react-icons/fa";

interface ViewToggleButtonsProps {
  view: 'grid' | 'list';
  setView: (view: 'grid' | 'list') => void;
}

const ViewToggleButtons = ({ view, setView }: ViewToggleButtonsProps) => {
  const [isGridHovered, setIsGridHovered] = useState(false);
  const [isListHovered, setIsListHovered] = useState(false);

  return (
    <div className="flex w-full flex-nowrap items-center gap-2 font-semibold text-sm">
      {/* Grid View Button */}
      <button
        className={`w-full md:w-32 h-10 px-4 py-2 flex justify-between items-center gap-2 rounded transition cursor-pointer 
          ${
            view === "grid"
              ? "bg-blue-400 text-white"
              : "bg-white text-black hover:bg-blue-400 hover:text-white"
          }`}
        onMouseEnter={() => setIsGridHovered(true)}
        onMouseLeave={() => setIsGridHovered(false)}
        onClick={() => setView("grid")}
      >
        CARDS
        <svg
          width="17"
          height="14"
          viewBox="0 0 17 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.9344 3.2312H1.62813C1.28122 3.2312 1 3.51242 1 3.85933V12.6531C1 13 1.28122 13.2812 1.62813 13.2812H12.9344C13.2813 13.2812 13.5625 13 13.5625 12.6531V3.85933C13.5625 3.51242 13.2813 3.2312 12.9344 3.2312Z"
            stroke={view === "grid" || isGridHovered ? "white" : "black"}
            strokeWidth="1.33"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.5127 0.71875H15.4471C15.6137 0.71875 15.7734 0.784927 15.8912 0.902724C16.009 1.02052 16.0752 1.18029 16.0752 1.34688V10.7688"
            stroke={view === "grid" || isGridHovered ? "white" : "black"}
            strokeWidth="1.33"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* List View Button */}
      <button
        className={`w-full md:w-32 h-10 px-4 py-2 flex justify-between items-center gap-2 rounded transition cursor-pointer 
          ${
            view === "list"
              ? "bg-blue-400 text-white"
              : "bg-white text-black hover:bg-blue-400 hover:text-white"
          }`}
        onMouseEnter={() => setIsListHovered(true)}
        onMouseLeave={() => setIsListHovered(false)}
        onClick={() => setView("list")}
      >
        LIST
        <FaList
          className="w-4 h-4"
          color={view === "list" || isListHovered ? "white" : "black"}
        />
      </button>
    </div>
  );
};

export default ViewToggleButtons;

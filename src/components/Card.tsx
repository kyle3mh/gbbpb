import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

interface CardProps {
  id: number;
  name: string;
  company: string;
  netWorth: string;
  rank: number;
  year: number;
  industry: string;
  revenue: number;
  profits: number;
  hq: string;
  image: string;
  expandedText: string;
}

const Card: React.FC<CardProps> = ({
  id,
  name,
  company,
  netWorth,
  rank,
  year,
  industry,
  revenue,
  profits,
  hq,
  image,
  expandedText,
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-full">
      {/* Card (Landscape Layout) */}
      <div
        className={`w-full bg-slate-900 p-4 relative flex flex-col md:flex-row items-center 
        ${expanded ? "rounded-t-2xl border-b border-gray-300" : "rounded-2xl"}`}
      >
        {/* Column 1: Rank & Year */}
        <div className="flex flex-col items-center md:items-start w-full md:w-2/8">
          <div className="text-blue-400 text-6xl md:text-8xl font-bold mx-auto">
            {rank}
          </div>
          <div className="w-24 md:w-36 py-1.5 bg-slate-900 mx-auto rounded-2xl border border-white flex justify-center">
            <span className="text-white text-sm font-medium">{year}</span>
          </div>
        </div>

        {/* Column 2: Name, Company, Revenue */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-3/8">
          <h3 className="text-white text-3xl md:text-5xl font-bold">{name}</h3>
          <p className="text-blue-400 text-xl md:text-4xl font-medium">
            {company}
          </p>
          <p className="text-blue-400 text-lg md:text-3xl font-medium">
            {netWorth}
          </p>
        </div>

        {/* Column 3: Founder Image (Stacks on Mobile) */}
        <div className="w-full flex justify-center md:w-2/8">
          <img
            src={`/${image}`}
            alt={`${name}`}
            className="-mt-16 relative -bottom-4"
          />
        </div>

        {/* Expand Icon (Bottom Right) */}
        <button
          className="absolute bottom-4 right-4 text-white text-2xl focus:outline-none cursor-pointer"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? <FaMinus /> : <FaPlus />}
        </button>
      </div>

      {/* Expanded Section Below the Card */}
      {expanded && (
        <div className="w-full rounded-b-2xl p-6 flex flex-col md:flex-row justify-between border border-t-0">
          {/* Left Column: Expanded Text */}
          <div className="w-full md:w-2/3 text-neutral-900 text-lg font-semibold leading-7">
            {expandedText}
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block w-1 h-auto border-l border-black mx-6"></div>

          {/* Right Column: Details */}
          <div className="w-full md:w-1/3 flex flex-col justify-start items-start gap-2">
            <div className="w-full flex flex-col">
              <span className="text-neutral-900 text-sm font-bold">
                Industry
              </span>
              <span className="text-neutral-900 text-xs font-medium">
                {industry}
              </span>
            </div>
            <div className="w-full flex flex-col">
              <span className="text-neutral-900 text-sm font-bold">
                Revenue
              </span>
              <span className="text-neutral-900 text-xs font-medium">
                £{(revenue / 1_000_000_000).toFixed(1)}B per year
              </span>
            </div>
            <div className="w-full flex flex-col">
              <span className="text-neutral-900 text-sm font-bold">
                Profits
              </span>
              <span className="text-neutral-900 text-xs font-medium">
                £{(profits / 1_000_000_000).toFixed(1)}B per year
              </span>
            </div>
            <div className="w-full flex flex-col">
              <span className="text-neutral-900 text-sm font-bold">
                Year Founded
              </span>
              <span className="text-neutral-900 text-xs font-medium">
                {year}
              </span>
            </div>
            <div className="w-full flex flex-col">
              <span className="text-neutral-900 text-sm font-bold">HQ</span>
              <span className="text-neutral-900 text-xs font-medium">{hq}</span>
            </div>
            {/* View Full Profile Button */}
            <div className="w-full md:w-auto mt-4 md:mt-4">
              <button className="w-full md:w-auto h-9 px-4 bg-blue-400 rounded-lg flex justify-center items-center text-white text-sm font-bold">
                View Full Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;

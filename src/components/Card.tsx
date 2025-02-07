import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";

interface CardProps {
  id: number;
  name: string;
  company: string;
  valuation: number;
  ranking: number;
  founded: number;
  picture: string;
  industry: string;
  revenues: number;
  profitsLoss: number;
  hq: string;
  jobTitle: string;
  website: string;
  linkedin: string;
  shortBio: string;
}

// Helper function to convert a string to a URL-friendly slug.
const slugify = (str: string): string =>
  str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^a-z0-9-]/g, ""); // Remove non-alphanumeric characters except -

const Card: React.FC<CardProps & { sortBy: string }> = ({
  name,
  company,
  valuation,
  ranking,
  founded,
  industry,
  picture,
  revenues,
  profitsLoss,
  hq,
  jobTitle,
  website,
  linkedin,
  shortBio,
  sortBy, // Receive sortBy
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-full">
      {/* Card (Landscape Layout) */}
      <div
        className={`w-full bg-slate-900 p-4 relative flex flex-col md:flex-row items-center font-sans
        ${expanded ? "rounded-t-2xl border-b border-gray-300" : "rounded-2xl"}`}
      >
        {/* Column 1: Rank & Year */}
        <div className="flex flex-col items-center md:items-start w-full md:w-2/8">
          <div className="text-blue-400 text-6xl md:text-8xl font-bold mx-auto">
            {ranking}
          </div>
          {/* Show Pill Only if Sorting by 'Profits' or 'Founded' */}
          {sortBy === "founded" && (
            <div className="w-24 md:w-36 py-1.5 bg-slate-900 mx-auto rounded-2xl border border-white flex justify-center">
              <span className="text-white text-sm font-medium">
                Founded: {founded}
              </span>
            </div>
          )}
          {sortBy === "revenueNum" && (
            <div className="w-24 md:w-36 py-1.5 bg-slate-900 mx-auto rounded-2xl border border-white flex justify-center">
              <span className="text-white text-sm font-medium">{revenues}</span>
            </div>
          )}
          {sortBy === "industry" && (
            <div className="w-24 md:w-36 py-1.5 bg-slate-900 mx-auto rounded-2xl border border-white flex justify-center">
              <span className="text-white text-sm font-medium">{industry}</span>
            </div>
          )}
        </div>

        {/* Column 2: Name, Company, Net Worth */}
        <div className="flex flex-col md:items-start text-center md:text-left w-full md:w-3/8">
          <h3 className="text-white text-3xl md:text-5xl font-bold">{name}</h3>
          <p className="text-blue-400 text-xl md:text-4xl font-medium">
            {company}
          </p>
          <p className="text-blue-400 text-lg md:text-3xl font-medium">
            £{valuation} billion
          </p>
        </div>

        {/* Column 3: Founder Image */}
        <div className="w-full flex justify-center md:w-2/8">
          <img
            src="images/01-Sir-Jim-Ratcliffe 1.png"
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
            {/* {shortBio} */}
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="mt-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="mt-4">
              Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida.
            </p>
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
                {revenues}
              </span>
            </div>
            <div className="w-full flex flex-col">
              <span className="text-neutral-900 text-sm font-bold">
                Profits (Loss)
              </span>
              <span className="text-neutral-900 text-xs font-medium">
                {profitsLoss}
              </span>
            </div>
            <div className="w-full flex flex-col">
              <span className="text-neutral-900 text-sm font-bold">
                Year Founded
              </span>
              <span className="text-neutral-900 text-xs font-medium">
                {founded}
              </span>
            </div>
            <div className="w-full flex flex-col">
              <span className="text-neutral-900 text-sm font-bold">HQ</span>
              <span className="text-neutral-900 text-xs font-medium">{hq}</span>
            </div>
            {/* View Full Profile Button - now as a link */}
            <div className="w-full md:w-auto mt-4">
              <Link
                to={`/${slugify(company)}`}
                className="w-full md:w-auto h-9 px-4 bg-blue-400 rounded-lg flex justify-center items-center text-white text-sm font-bold"
              >
                View Full Profile
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;

// import { useState } from "react";
// import { FaPlus, FaMinus } from "react-icons/fa";

// interface CardProps {
//   id: number;
//   name: string;
//   company: string;
//   valuation: number;
//   ranking: number;
//   founded: number;
//   industry: string;
//   revenues: number;
//   profits: number;
//   hq: string;
//   jobTitle: string;
//   website: string;
//   linkedin: string;
//   expandedText: string;
// }

// const Card: React.FC<CardProps> = ({
//   name,
//   company,
//   valuation,
//   ranking,
//   founded,
//   industry,
//   revenues,
//   profits,
//   hq,
//   jobTitle,
//   website,
//   linkedin,
//   expandedText,
// }) => {
//   const [expanded, setExpanded] = useState(false);

//   return (
//     <div className="w-full">
//       <div
//         className={`w-full bg-slate-900 p-4 flex flex-col md:flex-row items-center ${
//           expanded ? "rounded-t-2xl border-b" : "rounded-2xl"
//         }`}
//       >
//         <div className="text-blue-400 text-6xl md:text-8xl font-bold mx-auto">
//           {ranking}
//         </div>
//         <div className="flex flex-col text-center md:text-left w-full md:w-3/8">
//           <h3 className="text-white text-3xl md:text-5xl font-bold">{name}</h3>
//           <p className="text-blue-400 text-xl md:text-4xl font-medium">
//             {company}
//           </p>
//           <p className="text-blue-400 text-lg md:text-3xl font-medium">
//             £{valuation}B
//           </p>
//         </div>
//         <button
//           className="absolute bottom-4 right-4 text-white text-2xl focus:outline-none"
//           onClick={() => setExpanded(!expanded)}
//         >
//           {expanded ? <FaMinus /> : <FaPlus />}
//         </button>
//       </div>

//       {expanded && (
//         <div className="w-full rounded-b-2xl p-6 border">
//           <p className="text-neutral-900 text-lg font-semibold">
//             {expandedText}
//           </p>
//           <div className="flex flex-col">
//             <p>
//               <strong>Industry:</strong> {industry}
//             </p>
//             <p>
//               <strong>Revenue:</strong> £{(revenues / 1_000_000_000).toFixed(1)}
//               B per year
//             </p>
//             <p>
//               <strong>Profits:</strong> £{(profits / 1_000_000_000).toFixed(1)}B
//               per year
//             </p>
//             <p>
//               <strong>Year Founded:</strong> {founded}
//             </p>
//             <p>
//               <strong>HQ:</strong> {hq}
//             </p>
//             <a href={website} target="_blank" className="text-blue-400">
//               Website
//             </a>
//             <a href={linkedin} target="_blank" className="text-blue-400">
//               LinkedIn
//             </a>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Card;

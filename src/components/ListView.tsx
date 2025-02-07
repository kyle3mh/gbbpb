// import React, { useState } from "react";
// import { FaMinus, FaPlus, FaSort } from "react-icons/fa";

// interface Person {
//   id: number;
//   name: string;
//   company: string;
//   netWorth: string;
//   rank: number;
//   year: number;
//   industry: string;
//   revenue: number;
//   profits: number;
//     hq: string;
//     expandedText: string;
// }

// // Helper function to convert a string to a URL-friendly slug.
// const slugify = (str: string): string =>
//   str
//     .toLowerCase()
//     .trim()
//     .replace(/\s+/g, "-") // Replace spaces with -
//     .replace(/[^a-z0-9-]/g, ""); // Remove non-alphanumeric characters except -

// const ListView = ({ people }: { people: Person[] }) => {
//   const [sortColumn, setSortColumn] = useState<"rank" | "company" | "founder" | "year" | "revenue">("rank");
//   const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
//   const [expandedRow, setExpandedRow] = useState<number | null>(null);

//   const toggleSort = (column: "rank" | "company" | "founder" | "year" | "revenue") => {
//     if (sortColumn === column) {
//       setSortDirection(sortDirection === "asc" ? "desc" : "asc");
//     } else {
//       setSortColumn(column);
//       setSortDirection("asc");
//     }
//   };

//   const toggleExpand = (id: number) => {
//     setExpandedRow(expandedRow === id ? null : id);
//   };

//   const sortedPeople = [...people].sort((a, b) => {
//     switch (sortColumn) {
//       case "rank":
//         return sortDirection === "asc" ? a.rank - b.rank : b.rank - a.rank;
//       case "company":
//         return sortDirection === "asc"
//           ? a.company.localeCompare(b.company)
//           : b.company.localeCompare(a.company);
//       case "founder":
//         const lastNameA = a.name.split(" ").pop()!;
//         const lastNameB = b.name.split(" ").pop()!;
//         return sortDirection === "asc"
//           ? lastNameA.localeCompare(lastNameB)
//           : lastNameB.localeCompare(lastNameA);
//       case "year":
//         return sortDirection === "asc" ? a.year - b.year : b.year - a.year;
//       case "revenue":
//         return sortDirection === "asc" ? a.revenue - b.revenue : b.revenue - a.revenue;
//       default:
//         return 0;
//     }
//   });

//   return (
//     <table className="w-full border-collapse bg-white rounded-lg shadow-md">
//       <thead className="bg-slate-900 text-white">
//         <tr>
//           <th
//             className="py-3 px-6 text-left cursor-pointer"
//             onClick={() => toggleSort("rank")}
//           >
//             <div className="flex items-center gap-0.5">
//               Rank <FaSort />
//             </div>
//           </th>
//           <th
//             className="py-3 px-6 text-left cursor-pointer"
//             onClick={() => toggleSort("company")}
//           >
//             <div className="flex items-center gap-0.5">
//               Company <FaSort />
//             </div>
//           </th>
//           <th
//             className="py-3 px-6 text-left cursor-pointer"
//             onClick={() => toggleSort("founder")}
//           >
//             <div className="flex items-center gap-0.5">
//               Founder <FaSort />
//             </div>
//           </th>
//           <th
//             className="py-3 px-6 text-left cursor-pointer"
//             onClick={() => toggleSort("year")}
//           >
//             <div className="flex items-center gap-0.5">
//               Founded <FaSort />
//             </div>
//           </th>
//           <th
//             className="py-3 px-6 text-left cursor-pointer"
//             onClick={() => toggleSort("revenue")}
//           >
//             <div className="flex items-center gap-0.5">
//               Revenues <FaSort />
//             </div>
//           </th>
//           <th className="py-3 px-6 text-right"></th>
//         </tr>
//       </thead>
//       <tbody className="text-black">
//         {sortedPeople.map((person) => (
//           <React.Fragment key={person.id}>
//             {/* Main Row */}
//             <tr className="border-b">
//               <td className="py-3 px-6">{person.rank}</td>
//               <td className="py-3 px-6">{person.company}</td>
//               <td className="py-3 px-6">{person.name}</td>
//               <td className="py-3 px-6">{person.year}</td>
//               <td className="py-3 px-6">
//                 £{(person.revenue / 1_000_000_000).toFixed(1)}B
//               </td>
//               <td className="py-3 px-6 text-right">
//                 <button
//                   onClick={() => toggleExpand(person.id)}
//                   className="text-black focus:outline-none"
//                 >
//                   {expandedRow === person.id ? <FaMinus /> : <FaPlus />}
//                 </button>
//               </td>
//             </tr>

//             {/* Expanded Row */}
//             {expandedRow === person.id && (
//               <tr className="">
//                 <td colSpan={6} className="p-4">
//                   <div className="w-full p-6 mt-2 flex flex-col md:flex-row justify-between">
//                     {/* Left Column: Expanded Text */}
//                     <div className="w-full md:w-2/3 text-neutral-900 text-lg font-semibold leading-7">
//                       {person.expandedText}
//                     </div>

//                     {/* Vertical Divider */}
//                     <div className="hidden md:block w-1 h-auto border-l border-black mx-6"></div>

//                     {/* Right Column: Details */}
//                     <div className="w-full md:w-1/3 flex flex-col justify-start items-start gap-2">
//                       <div className="w-full flex flex-col">
//                         <span className="text-neutral-900 text-sm font-bold">
//                           Industry
//                         </span>
//                         <span className="text-neutral-900 text-xs font-medium">
//                           {person.industry}
//                         </span>
//                       </div>
//                       <div className="w-full flex flex-col">
//                         <span className="text-neutral-900 text-sm font-bold">
//                           Revenue
//                         </span>
//                         <span className="text-neutral-900 text-xs font-medium">
//                           £{(person.revenue / 1_000_000_000).toFixed(1)}B per
//                           year
//                         </span>
//                       </div>
//                       <div className="w-full flex flex-col">
//                         <span className="text-neutral-900 text-sm font-bold">
//                           Profits
//                         </span>
//                         <span className="text-neutral-900 text-xs font-medium">
//                           £{(person.profits / 1_000_000_000).toFixed(1)}B per
//                           year
//                         </span>
//                       </div>
//                       <div className="w-full flex flex-col">
//                         <span className="text-neutral-900 text-sm font-bold">
//                           Year Founded
//                         </span>
//                         <span className="text-neutral-900 text-xs font-medium">
//                           {person.year}
//                         </span>
//                       </div>
//                       <div className="w-full flex flex-col">
//                         <span className="text-neutral-900 text-sm font-bold">
//                           HQ
//                         </span>
//                         <span className="text-neutral-900 text-xs font-medium">
//                           {person.hq}
//                         </span>
//                       </div>
//                       {/* View Full Profile Button */}
//                       <div className="w-full md:w-auto mt-4 md:mt-4">
//                         <button className="w-full md:w-auto h-9 px-4 bg-blue-400 rounded-lg flex justify-center items-center text-white text-sm font-bold">
//                           View Full Profile
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </td>
//               </tr>
//             )}
//           </React.Fragment>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default ListView;

import React, { useState } from "react";
import { FaMinus, FaPlus, FaSort } from "react-icons/fa";
import { Link } from "react-router-dom";

interface Person {
  id: number;
  name: string;
  company: string;
  valuation: number;
  ranking: number;
  founded: number;
  industry: string;
  revenues: string;
  revenueNum: number;
  profitsLoss: string;
  hq: string;
  jobTitle: string;
  expandedText: string;
}

const slugify = (str: string): string =>
  str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, ""); 

const ListView = ({ people }: { people: Person[] }) => {
  const [sortColumn, setSortColumn] = useState<
    "ranking" | "company" | "name" | "founded" | "revenueNum"
  >("ranking");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const toggleSort = (
    column: "ranking" | "company" | "name" | "founded" | "revenueNum"
  ) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const toggleExpand = (id: number) => {
    setExpandedRow(expandedRow === id ? null : id);
  };
  
  
  const sortedPeople = [...people].sort((a, b) => {
    switch (sortColumn) {
      case "ranking":
        return sortDirection === "asc"
          ? b.valuation - a.valuation
          : a.valuation - b.valuation;
      case "company":
        return sortDirection === "asc"
          ? a.company.localeCompare(b.company)
          : b.company.localeCompare(a.company);
      case "name": {
        // Extract last name for sorting
        const lastNameA = a.name.split(" ").slice(-1)[0].toLowerCase();
        const lastNameB = b.name.split(" ").slice(-1)[0].toLowerCase();
        return sortDirection === "asc"
          ? lastNameA.localeCompare(lastNameB)
          : lastNameB.localeCompare(lastNameA);
      }
      case "founded":
        return sortDirection === "asc"
          ? a.founded - b.founded
          : b.founded - a.founded;
      case "revenueNum":
        return sortDirection === "asc"
          ? b.revenueNum - a.revenueNum
          : a.revenueNum - b.revenueNum;
      default:
        return 0;
    }
  });

  return (
    <table className="w-full border-collapse bg-white rounded-lg shadow-md">
      <thead className="bg-slate-900 text-white">
        <tr>
          <th
            className="py-3 px-6 text-left cursor-pointer"
            onClick={() => toggleSort("ranking")}
          >
            <div className="flex items-center gap-0.5">
              Rank (valuation)
              <FaSort />
            </div>
          </th>
          <th
            className="py-3 px-6 text-left cursor-pointer"
            onClick={() => toggleSort("company")}
          >
            <div className="flex items-center gap-0.5">
              Company <FaSort />
            </div>
          </th>
          <th
            className="py-3 px-6 text-left cursor-pointer"
            onClick={() => toggleSort("name")}
          >
            <div className="flex items-center gap-0.5">
              Founder <FaSort />
            </div>
          </th>
          <th
            className="py-3 px-6 text-left cursor-pointer"
            onClick={() => toggleSort("founded")}
          >
            <div className="flex items-center gap-0.5">
              Founded <FaSort />
            </div>
          </th>
          <th
            className="py-3 px-6 text-left cursor-pointer"
            onClick={() => toggleSort("revenueNum")}
          >
            <div className="flex items-center gap-0.5">
              Revenues <FaSort />
            </div>
          </th>
          <th className="py-3 px-6 text-right"></th>
        </tr>
      </thead>
      <tbody className="text-black">
        {sortedPeople.map((person) => (
          <React.Fragment key={person.id}>
            <tr
              className={`border-b hover:bg-slate-300 cursor-pointer ${
                expandedRow === person.id ? "bg-slate-300" : ""
              }`}
              onClick={() => toggleExpand(person.id)}
            >
              <td className="py-3 px-6">
                {person.ranking} (£{person.valuation}B)
              </td>
              <td className="py-3 px-6">{person.company}</td>
              <td className="py-3 px-6">{person.name}</td>
              <td className="py-3 px-6">{person.founded}</td>
              <td className="py-3 px-6">{person.revenues}</td>
              <td className="py-3 px-6 text-right">
                <button
                  onClick={() => toggleExpand(person.id)}
                  className="text-black focus:outline-none cursor-pointer"
                >
                  {expandedRow === person.id ? <FaMinus /> : <FaPlus />}
                </button>
              </td>
            </tr>

            {expandedRow === person.id && (
              <tr className="">
                <td colSpan={6} className="p-4">
                  <div className="w-full p-6 flex flex-col md:flex-row justify-between">
                    <div className="w-full md:w-2/3 text-neutral-900 text-lg font-semibold leading-7">
                      {/* {person.shortBio} */}
                      <p className="">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <p className="mt-4">
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                      <p className="mt-4">
                        Curabitur pretium tincidunt lacus. Nulla gravida orci a
                        odio. Nullam varius, turpis et commodo pharetra, est
                        eros bibendum elit, nec luctus magna felis sollicitudin
                        mauris. Integer in mauris eu nibh euismod gravida.
                      </p>
                    </div>
                    <div className="hidden md:block w-1 h-auto border-l border-black mx-6"></div>
                    <div className="w-full md:w-1/3 flex flex-col justify-start items-start gap-2">
                      <div className="w-full flex flex-col">
                        <span className="text-neutral-900 text-sm font-bold">
                          Industry
                        </span>
                        <span className="text-neutral-900 text-xs font-medium">
                          {person.industry}
                        </span>
                      </div>
                      <div className="w-full flex flex-col">
                        <span className="text-neutral-900 text-sm font-bold">
                          Revenue
                        </span>
                        <span className="text-neutral-900 text-xs font-medium">
                          {person.revenues}
                        </span>
                      </div>
                      <div className="w-full flex flex-col">
                        <span className="text-neutral-900 text-sm font-bold">
                          Profits (Loss)
                        </span>
                        <span className="text-neutral-900 text-xs font-medium">
                          {person.profitsLoss}
                        </span>
                      </div>
                      <div className="w-full flex flex-col">
                        <span className="text-neutral-900 text-sm font-bold">
                          Year Founded
                        </span>
                        <span className="text-neutral-900 text-xs font-medium">
                          {person.founded}
                        </span>
                      </div>
                      <div className="w-full flex flex-col">
                        <span className="text-neutral-900 text-sm font-bold">
                          HQ
                        </span>
                        <span className="text-neutral-900 text-xs font-medium">
                          {person.hq}
                        </span>
                      </div>
                      <div className="w-full md:w-auto mt-4">
                        <Link
                          to={`/${slugify(person.company)}`}
                          className="w-full md:w-auto h-9 px-4 bg-blue-400 rounded-lg flex justify-center items-center text-white text-sm font-bold"
                        >
                          View Full Profile
                        </Link>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default ListView;


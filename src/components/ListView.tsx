import React, { useState } from "react";
import { FaMinus, FaPlus, FaSort } from "react-icons/fa";
import { Link } from "react-router-dom";
import { slugify } from "../utils/helpers";

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
  shortBio: string;
}

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
    <div className="overflow-x-auto w-full">
      <table className="w-full border-collapse bg-white rounded-lg shadow-md text-sm">
        <thead className="bg-slate-900 text-white font-bold leading-none">
          <tr>
            <th
              className="py-3 pl-4 pr-1 md:px-4 text-left cursor-pointer"
              onClick={() => toggleSort("ranking")}
            >
              <div className="flex items-center gap-0.5">
                Rank (valuation)
                <FaSort />
              </div>
            </th>
            <th
              className="py-3 pl-4 pr-1 md:px-4 text-left cursor-pointer"
              onClick={() => toggleSort("company")}
            >
              <div className="flex items-center gap-0.5">
                Company <FaSort />
              </div>
            </th>
            <th
              className="py-3 pl-4 pr-1 md:px-4 text-left cursor-pointer"
              onClick={() => toggleSort("name")}
            >
              <div className="flex items-center gap-0.5">
                Founder <FaSort />
              </div>
            </th>
            {/* Hidden on mobile, visible on larger screens */}
            <th
              className="py-3 px-4 text-left cursor-pointer hidden md:table-cell"
              onClick={() => toggleSort("founded")}
            >
              <div className="flex items-center gap-0.5">
                Founded <FaSort />
              </div>
            </th>
            <th
              className="py-3 px-4 text-left cursor-pointer hidden md:table-cell"
              onClick={() => toggleSort("revenueNum")}
            >
              <div className="flex items-center gap-0.5">
                Revenues <FaSort />
              </div>
            </th>
            <th className="py-3 px-4 text-right"></th>
          </tr>
        </thead>
        <tbody className="text-black font-light">
          {sortedPeople.map((person) => (
            <React.Fragment key={person.id}>
              <tr
                className={`border-b hover:bg-slate-300 cursor-pointer ${
                  expandedRow === person.id ? "bg-slate-300" : ""
                }`}
                onClick={() => toggleExpand(person.id)}
              >
                <td className="py-3 pl-4 pr-1 md:px-4 font-bold">
                  {person.ranking} (£{person.valuation}B)
                </td>
                <td className="py-3 px-1 md:px-4">{person.company}</td>
                <td className="py-3 px-1 md:px-4">{person.name}</td>
                {/* Hidden on mobile */}
                <td className="py-3 px-4 hidden md:table-cell">
                  {person.founded}
                </td>
                <td className="py-3 px-4 hidden md:table-cell">
                  {person.revenues}
                </td>
                <td className="py-3 px-4 text-right">
                  <button
                    onClick={() => toggleExpand(person.id)}
                    className="text-black focus:outline-none cursor-pointer"
                  >
                    {expandedRow === person.id ? <FaMinus /> : <FaPlus />}
                  </button>
                </td>
              </tr>
              {expandedRow === person.id && (
                <tr>
                  <td colSpan={6} className="p-4">
                    <div className="w-full flex flex-col md:flex-row justify-between">
                      <div className="w-full md:w-2/3 text-neutral-900 text-base font-serif font-normal leading-7">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>
                      </div>
                      <div className="hidden md:block w-1 h-auto border-l border-black mx-6"></div>
                      <div className="mt-4 md:mt-0 w-full grid grid-cols-2 md:grid-cols-1 md:w-1/3 justify-start items-start gap-2">
                        <div className="w-full flex flex-col">
                          <span className="text-neutral-900 text-sm font-bold">
                            Industry
                          </span>
                          <span className="text-neutral-900 text-xs font-light">
                            {person.industry}
                          </span>
                        </div>
                        <div className="w-full flex flex-col">
                          <span className="text-neutral-900 text-sm font-bold">
                            Revenue
                          </span>
                          <span className="text-neutral-900 text-xs font-light">
                            {person.revenues}
                          </span>
                        </div>
                        <div className="w-full flex flex-col">
                          <span className="text-neutral-900 text-sm font-bold">
                            Profits (Loss)
                          </span>
                          <span className="text-neutral-900 text-xs font-light">
                            {person.profitsLoss}
                          </span>
                        </div>
                        <div className="w-full flex flex-col">
                          <span className="text-neutral-900 text-sm font-bold">
                            Year Founded
                          </span>
                          <span className="text-neutral-900 text-xs font-light">
                            {person.founded}
                          </span>
                        </div>
                        <div className="w-full flex flex-col">
                          <span className="text-neutral-900 text-sm font-bold">
                            HQ
                          </span>
                          <span className="text-neutral-900 text-xs font-light">
                            {person.hq}
                          </span>
                        </div>
                        <div className="hidden md:flex w-full md:w-auto mt-4">
                          <Link
                            to={`/${slugify(person.company)}`}
                            className="w-full md:w-auto h-9 px-4 bg-blue-400 rounded-lg flex justify-center items-center text-white text-sm font-bold"
                          >
                            View Full Profile
                          </Link>
                        </div>
                      </div>
                      <div className="md:hidden w-full md:w-auto mt-4">
                        <Link
                          to={`/${slugify(person.company)}`}
                          className="w-full md:w-auto h-9 px-4 bg-blue-400 rounded-lg flex justify-center items-center text-white text-sm font-bold"
                        >
                          View Full Profile
                        </Link>
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListView;


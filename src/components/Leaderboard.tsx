import { useState, useEffect } from "react";
import SortDropdown from "./SortDropdown";
import GridView from "./GridView";
import ListView from "./ListView";
import ViewToggleButtons from "./ViewToggleButtons";

type SortOption = "ranking" | "company" | "name" | "revenueNum" | "industry" | "founded";

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
  profits: number;
  hq: string;
  jobTitle: string;
  website: string;
  linkedin: string;
  shortBio: string;
  picture: string;
  profitsLoss: string;
  expandedText: string;
}



const Leaderboard = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [view, setView] = useState<"grid" | "list">("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("ranking");

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setPeople(data))
      .catch((err) => console.error("Failed to load data:", err));
  }, []);

  const sortedPeople = [...people]
    .filter(
      (person) =>
        person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        person.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        person.industry.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "ranking":
          return a.ranking - b.ranking;
        case "company":
          return a.company.localeCompare(b.company);
        case "name": {
          // Extract last name for sorting
          const lastNameA = a.name.split(" ").slice(-1)[0].toLowerCase();
          const lastNameB = b.name.split(" ").slice(-1)[0].toLowerCase();
          return lastNameA.localeCompare(lastNameB);
        }
        case "revenueNum":
          return b.revenueNum - a.revenueNum;
        case "industry":
          return a.industry.localeCompare(b.industry);
        case "founded":
          return a.founded - b.founded;
        default:
          return 0;
      }
    });


  return (
    <div className="max-w-6xl mx-auto w-full">
      {/* Mobile Header */}
      <div
        className={`w-full p-2.5 bg-slate-900 rounded-lg flex flex-col md:flex-row justify-between items-center gap-2 ${
          view === "list" ? "rounded-b-none" : "rounded-lg"
        }`}
      >
        <ViewToggleButtons view={view} setView={setView} />

        <div className="flex md:flex-row flex-col gap-2 w-full md:w-auto">
          {/* Sort Dropdown (for Grid View only) */}
          {view === "grid" && (
            <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
          )}

          {/* Search Input with Icon */}
          <div className="relative w-full md:w-64">
            <input
              name="search"
              type="text"
              placeholder="Search"
              className="w-full h-9 px-4 pr-10 bg-white text-black rounded-md placeholder-black font-bold leading-none uppercase text-xs"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {/* <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" /> */}
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_401_2433)">
              <path
                d="M10.887 5.82005C10.887 8.58005 8.60699 10.84 5.77366 10.84C2.94033 10.84 0.666992 8.58672 0.666992 5.82005C0.666992 3.05338 2.94699 0.800049 5.78033 0.800049C8.61366 0.800049 10.8937 3.06005 10.8937 5.82005H10.887Z"
                stroke="#131313"
                strokeWidth="1.33333"
              />
              <path
                d="M9.84009 9.76001L13.3334 13.2"
                stroke="#131313"
                strokeWidth="1.33333"
                strokeLinecap="round"
              />
              </g>
              <defs>
              <clipPath id="clip0_401_2433">
                <rect
                width="14"
                height="13.7333"
                fill="white"
                transform="translate(0 0.133301)"
                />
              </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      {/* View Grid/List */}
      <div className="transition-opacity duration-300 ease-in-out">
        {view === "grid" ? (
          <GridView people={sortedPeople} sortBy={sortBy as SortOption} />
        ) : (
          <ListView people={sortedPeople} />
        )}
      </div>
    </div>
  );
};

export default Leaderboard;
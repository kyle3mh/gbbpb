import { useState, useEffect } from "react";
import { FaThLarge, FaList } from "react-icons/fa";
import GridView from "./GridView";
import ListView from "./ListView";

interface Person {
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

const Leaderboard = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [view, setView] = useState<"grid" | "list">("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<
    "rank" | "company" | "founder" | "revenue" | "profits" | "year"
  >("rank");

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setPeople(data))
      .catch((err) => console.error("Failed to load data:", err));
  }, []);

  const sortedPeople = [...people]
    .filter(
      (person) =>
        person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        person.company.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "rank":
          return a.rank - b.rank;
        case "company":
          return a.company.localeCompare(b.company);
        case "founder":
          return a.name
            .split(" ")
            .pop()!
            .localeCompare(b.name.split(" ").pop()!);
        case "revenue":
          return b.revenue - a.revenue;
        case "year":
          return a.year - b.year;
        default:
          return 0;
      }
    });

  return (
    <div className="max-w-6xl mx-auto p-4 w-full">
      {/* Header with View Toggle & Search */}
      <div className="flex justify-between bg-slate-900 p-3 rounded-t-lg sticky top-0 z-10">
        <div className="flex gap-2">
          <button
            className={`w-32 h-9 px-4 py-2 rounded justify-start items-center gap-8 inline-flex overflow-hidden ${
              view === "grid" ? "bg-blue-400 text-white" : "bg-white text-black"
            }`}
            onClick={() => setView("grid")}
          >
            <div className="text-xs font-bold font-['Neue Haas Grotesk Text Pro']">
              CARDS
            </div>
            <FaThLarge
              className={`${view === "grid" ? "text-white" : "text-black"}`}
            />
          </button>

          <button
            className={`w-32 h-9 px-4 py-2 rounded justify-start items-center gap-8 inline-flex overflow-hidden ${
              view === "list" ? "bg-blue-400 text-white" : "bg-white text-black"
            }`}
            onClick={() => setView("list")}
          >
            <div className="text-xs font-bold font-['Neue Haas Grotesk Text Pro']">
              LIST
            </div>
            <FaList
              className={`${view === "list" ? "text-white" : "text-black"}`}
            />
          </button>
        </div>

        {/* Sorting (Only for Grid View) */}
        {view === "grid" && (
          <select
            className="px-4 py-2 rounded bg-white text-black"
            value={sortBy}
            onChange={(e) =>
              setSortBy(
                e.target.value as
                  | "rank"
                  | "company"
                  | "founder"
                  | "revenue"
                  | "year"
              )
            }
          >
            <option value="rank">Sort by Rank</option>
            <option value="company">Sort by Company A-Z</option>
            <option value="founder">Sort by Founder (Surname A-Z)</option>
            <option value="revenue">Sort by Revenue (High to Low)</option>
            <option value="year">
              Sort by Founded Year (Oldest to Newest)
            </option>
          </select>
        )}

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 rounded bg-white text-black"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="transition-opacity duration-300 ease-in-out">
        {view === "grid" ? (
          <GridView people={sortedPeople} />
        ) : (
          <ListView people={sortedPeople} />
        )}
      </div>
    </div>
  );
};

export default Leaderboard;

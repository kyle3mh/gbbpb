// import { useState, useEffect } from "react";
// import { FaThLarge, FaList } from "react-icons/fa";
// import GridView from "./GridView";
// import ListView from "./ListView";

// interface Person {
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

// const Leaderboard = () => {
//   const [people, setPeople] = useState<Person[]>([]);
//   const [view, setView] = useState<"grid" | "list">("grid");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortBy, setSortBy] = useState<"ranking" | "company" | "name" | "revenues" | "founded">("ranking");

//   useEffect(() => {
//     fetch("data.json")
//       .then((res) => res.json())
//       .then((data) => setPeople(data))
//       .catch((err) => console.error("Failed to load data:", err));
//   }, []);

//   const sortedPeople = [...people]
//     .filter(
//       (person) =>
//         person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         person.company.toLowerCase().includes(searchTerm.toLowerCase())
//     )
//     .sort((a, b) => {
//       switch (sortBy) {
//         case "ranking":
//           return a.ranking - b.ranking;
//         case "company":
//           return a.company.localeCompare(b.company);
//         case "name":
//           return a.name.localeCompare(b.name);
//         case "revenues":
//           return b.revenues - a.revenues;
//         case "founded":
//           return a.founded - b.founded;
//         default:
//           return 0;
//       }
//     });

//   return (
//     <div className="max-w-6xl mx-auto p-4 w-full">
//       <div className="flex justify-between bg-slate-900 p-3 rounded-t-lg sticky top-0 z-10">
//         <div className="flex gap-2">
//           <button
//             className={`w-32 h-9 px-4 py-2 rounded ${view === "grid" ? "bg-blue-400 text-white" : "bg-white text-black"}`}
//             onClick={() => setView("grid")}
//           >
//             CARDS <FaThLarge />
//           </button>

//           <button
//             className={`w-32 h-9 px-4 py-2 rounded ${view === "list" ? "bg-blue-400 text-white" : "bg-white text-black"}`}
//             onClick={() => setView("list")}
//           >
//             LIST <FaList />
//           </button>
//         </div>

//         {view === "grid" && (
//           <select className="px-4 py-2 rounded bg-white text-black" value={sortBy} onChange={(e) => setSortBy(e.target.value as any)}>
//             <option value="ranking">Sort by Rank</option>
//             <option value="company">Sort by Company A-Z</option>
//             <option value="name">Sort by Founder A-Z</option>
//             <option value="revenues">Sort by Revenue (High to Low)</option>
//             <option value="founded">Sort by Founded Year (Oldest to Newest)</option>
//           </select>
//         )}

//         <input
//           type="text"
//           placeholder="Search..."
//           className="px-4 py-2 rounded bg-white text-black"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>

//       <div className="transition-opacity duration-300 ease-in-out">
//         {view === "grid" ? <GridView people={sortedPeople} /> : <ListView people={sortedPeople} />}
//       </div>
//     </div>
//   );
// };

// export default Leaderboard;

import { useState, useEffect } from "react";
import { FaThLarge, FaList } from "react-icons/fa";
import SortDropdown from "./SortDropdown";
import GridView from "./GridView";
import ListView from "./ListView";

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
}

const Leaderboard = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [view, setView] = useState<"grid" | "list">("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<
    "ranking" | "company" | "name" | "revenueNum" | "founded" | "industry"
  >("ranking");

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
    <div className="max-w-6xl mx-auto p-4 w-full">
      <div className="flex justify-between bg-slate-900 p-3 rounded-t-lg sticky top-0 z-10">
        <div className="flex gap-2">
          <button
            className={`w-32 h-9 px-4 py-2 flex items-center gap-2 rounded transition cursor-pointer ${
              view === "grid"
                ? "bg-blue-400 text-white"
                : "bg-white text-black border border-gray-300"
            }`}
            onClick={() => setView("grid")}
          >
            CARDS <FaThLarge className="w-5 h-5" />
          </button>

          {/* List View Button */}
          <button
            className={`w-32 h-9 px-4 py-2 flex items-center gap-2 rounded transition cursor-pointer ${
              view === "list"
                ? "bg-blue-400 text-white"
                : "bg-white text-black border border-gray-300"
            }`}
            onClick={() => setView("list")}
          >
            LIST <FaList className="w-5 h-5" />
          </button>
        </div>
        <div className="flex gap-2">
          {view === "grid" && (
            // <select
            //   className="px-4 py-2 rounded bg-white text-black"
            //   value={sortBy}
            //   onChange={(e) => setSortBy(e.target.value as any)}
            // >
            //   <option value="ranking">Rank (valuation)</option>
            //   <option value="company">Company (a-z)</option>
            //   <option value="name">Founder (a-z)</option>
            //   <option value="revenueNum">Revenue</option>
            //   <option value="industry">Industry (a-z)</option>
            //   <option value="founded">Founded</option>
            // </select>
            <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
          )}

          <input
            type="text"
            placeholder="Search..."
            className="px-2 rounded bg-white text-black"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="transition-opacity duration-300 ease-in-out">
        {view === "grid" ? (
          <GridView people={sortedPeople} sortBy={sortBy} />
        ) : (
          <ListView people={sortedPeople} />
        )}
      </div>
    </div>
  );
};

export default Leaderboard;


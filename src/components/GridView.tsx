// import Card from "./Card";

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
//   hq: string;
//   image: string;
//   expandedText: string;
// }

// const GridView = ({ people }: { people: Person[] }) => {
//   return (
//     <div className="w-full grid grid-cols-1 gap-12 mt-12">
//       {people.map((person) => (
//         <Card key={person.id} {...person}  />
//       ))}
//     </div>
//   );
// };

// export default GridView;


import Card from "./Card";

interface Person {
  id: number;
  name: string;
  company: string;
  valuation: number;
  ranking: number;
  founded: number;
  industry: string;
  revenues: number;
  profits: number;
  hq: string;
  jobTitle: string;
  website: string;
  linkedin: string;
  shortBio: string;
}

const GridView: React.FC<{ people: Person[]; sortBy: string }> = ({ people, sortBy }) => {
  return (
    <div className="w-full grid grid-cols-1 gap-12 mt-12">
      {people.map((person) => (
        <Card key={person.id} {...person} sortBy={sortBy} />
      ))}
    </div>
  );
};


export default GridView;

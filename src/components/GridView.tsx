import Card from "./card";

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

const GridView = ({ people }: { people: Person[] }) => {
  return (
    <div className="w-full grid grid-cols-1 gap-12 mt-12">
      {people.map((person) => (
        <Card key={person.id} {...person}  />
      ))}
    </div>
  );
};

export default GridView;

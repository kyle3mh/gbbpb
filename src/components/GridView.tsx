import Card from "./Card";

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
  website: string;
  linkedin: string;
  shortBio: string;
  picture: string;
}

type SortOption =
  | "ranking"
  | "company"
  | "name"
  | "revenueNum"
  | "founded"
  | "industry";

interface GridViewProps {
  people: Person[];
  sortBy: SortOption;
}

const GridView: React.FC<GridViewProps> = ({ people, sortBy }) => {
  return (
    <div className="w-full grid grid-cols-1 gap-12 mt-12">
      {people.map((person) => (
        <Card
          key={person.id}
          {...person}
          revenues={person.revenues.toLocaleString()}
          sortBy={sortBy}
        />
      ))}
    </div>
  );
};

export default GridView;

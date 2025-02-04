import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

interface Item {
  id: number;
  title: string;
  description: string;
  image: string;
}

const SinglePage = () => {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<Item | null>(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedItem = data.find((i: Item) => i.id === parseInt(id ?? ""));
        setItem(selectedItem);
      });
  }, [id]);

  if (!item) return <p className="text-center">Loading...</p>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold">{item.title}</h1>
      <img src={item.image} alt={item.title} className="w-full rounded-lg my-4" />
      <p className="text-lg">{item.description}</p>
      <Link to="/" className="mt-4 inline-block text-blue-500">Back to Home</Link>
    </div>
  );
};

export default SinglePage;

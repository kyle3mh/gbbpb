const SinglePageHeader = ({ company }: { company: string }) => {
  return (
    <div className="w-full h-80 relative bg-slate-900 flex">
      <div className="absolute left-12 top-10 text-white text-5xl font-bold leading-tight font-['Neue Haas Grotesk Display Pro']">
        Great British <br /> Billion-Pound <br /> Businesses
      </div>
      <div className="absolute left-12 bottom-10 text-white text-lg font-bold font-['Calluna'] leading-relaxed">
        Sponsored by
      </div>
      <img
        className="w-full h-80 object-cover"
        src="https://placehold.co/818x308"
        alt={`${company} Banner`}
      />
    </div>
  );
};

export default SinglePageHeader;



import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
//import SinglePageHeader from "../components/SinglePageHeader";
import Hero from "../components/Hero";
import Profile from "../components/Profile";
import MembershipCta from "../components/MembershipCta";
import ProfileTwoPeople from "../components/ProfileTwoPeople";
import { slugify } from "../utils/helpers";

// Define the interface for your data items
interface Item {
  id: number;
  name: string;
  name2: string
  company: string;
  valuation: number;
  ranking: string;
  industry: string;
  revenues: string;
  revenueNum: number;
  profitsLoss: string;
  founded: number;
  hq: string;
  jobTitle: string;
  jobTitle2: string;
  gender: string;
  gender2: string;
  ageWhenFoundedBusiness: number;
  ageWhenFoundedBusiness2: number;
  educationLevelUni: string;
  educationLevelUni2: string;
  employment: string;
  employment2: string;
  profession: string;
  profession2: string;
  linkedIn: string;
  linkedIn2: string;
  website: string;
  ambassador: string;
  expandedText: string;
  image: string;
  maritalStatus: string;
  maritalStatus2: string;
  foundingLocation: string;
}

const SinglePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [item, setItem] = useState<Item | null>(null);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data: Item[]) => {
        const selectedItem = data.find(
          (i: Item) => slugify(i.company) === slug
        );
        setItem(selectedItem || null);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, [slug]);

  if (!item) return <p className="text-center">Loading...</p>;

  return (
    <React.Fragment>
      <Hero />
      <div className="max-w-6xl mx-auto pb-4">
        {/* Page Header */}
        {/* <SinglePageHeader company={item.company} /> */}

        {/* Company Overview */}
        <div className="w-full bg-slate-900 p-4 relative flex flex-col md:flex-row items-center font-sans">
          {/* Column 1: Rank */}
          <div className="flex flex-col items-center md:items-start w-full md:w-2/8">
            <div className="text-blue-400 text-6xl md:text-8xl font-bold mx-auto">
              {item.ranking}
            </div>
          </div>

          {/* Column 2: Name, Company, Valuation */}
          <div className="flex flex-col md:items-start text-center md:text-left w-full md:w-3/8">
            <h3 className="text-white text-3xl md:text-5xl font-bold">
              {item.name}
            </h3>
            <p className="text-blue-400 text-xl md:text-4xl font-medium">
              {item.company}
            </p>
            <p className="text-blue-400 text-lg md:text-3xl font-medium">
              £{item.valuation} billion
            </p>
          </div>
        </div>

        {/* Profile Section */}
        {item.name2 ? (
          <ProfileTwoPeople
            name={item.name}
            name2={item.name2}
            gender={item.gender}
            gender2={item.gender2}
            education={item.educationLevelUni}
            education2={item.educationLevelUni2}
            profession={item.profession}
            profession2={item.profession2}
            employment={item.jobTitle}
            employment2={item.jobTitle2}
            ageWhenFoundedBusiness={item.ageWhenFoundedBusiness}
            ageWhenFoundedBusiness2={item.ageWhenFoundedBusiness2}
            linkedIn={item.linkedIn}
            linkedIn2={item.linkedIn2}
            companyName={item.company}
            industry={item.industry}
            revenues={item.revenues}
            profits={item.profitsLoss}
            yearFounded={item.founded}
            hq={item.hq}
            website={item.website}
            ambassador={item.ambassador}
            maritalStatus={item.maritalStatus}
            maritalStatus2={item.maritalStatus2}
            foundingLocation={item.foundingLocation}
          />
        ) : (
          <Profile
            name={item.name}
            gender={item.gender}
            education={item.educationLevelUni}
            profession={item.profession}
            employment={item.jobTitle}
            ageWhenFoundedBusiness={item.ageWhenFoundedBusiness}
            linkedIn={item.linkedIn}
            companyName={item.company}
            industry={item.industry}
            revenues={item.revenues}
            profits={item.profitsLoss}
            yearFounded={item.founded}
            maritalStatus={item.maritalStatus}
            hq={item.hq}
            website={item.website}
            ambassador={item.ambassador}
            foundingLocation={item.foundingLocation}
          />
        )}

        <div className="flex-col justify-start items-start gap-6 inline-flex py-16">
          <div className="self-stretch text-neutral-900 text-5xl font-bold font-['Neue Haas Grotesk Display Pro'] leading-10">
            Headline goes here
          </div>
          <div className="justify-center items-center inline-flex">
            <div className=" text-neutral-900 text-lg font-semibold font-['Calluna'] leading-7">
              Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Curabitur vel bibendum lorem. Morbi
              convallis convallis diam sit amet lacinia. Aliquam in elementum
              tellus.
              <br />
              <br />
              Curabitur tempor quis eros tempus lacinia. Nam bibendum
              pellentesque quam a convallis. Sed ut vulputate nisi. Integer in
              felis sed leo vestibulum venenatis. Suspendisse quis arcu sem.
              Aenean feugiat ex eu vestibulum vestibulu1m.
              <br />
              <br />
              Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a,
              blandit ultrices nibh. Mauris sit amet magna non ligula vestibulum
              eleifend. Nulla varius volutpat turpis sed lacinia.
              <br />
              <br />
              Curabitur tempor quis eros tempus lacinia. Nam bibendum
              pellentesque quam a convallis. Sed ut vulputate nisi. Integer in
              felis sed leo vestibulum venenatis. Suspendisse quis arcu sem.
              Aenean feugiat ex eu vestibulum vestibulu1m.
              <br />
              <br />
              Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a,
              blandit ultrices nibh. Mauris sit amet magna non ligula vestibulum
              eleifend. Nulla varius volutpat turpis sed lacinia.
              <br />
              <br />
              Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Curabitur vel bibendum lorem. Morbi
              convallis convallis diam sit amet lacinia. Aliquam in elementum
              tellus.
              <br />
              <br />
              Curabitur tempor quis eros tempus lacinia. Nam bibendum
              pellentesque quam a convallis. Sed ut vulputate nisi. Integer
              felis sed leo vestibulum venenatis. Suspendisse quis varcu sem.
              Aenean feugiat ex eu vestibulum vestibulu1m.
            </div>
          </div>
        </div>
        <MembershipCta />

        {/* Back to Home */}
        <Link to="/" className="mt-4 inline-block text-blue-500">
          Back to Home
        </Link>
      </div>
    </React.Fragment>
  );
};

export default SinglePage;

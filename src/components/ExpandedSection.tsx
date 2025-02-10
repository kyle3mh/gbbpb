import { Link } from "react-router-dom";
import { slugify } from "../utils/helpers";

interface ExpandedSectionProps {
  industry: string;
  revenues: string;
  profitsLoss: string;
  founded: number;
  hq: string;
  company: string;
  //shortBio: string;
}

const ExpandedSection: React.FC<ExpandedSectionProps> = ({
  industry,
  revenues,
  profitsLoss,
  founded,
  hq,
  company,
  //shortBio,
}) => {
  return (
    <div className="w-full rounded-b-2xl p-6 flex flex-col md:flex-row justify-between border border-t-0">
      {/* Left Column: Expanded Text */}
      <div className="w-full md:w-2/3 text-neutral-900 text-base font-serif leading-7">
        {/* <p className="">{shortBio}</p> */}
        <p className="py-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p className="py-4">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <p className="py-4">
          Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam
          varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus
          magna felis sollicitudin mauris.
        </p>
      </div>

      {/* Vertical Divider */}
      <div className="hidden md:block w-1 h-auto border-l border-black mx-6"></div>

      {/* Right Column: Details */}
      <div className="w-full md:w-1/3 flex flex-col justify-start items-start gap-2">
        <div className="w-full flex flex-col">
          <span className="text-neutral-900 text-sm font-bold">Industry</span>
          <span className="text-neutral-900 text-xs font-medium">
            {industry}
          </span>
        </div>
        <div className="w-full flex flex-col">
          <span className="text-neutral-900 text-sm font-bold">Revenue</span>
          <span className="text-neutral-900 text-xs font-medium">
            {revenues}
          </span>
        </div>
        <div className="w-full flex flex-col">
          <span className="text-neutral-900 text-sm font-bold">
            Profits (Loss)
          </span>
          <span className="text-neutral-900 text-xs font-medium">
            {profitsLoss}
          </span>
        </div>
        <div className="w-full flex flex-col">
          <span className="text-neutral-900 text-sm font-bold">
            Year Founded
          </span>
          <span className="text-neutral-900 text-xs font-medium">
            {founded}
          </span>
        </div>
        <div className="w-full flex flex-col">
          <span className="text-neutral-900 text-sm font-bold">HQ</span>
          <span className="text-neutral-900 text-xs font-medium">{hq}</span>
        </div>

        {/* View Full Profile Button */}
        <div className="w-full md:w-auto mt-4 md:mt-auto">
          <Link
            to={`/${slugify(company)}`}
            className="w-full md:w-auto h-9 px-4 bg-blue-400 rounded-lg flex justify-center items-center text-white text-sm font-bold"
          >
            View Full Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExpandedSection;

import React from "react";

interface ProfileProps {
  name: string;
  gender: string;
  education: string;
  profession: string;
  employment: string;
  maritalStatus: string;
  linkedIn: string;
  companyName: string;
  industry: string;
  revenues: string;
  profits: string;
  yearFounded: number;
  ageWhenFoundedBusiness: number;
  hq: string;
  foundingLocation: string;
  website: string;
  ambassador: string;
}

const Profile: React.FC<ProfileProps> = ({
  //name,
  gender,
  education,
  profession,
  employment,
  maritalStatus,
  linkedIn,
  companyName,
  industry,
  revenues,
  profits,
  yearFounded,
  hq,
  foundingLocation,
}) => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-start items-stretch gap-5 py-8">
      {/* Left Column (Image) */}
      <div className="w-full md:w-5/12 bg-slate-900 rounded-2xl flex flex-col">
        <div className="relative flex-grow ">
          <img
            src="https://placehold.co/500x500"
            alt="Profile Placeholder"
            className="w-full max-h-[400px] object-cover rounded-2xl h-full"
          />
          {/* BL Ambassador Banner */}
          <div className="absolute bottom-0 w-full bg-blue-400 rounded-bl-2xl rounded-br-2xl px-9 py-2">
            <p className="text-white text-sm font-medium">BL Ambassador</p>
          </div>
        </div>
      </div>

      {/* Vertical Divider */}
      <div className="hidden md:block w-px bg-neutral-900"></div>

      {/* Right Column (Text) */}
      <div className="w-full md:w-7/12 flex flex-col justify-between h-full items-stretch gap-4">
        {/* Personal Details - Stretches to Fill */}
        <div className="grid grid-cols-2 gap-4 flex-grow">
          <div className="flex flex-col">
            <p className="text-neutral-900 text-sm font-bold">Gender</p>
            <p className="text-neutral-900 text-xs font-medium">
              {gender === "M" ? "Male" : gender === "F" ? "Female" : gender}
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-neutral-900 text-sm font-bold">
              Education Level
            </p>
            <p className="text-neutral-900 text-xs font-medium">{education}</p>
          </div>
          <div className="flex flex-col">
            <p className="text-neutral-900 text-sm font-bold">
              Previous Profession
            </p>
            <p className="text-neutral-900 text-xs font-medium">{profession}</p>
          </div>
          <div className="flex flex-col">
            <p className="text-neutral-900 text-sm font-bold">
              Previous Employment
            </p>
            <p className="text-neutral-900 text-xs font-medium">{employment}</p>
          </div>
          <div className="flex flex-col">
            <p className="text-neutral-900 text-sm font-bold">Marital Status</p>
            <p className="text-neutral-900 text-xs font-medium">
              {maritalStatus}
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-neutral-900 text-sm font-bold">Social Media</p>
            <a
              href={linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-800 text-xs font-normal underline"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Company Details - Always at Bottom */}
        <div className="w-auto md:-ml-5 md:r-5 bg-gray-200 p-4 relative pb-8">
          <p className="text-neutral-900 text-xl font-bold">{companyName}</p>
          <div className="grid grid-cols-2 gap-4 mt-3">
            <div className="flex flex-col">
              <p className="text-neutral-900 text-sm font-bold">Industry</p>
              <p className="text-neutral-900 text-xs font-medium">{industry}</p>
            </div>
            <div className="flex flex-col">
              <p className="text-neutral-900 text-sm font-bold">Revenue</p>
              <p className="text-neutral-900 text-xs font-medium">{revenues}</p>
            </div>
            <div className="flex flex-col">
              <p className="text-neutral-900 text-sm font-bold">Profits</p>
              <p className="text-neutral-900 text-xs font-medium">{profits}</p>
            </div>
            <div className="flex flex-col">
              <p className="text-neutral-900 text-sm font-bold">Year Founded</p>
              <p className="text-neutral-900 text-xs font-medium">
                {yearFounded}
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-neutral-900 text-sm font-bold">HQ</p>
              <p className="text-neutral-900 text-xs font-medium">{hq}</p>
            </div>
            <div className="flex flex-col">
              <p className="text-neutral-900 text-sm font-bold">
                Founding Location
              </p>
              <p className="text-neutral-900 text-xs font-medium">
                {foundingLocation}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

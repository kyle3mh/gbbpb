import React from "react";

const MembershipCta: React.FC = () => {
  return (
    <div className="rounded-xl border border-blue-950 flex flex-col justify-center items-center">
      <div className="w-full px-12 py-14 flex flex-col justify-start items-start gap-6">
        <div className="w-full flex flex-col justify-start items-center gap-4">
          <div className="w-full text-neutral-900 text-4xl font-black font-['Neue Haas Grotesk Display Pro']">
            Grow your business <i>faster</i> with Business Leader
          </div>
          <div className="w-full text-neutral-900 text-xl font-normal font-['Calluna'] leading-loose">
            Join our community of CEOs and founders and unlock your company's
            potential
          </div>
        </div>
        <div className="flex justify-start items-center gap-4">
          <button className="p-3 bg-blue-400 rounded-lg flex justify-center items-center gap-2">
            <span className="text-center text-white text-sm font-bold font-['Neue Haas Grotesk Text Pro'] leading-none">
              Discover our membership
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MembershipCta;

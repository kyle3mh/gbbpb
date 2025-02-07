import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[500px] bg-slate-900 flex flex-col md:flex-row items-center justify-between px-8 md:px-16 lg:px-32">
      {/* Left Column - Text Content */}
      <div className="text-white text-center md:text-left flex flex-col justify-center items-center md:items-start">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight font-['Neue Haas Grotesk Display Pro']">
          Great British <br />
          Billion-Pound <br />
          Businesses
        </h1>
        <p className="text-lg font-bold font-['Calluna'] mt-4">Sponsored by</p>
      </div>

      {/* Right Column - Image */}
      <div className="w-full md:w-1/2 h-full">
        <img
          src="images/header_image.jpg" 
          alt="Great British Businesses"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Hero;

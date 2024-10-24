import React from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="text-center ">
      <div className="flex flex-col gap-5 my-8">
        <span className="px-4 py-2 mx-auto  rounded-full font-medium bg-gray-100 text-[#27ad99]">
          Elevate Your Ambition
        </span>
        <h1 className="text-5xl font-bold">
          Search, Apply &<br />
          Get Your<span className="text-[#6A38C2]">Dream Jobs</span>
        </h1>
        <p>
          success comes from embracing every challenge, learning constantly, and
          fly high
        </p>
      </div>
      <div
        className="flex w-[48%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto
      "
      >
        <input
          type="text"
          placeholder="Find your dream one's"
          className="outline-none border-none w-full "
        />
        <Button className="rounded-r-full bg-blue-600">
          <Search />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;

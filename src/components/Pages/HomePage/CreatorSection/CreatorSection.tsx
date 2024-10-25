import React from "react";
import ProfileCards from "./ProfileCard";
import { MdOutlineRocketLaunch } from "react-icons/md";

const CreatorSection = () => {
  return (
    <>
      <div className="px-20 flex-col sm:flex-row  flex justify-between my-10">
        <div>
          <h1 className="font-work-sans font-semibold text-[32px]">
            Top Creatures
          </h1>
          <p className="font-work-sans my-4">
            Checkout Top Rated Creators on the NFT Marketplace
          </p>
        </div>
        <button className="border border-btnColor px-10 capitalize h-[60px] rounded-[20px] flex justify-center gap-4 items-center transition duration-300 hover:bg-backgroundSecondary">
          <span className="text-btnColor">
            <MdOutlineRocketLaunch />
          </span>
          <span>view rankings</span>
        </button>
      </div>
      <ProfileCards />
    </>
  );
};

export default CreatorSection;

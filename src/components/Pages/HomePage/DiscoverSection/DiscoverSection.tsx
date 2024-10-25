import React from "react";
import { FaEye } from "react-icons/fa6";
import DiscoverSectionItems from "./DiscoverSectionItems";

const DiscoverSection = () => {
  return (
    <>
      <div className="px-20 flex-col sm:flex-row flex justify-between my-10">
        <div>
          <h1 className="font-work-sans font-semibold text-[32px]">
            Discover More NFTs
          </h1>
          <p className="font-work-sans my-4">Explore new trending NFTs</p>
        </div>
        <button className="border border-btnColor px-10 capitalize h-[60px] rounded-[20px] flex justify-center gap-4 items-center transition duration-300 hover:bg-backgroundSecondary">
          <span className="text-btnColor">
            <FaEye />
          </span>
          <span>view rankings</span>
        </button>
      </div>
      <DiscoverSectionItems />
    </>
  );
};

export default DiscoverSection;

import React from "react";
import StepsComponent from "./StepComponent";

const ExplainSection = () => {
  return (
    <div className="px-2 sm:px-20">
      <div>
        <h1 className="font-work-sans font-semibold text-[32px]">
          Top Creatures
        </h1>
        <p className="font-work-sans my-4">
          Checkout Top Rated Creators on the NFT Marketplace
        </p>
      </div>
      <StepsComponent />
    </div>
  );
};

export default ExplainSection;

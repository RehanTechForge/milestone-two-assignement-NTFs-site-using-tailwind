import Image from "next/image";
import React from "react";
import CollectionSectionItem from "./CollectionSectionItem";

const CollectionSection = () => {
  return (
    <section className="sm:px-10 md:px-20">
      <div>
        <h1 className="font-work-sans font-semibold text-[32px]">
          Trending Collection
        </h1>
        <p className="font-work-sans my-4">
          Checkout our weekly updated trending collection.
        </p>
      </div>
      <CollectionSectionItem />
    </section>
  );
};

export default CollectionSection;

import Image from "next/image";
import React from "react";

const Search = () => {
  return (
    <section className="p-4 sm:px-20">
      <h2 className="font-work-sans font-semibold text-3xl sm:text-6xl">
        Browse Marketplace
      </h2>
      <p className=" text-lg sm:text-2xl my-4">
        Browse through more than 50k NFTs on the NFT Marketplace.
      </p>
      <div className="flex relative">
        <input
          type="text"
          placeholder="Search your favourite NFTs"
          className="w-[95%] bg-background text-captionText border border-captionText focus:outline-none rounded-lg py-3 px-3"
        />
        <Image
          src={"/images/main/search.png"}
          alt="search"
          width={30}
          height={30}
          className="absolute right-[40px] sm:right-[50px] lg:right-[70px] top-[.7rem] cursor-pointer"
        />
      </div>
    </section>
  );
};

export default Search;

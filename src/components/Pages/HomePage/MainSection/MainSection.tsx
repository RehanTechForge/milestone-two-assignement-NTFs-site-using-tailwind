import NumberCounter from "@/components/NumberCounter/NumberCounter"; // Fix the import path
import Image from "next/image";
import React from "react";
import { MdOutlineRocketLaunch } from "react-icons/md";

const MainSection = () => {
  return (
    <section className="px-5 sm:px-10 md:px-20 py-10 grid grid-cols-1 md:grid-cols-12 gap-10">
      <div className="col-span-1 md:col-span-6 pr-0 md:pr-10">
        <h1 className="text-4xl md:text-6xl font-work-sans font-semibold">
          Discover <br /> Digital Art & Collect NFTs
        </h1>
        <p className="font-work-sans text-lg md:text-[22px] my-5">
          NFT marketplace UI created with Anima for Figma. Collect, buy and sell
          art from more than 20k NFT artists.
        </p>
        <button className="capitalize w-[100%] sm:max-w-[250px] bg-btnColor rounded-[20px] px-6 md:px-[50px] h-[50px] md:h-[60px] flex items-center flex-row gap-4 text-[16px] md:text-[18px] font-work-sans font-semibold">
          <span>
            <MdOutlineRocketLaunch />
          </span>
          <span>get started</span>
        </button>
        <div className="md:flex hidden md:flex-row justify-between my-5">
          {counterData.map((item, index) => (
            <div key={index} className="mb-4 md:mb-0">
              <NumberCounter targetNumber={item.targetNumber} duration={5} />
              <span className="font-work-sans font-medium text-[16px] md:text-[18px] capitalize">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="col-span-1 md:col-span-6">
        <div className="rounded-t-3xl rounded-b-2xl bg-backgroundSecondary">
          <Image
            src={"/images/main/main.png"}
            alt="main"
            height={400}
            width={600}
            className="object-cover w-full"
          />
          <div className="px-4 my-5">
            <h2 className="font-work-sans mb-2 text-[24px] md:text-[28px] font-semibold">
              Space Walking
            </h2>
            <div className="pb-10 flex items-center gap-2">
              <Image
                src={"/images/creator/Avatar.png"}
                alt="avatar"
                width={40}
                height={40}
              />
              <span className="text-[16px] md:text-[18px]">Animakid</span>
            </div>
          </div>
        </div>
        <div className="md:hidden flex flex-col sm:flex-row md:flex-row justify-between my-5">
          {counterData.map((item, index) => (
            <div key={index} className="mb-4 md:mb-0">
              <NumberCounter targetNumber={item.targetNumber} duration={5} />
              <span className="font-work-sans font-medium text-[16px] md:text-[18px] capitalize">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const counterData = [
  { targetNumber: 240, label: "total sale" },
  { targetNumber: 100, label: "Actions" },
  { targetNumber: 240, label: "Artists" },
];

export default MainSection;

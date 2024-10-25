import Card from "@/components/Card/Card";
import React from "react";

const DiscoverSectionItems = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 px-4 md:px-10 lg:px-20">
      {items.map((item, index) => (
        <Card item={item} index={index} />
      ))}
    </div>
  );
};
const items = [
  {
    title: "Distant Galaxy",
    creatorName: "MoonDancer",
    creatorAvatar: "/images/discover/d4.png",
    image: "/images/discover/d1.png",
    price: "1.63 ETH",
    highestBid: "0.33 wETH",
  },
  {
    title: "Life On Edena",
    creatorName: "NebulaKid",
    creatorAvatar: "/images/discover/d5.png",
    image: "/images/discover/d2.png",
    price: "1.63 ETH",
    highestBid: "0.33 wETH",
  },
  {
    title: "AstroFiction",
    creatorName: "Spaceone",
    creatorAvatar: "/images/discover/d6.png",
    image: "/images/discover/d3.png",
    price: "1.63 ETH",
    highestBid: "0.33 wETH",
  },
];

export default DiscoverSectionItems;

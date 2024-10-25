import Card from "@/components/Card/Card";
import React from "react";

const MarketPlaceItems = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 my-10 px-4 md:px-10 lg:px-20">
      {items.map((item, index) => (
        <Card item={item} index={index} key={index} />
      ))}
    </div>
  );
};
const items = [
  {
    title: "Distant Galaxy",
    creatorName: "MoonDancer",
    creatorAvatar: "/images/market/m1.png",
    image: "/images/market/m1.png",
    price: "1.63 ETH",
    highestBid: "0.33 wETH",
  },
  {
    title: "Life On Edena",
    creatorName: "NebulaKid",
    creatorAvatar: "/images/market/m2.png",
    image: "/images/market/m2.png",
    price: "1.63 ETH",
    highestBid: "0.33 wETH",
  },
  {
    title: "AstroFiction",
    creatorName: "Spaceone",
    creatorAvatar: "/images/market/m3.png",
    image: "/images/market/m3.png",
    price: "1.63 ETH",
    highestBid: "0.33 wETH",
  },
  {
    title: "Galactic Dreams",
    creatorName: "StarMaster",
    creatorAvatar: "/images/market/m4.png",
    image: "/images/market/m4.png",
    price: "2.10 ETH",
    highestBid: "0.40 wETH",
  },
  {
    title: "Nebula's Edge",
    creatorName: "CosmoSurfer",
    creatorAvatar: "/images/market/m5.png",
    image: "/images/market/m5.png",
    price: "3.45 ETH",
    highestBid: "1.00 wETH",
  },
  {
    title: "Stellar Voyage",
    creatorName: "Solaris",
    creatorAvatar: "/images/market/m6.png",
    image: "/images/market/m6.png",
    price: "4.89 ETH",
    highestBid: "2.50 wETH",
  },
  {
    title: "Black Hole Odyssey",
    creatorName: "QuantumFlux",
    creatorAvatar: "/images/market/m7.png",
    image: "/images/market/m7.png",
    price: "1.75 ETH",
    highestBid: "0.50 wETH",
  },
  {
    title: "Cosmic Symphony",
    creatorName: "GalaxyComposer",
    creatorAvatar: "/images/market/m8.png",
    image: "/images/market/m8.png",
    price: "5.25 ETH",
    highestBid: "3.00 wETH",
  },
  {
    title: "Alien Horizons",
    creatorName: "XenonPilot",
    creatorAvatar: "/images/market/m9.png",
    image: "/images/market/m9.png",
    price: "2.30 ETH",
    highestBid: "1.10 wETH",
  },
  {
    title: "Interstellar Explorer",
    creatorName: "WormholeTraveler",
    creatorAvatar: "/images/market/m10.png",
    image: "/images/market/m10.png",
    price: "6.00 ETH",
    highestBid: "3.25 wETH",
  },
  {
    title: "Quantum Leap",
    creatorName: "TimeBender",
    creatorAvatar: "/images/market/m11.png",
    image: "/images/market/m11.png",
    price: "7.00 ETH",
    highestBid: "4.00 wETH",
  },
  {
    title: "Solar Flare",
    creatorName: "PhotonMaster",
    creatorAvatar: "/images/market/m12.png",
    image: "/images/market/m12.png",
    price: "1.90 ETH",
    highestBid: "0.75 wETH",
  },
];

export default MarketPlaceItems;

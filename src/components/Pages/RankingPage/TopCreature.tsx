"use client";
import { useState } from "react";
import Image from "next/image";

type Creator = {
  id: number;
  name: string;
  image: string;
  change: number;
  sales: number;
  eth: number;
};

const timePeriods = ["Today", "This Week", "This Month", "All Time"];

export default function TopCreators() {
  const [activePeriod, setActivePeriod] = useState("Today");

  return (
    <div className=" text-white p-6 rounded-lg  px-4 sm:px-20 mx-auto">
      <h2 className="text-5xl font-bold mb-4 font-work-sans">Top Creators</h2>
      <p className="text-gray-400 mb-10 font-work-sans">
        Check out top ranking NFT artists on the NFT Marketplace.
      </p>

      <div className="flex mb-6 border-b border-gray-700">
        {timePeriods.map((period) => (
          <button
            key={period}
            className={`pb-2 px-4 ${
              activePeriod === period
                ? "text-purple-500 border-b-2 border-purple-500"
                : "text-gray-400"
            }`}
            onClick={() => setActivePeriod(period)}
          >
            {period}
          </button>
        ))}
      </div>

      <div className="space-y-2">
        {creators.map((creator, index) => (
          <div
            key={creator.id}
            className={`flex items-center p-3 ${
              index % 2 === 0
                ? "bg-backgroundSecondary"
                : "bg-backgroundSecondary"
            } rounded-2xl`}
          >
            <span className="w-6 text-gray-500 bg-background rounded-xl flex justify-center items-center mr-2">
              {index + 1}
            </span>
            <div className="flex items-center flex-1">
              <Image
                src={creator.image}
                alt={creator.name}
                width={40}
                height={40}
                className="rounded-full mr-3"
              />
              <span className="font-work-sans font-semibold">
                {creator.name}
              </span>
            </div>
            <span className="text-green-500 w-20 text-right">
              {creator.change}%
            </span>
            <span className="w-20 text-right">{creator.sales}</span>
            <span className="w-24 text-right">{creator.eth} ETH</span>
          </div>
        ))}
      </div>
    </div>
  );
}
const creators: Creator[] = [
  {
    id: 1,
    name: "Jaydon Ekstrom Bothman",
    image: "/images/creator/a1.png",
    change: +1.41,
    sales: 602,
    eth: 12.4,
  },
  {
    id: 2,
    name: "Ruben Carder",
    image: "/images/creator/a2.png",
    change: 0.95,
    sales: 750,
    eth: 14.8,
  },
  {
    id: 3,
    name: "Alfredo Septimus",
    image: "/images/creator/a3.png",
    change: 1.34,
    sales: 825,
    eth: 16.2,
  },
  {
    id: 4,
    name: "Davis Franci",
    image: "/images/creator/a4.png",
    change: +2.11,
    sales: 540,
    eth: 9.3,
  },
  {
    id: 5,
    name: "Livia Rosser",
    image: "/images/creator/a5.png",
    change: 2.57,
    sales: 920,
    eth: 18.1,
  },
  {
    id: 6,
    name: "Kianna Donin",
    image: "/images/creator/a6.png",
    change: +0.65,
    sales: 680,
    eth: 10.5,
  },
  {
    id: 7,
    name: "Isaiah Baldino",
    image: "/images/creator/a7.png",
    change: 3.24,
    sales: 1200,
    eth: 24.5,
  },
  {
    id: 8,
    name: "Monica Tylor",
    image: "/images/creator/a8.png",
    change: 1.82,
    sales: 860,
    eth: 15.0,
  },
  {
    id: 9,
    name: "Harrison Yoder",
    image: "/images/creator/a9.png",
    change: +0.75,
    sales: 660,
    eth: 11.1,
  },
  {
    id: 10,
    name: "Nicolette Irwin",
    image: "/images/creator/a10.png",
    change: 2.88,
    sales: 980,
    eth: 20.3,
  },
  {
    id: 11,
    name: "Drew Monaghan",
    image: "/images/creator/a11.png",
    change: +1.15,
    sales: 540,
    eth: 8.7,
  },
  {
    id: 12,
    name: "Paula Vickery",
    image: "/images/creator/a12.png",
    change: 3.12,
    sales: 1140,
    eth: 23.9,
  },
  {
    id: 13,
    name: "Orson Melendez",
    image: "/images/creator/a13.png",
    change: +0.9,
    sales: 710,
    eth: 12.0,
  },
  {
    id: 14,
    name: "Harvey Philp",
    image: "/images/creator/a14.png",
    change: 1.28,
    sales: 800,
    eth: 16.5,
  },
  {
    id: 15,
    name: "Carmen Vincent",
    image: "/images/creator/a15.png",
    change: 2.41,
    sales: 1030,
    eth: 19.7,
  },
];

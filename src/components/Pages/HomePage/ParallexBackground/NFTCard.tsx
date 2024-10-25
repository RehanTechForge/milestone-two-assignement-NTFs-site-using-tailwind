"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const NFTCard = () => {
  // Timer logic
  const [timeLeft, setTimeLeft] = useState({
    hours: 59,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  return (
    <div className="h-[250px] sm:h-auto relative mx-auto my-10 text-white">
      {/* Background image */}
      <div className="relative overflow-hidden">
        <Image
          src="/images/main/mushroom.png" // Replace with the actual image path
          alt="Magic Mushrooms"
          className="w-full h-[250] sm:h-full object-cover"
          height={250}
          width={800}
        />

        {/* Overlay with gradient */}
        <div className="absolute px-5  sm:px-20 inset-0 bg-gradient-to-t from-[#A259FF] to-transparent p-6 flex flex-col justify-between">
          {/* Top info */}
          <div className="flex items-center">
            <div className="bg-gray-800 text-sm rounded-full px-4 py-2">
              Shroomie
            </div>
          </div>

          {/* Bottom info */}
          <div className="mt-20 sm:space-y-4">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold">
              Magic Mushrooms
            </h1>
            <div>
              <button className="bg-white text-black px-4 sm:px-6 py-2 rounded-full font-semibold">
                See NFT
              </button>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="flex flex-col md:flex-col items-center justify-center absolute sm:bottom-6 right-2 sm:right-6 bg-gray-800 bg-opacity-80 p-4 rounded-lg text-center">
            <h3 className="text-sm">Auction ends in:</h3>
            <div className="flex space-x-2 md:space-x-4 mt-2">
              <div>
                <p className="text-xl md:text-2xl font-bold">
                  {timeLeft.hours}
                </p>
                <p className="text-xs">Hours</p>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-bold">
                  {timeLeft.minutes}
                </p>
                <p className="text-xs">Minutes</p>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-bold">
                  {timeLeft.seconds}
                </p>
                <p className="text-xs">Seconds</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;

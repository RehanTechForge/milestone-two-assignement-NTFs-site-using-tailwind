import React from "react";

const Card = ({ item, index }:any) => {
  return (
    <div
      key={index}
      className="bg-backgroundSecondary rounded-lg shadow-lg overflow-hidden flex-1 min-w-[250px] max-w-[400px] flex-grow"
    >
      {/* Image Section */}
      <div className="relative">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-[300px] object-cover"
        />
      </div>

      {/* Details Section */}
      <div className="p-4">
        {/* Title and Creator */}
        <h3 className="text-white text-xl font-semibold font-work-sans">
          {item.title}
        </h3>
        <div className="flex items-center gap-2 my-2">
          <img
            src={item.creatorAvatar}
            alt={item.creatorName}
            className="w-6 h-6 rounded-full"
          />
          <span className="text-gray-400 text-sm font-space-mono">
            {item.creatorName}
          </span>
        </div>

        {/* Price and Highest Bid */}
        <div className="flex justify-between text-gray-400 text-sm mt-4 font-space-mono">
          <div>
            <span className="block text-captionText">Price</span>
            <span className="text-white">{item.price}</span>
          </div>
          <div>
            <span className="block text-captionText">Highest Bid</span>
            <span className="text-white">{item.highestBid}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

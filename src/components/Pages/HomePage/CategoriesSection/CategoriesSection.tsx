import Image from "next/image";
import React from "react";

const CategoriesSection = () => {
  return (
    <>
      <div className="px-2 sm:px-20 flex justify-between my-10">
        <div>
          <h1 className="font-work-sans font-semibold text-[32px] capitalize">
            browse category
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 px-2 sm:px-20 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden shadow-lg"
          >
            <div className="relative">
              <Image
                src={category.image}
                alt={category.name}
                className="w-full h-[200px] object-cover opacity-70"
                layout="responsive"
                width={100}
                height={200}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-5xl">{category.icon}</span>
              </div>
            </div>
            <div className="p-4 text-center  bg-backgroundSecondary">
              <h3 className="text-white text-lg font-work-sans font-semibold">
                {category.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
const categories = [
  {
    name: "Art",
    image: "/images/categories/c1.png",
    icon: "🎨", // This can be an emoji or an icon from an icon library
  },
  {
    name: "Collectibles",
    image: "/images/categories/c2.png",
    icon: "🖼️",
  },
  {
    name: "Music",
    image: "/images/categories/c3.png",
    icon: "🎵",
  },
  {
    name: "Photography",
    image: "/images/categories/c4.png",
    icon: "🎨", // This can be an emoji or an icon from an icon library
  },
  {
    name: "Video",
    image: "/images/categories/c5.png",
    icon: "🖼️",
  },
  {
    name: "Utility",
    image: "/images/categories/c6.png",
    icon: "🎵",
  },
  {
    name: "Sport",
    image: "/images/categories/c7.png",
    icon: "🖼️",
  },
  {
    name: "Virtual Worlds",
    image: "/images/categories/c8.png",
    icon: "🎵",
  },
];

export default CategoriesSection;

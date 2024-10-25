import Image from "next/image";
import React from "react";

const CollectionSectionItem = () => {
  const collectionData = [
    {
      image: "/images/collection/i11.png",
      additionalImages: [
        "/images/collection/i12.png",
        "/images/collection/i13.png",
      ],
      count: "1025+",
      title: "DSGN Animals",
      avatar: "/images/creator/a11.png",
      creatorName: "Mr Fox",
    },
    {
      image: "/images/collection/i21.png",
      additionalImages: [
        "/images/collection/i22.png",
        "/images/collection/i23.png",
      ],
      count: "1025+",
      title: "Magic Mushrooms",
      avatar: "/images/creator/a12.png",
      creatorName: "Shroomie",
    },
    {
      image: "/images/collection/i31.png",
      additionalImages: [
        "/images/collection/i32.png",
        "/images/collection/i33.png",
      ],
      count: "1025+",
      title: "Disco Machines",
      avatar: "/images/creator/a13.png",
      creatorName: "BeKind2Robots",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-4 sm:p-0">
      {collectionData.map((item, index) => (
        <div key={index} className="flex flex-col justify-between w-full">
          <div className="flex items-center sm:items-center flex-col w-full justify-center md:items-center">
            <Image
              src={item.image}
              alt="i11"
              height={400}
              width={350}
              className="rounded-xl cursor-pointer w-full sm:w-[250px] lg:w-[250px] h-auto max-w-[300px] sm:max-w-none" // Adjusted for small screens
            />
            <div className="max-w-[80vw] sm:w-full flex gap-4 justify-center my-4">
              {item.additionalImages.map((imgSrc, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 h-[60px] w-[60px] sm:w-[80px] sm:h-[100px]" // Smaller sizes on small screens
                >
                  <Image
                    src={imgSrc}
                    alt={`i${idx + 12}`} // Dynamic alt attribute
                    height={100}
                    width={110}
                    className="rounded-xl h-[60px] w-[60px] object-cover sm:h-[100px] sm:w-[110px]" // Adjusted for small screens
                  />
                </div>
              ))}
              <div className="rounded-xl w-[60px] h-[60px] sm:w-[110px] sm:h-[100px] flex justify-center items-center text-[18px] sm:text-[22px] font-space-mono font-semibold cursor-pointer">
                <div className="bg-btnColor h-[60px] w-[60px] object-cover sm:h-[100px] sm:w-[90px] rounded-xl flex justify-center items-center">
                  {item.count}
                </div>
              </div>
            </div>

            <div>
              <h2 className="my-2 text-[20px] sm:text-[22px] font-work-space font-semibold">
                {item.title}
              </h2>
              <div className="pb-10 flex items-center gap-2">
                <Image src={item.avatar} alt="avatar" width={20} height={20} />
                <span className="text-[14px] sm:text-[16px] md:text-[18px]">
                  {item.creatorName}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CollectionSectionItem;

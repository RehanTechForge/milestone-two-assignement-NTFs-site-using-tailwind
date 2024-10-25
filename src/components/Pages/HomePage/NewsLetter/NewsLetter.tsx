import Input from "@/components/Input/Input";
import Image from "next/image";
import React from "react";
import { FaRegEnvelope } from "react-icons/fa6";

const NewsLetter = () => {
  return (
    <section className="p-4 sm:px-20 my-10">
      <div className="rounded-2xl bg-backgroundSecondary px-4 sm:px-20 py-10 flex flex-col md:flex-col lg:flex-row gap-8">
        <div className="flex-1 flex justify-center items-center mb-4 lg:mb-0">
          <Image
            src={"/images/main/Photo.png"}
            alt="photo"
            width={400}
            height={300}
            className="max-w-full h-auto" // Ensure the image is responsive
          />
        </div>
        <div className="flex-1">
          <h2 className="font-work-sans text-[28px] md:text-[36px] capitalize font-semibold">
            Join our weekly digest
          </h2>
          <p className="font-work-sans text-[16px] md:text-[18px] my-4">
            Get exclusive promotions & updates straight to your inbox.
          </p>
          <Input />
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;

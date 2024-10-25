import React from "react";
import { FaRegEnvelope } from "react-icons/fa6";

const Input = () => {
  return (
    <>
      <div className="flex flex-col md:flex-col lg:flex-row lg:relative">
        <input
          type="text"
          placeholder="Enter your Email here"
          className="h-[50px] mb-4 px-6 rounded-2xl text-black"
        />
        <button className="bg-btnColor capitalize flex justify-center items-center gap-4 h-[50px] text-white px-6 rounded-2xl  lg:absolute left-[190px]">
          <span>
            <FaRegEnvelope />
          </span>
          <span>subscribe</span>
        </button>
      </div>
    </>
  );
};

export default Input;

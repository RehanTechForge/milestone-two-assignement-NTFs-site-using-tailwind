import Link from "next/link";
import React from "react";
import { FaRegUser } from "react-icons/fa";

const DesktopMenu = () => {
  return (
    <div className="hidden lg:flex items-center gap-10">
      <ul className="flex items-center gap-10">
        <li className="capitalize font-work-sans font-semibold text-[16px]">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="capitalize font-work-sans font-semibold text-[16px]">
          <Link href={"/marketplace"}>Marketplace</Link>
        </li>
        <li className="capitalize font-work-sans font-semibold text-[16px]">
          <Link href={"/ranking"}>Ranking</Link>
        </li>
        <li className="capitalize font-work-sans font-semibold text-[16px]">
          <Link href={"/connect-a-wallet"}>Collect a Wallet</Link>
        </li>
      </ul>
      <button className="px-[25px] h-[50px] bg-btnColor rounded-[20px] font-work-sans font-semibold text-[16px] flex justify-center items-center gap-4">
        <FaRegUser />
        <span>Sign up</span>
      </button>
    </div>
  );
};

export default DesktopMenu;

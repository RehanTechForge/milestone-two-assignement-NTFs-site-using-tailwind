import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaRegUser } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const MobileMenu = ({ active, setActive }: any) => {
  return (
    <AnimatePresence>
      {active && (
        <>
          {/* Background overlay */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(false)}
          />

          {/* Animated sliding menu */}
          <motion.div
            className="fixed top-0 left-0 w-[75vw] max-w-[300px] h-full bg-backgroundSecondary p-6 shadow-lg z-50"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.4 }}
          >
            {/* Close Button */}
            <IoClose
              size={40}
              className="absolute right-4 top-4 cursor-pointer"
              onClick={() => setActive(false)}
            />

            {/* Mobile Menu Links */}
            <nav className="mt-10 flex flex-col gap-6">
              <Link href={"/"} onClick={() => setActive(false)}>
                <span className="capitalize font-work-sans font-semibold text-[16px]">
                  Home
                </span>
              </Link>
              <Link href={"/marketplace"} onClick={() => setActive(false)}>
                <span className="capitalize font-work-sans font-semibold text-[16px]">
                  Marketplace
                </span>
              </Link>
              <Link href={"/ranking"} onClick={() => setActive(false)}>
                <span className="capitalize font-work-sans font-semibold text-[16px]">
                  Ranking
                </span>
              </Link>
              <Link href={"/connect-a-wallet"} onClick={() => setActive(false)}>
                <span className="capitalize font-work-sans font-semibold text-[16px]">
                  Collect a Wallet
                </span>
              </Link>
            </nav>

            {/* Sign Up Button */}
            <div className="mt-8">
              <button className="px-[25px] h-[50px] bg-btnColor rounded-[20px] font-work-sans font-semibold text-[16px] flex justify-center items-center gap-4 w-full">
                <FaRegUser />
                <span>Sign up</span>
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;

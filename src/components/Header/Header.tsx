"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [active, setActive] = useState(false);

  // Close mobile menu if window is resized to a larger screen
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setActive(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="h-[100px] py-[20px] px-[50px] flex justify-between items-center">
      <div>
        <Link href={"/"}>
          <Image
            src={"/images/logo/logo.png"}
            alt="logo"
            width={250}
            height={35}
            className="object-cover"
          />
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden">
        <FaBarsStaggered
          size={34}
          onClick={() => setActive(true)}
          className="cursor-pointer"
        />
      </div>

      {/* Mobile Menu with Animation */}
      <MobileMenu active={active} setActive={setActive} />

      {/* Desktop Menu */}
      <DesktopMenu />
    </header>
  );
};

export default Header;

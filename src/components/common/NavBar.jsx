"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Search } from "./Icons";
import GradientButton from "./GradientButton";

const NavBar = () => {
  const navLinks = [
    {
      title: "About Us",
      link: "/",
    },
    {
      title: "Destinations",
      link: "/",
    },
    {
      title: "Universities",
      link: "/",
    },
    {
      title: "Our Products",
      link: "/",
    },
    {
      title: "Our Services",
      link: "/",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const navBarToggleHandler = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      document.body.classList.remove("!overflow-hidden");
    } else {
      document.body.classList.add("!overflow-hidden");
    }
  };
  const closeNavBarHandler = () => {
    setIsOpen(false);
    document.body.classList.remove("!overflow-hidden");
  };
  return (
    <div className="bg-white navbar_shadow py-2 relative">
      <span className="absolute top-full left-1/2 -translate-x-1/2 text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold py-[10px] px-[20px] min-w-[211px] sm:px-[35px] xl:px-[43px] ff_poppins ai_label">
        Explore Ai Course Finder
      </span>
      <div className="container mx-auto px-3 2xxl:max-w-[1556px] flex items-center justify-between">
        <Link
          href="/"
          className="text-lg sm:text-xl 2xl:text-2xl ff_poppins py-[6px] sm:py-[10px] px-[40px] sm:px-[49px] font-semibold text-white bg-black border-2 border-black hover:text-black hover:bg-white transition-all duration-300"
        >
          Logo
        </Link>
        <div className="hidden lg:flex items-center gap-3 2xl:gap-8 2xl:pl-16 ">
          {navLinks.map((item, index) => (
            <Link
              className="text-lg 2xl:text-[24px] ff_poppins text-black hover:text-[#ED407D] transition-all duration-300"
              key={index}
              href={item.link}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4 2xl:gap-[32px]">
          <span className="cursor-pointer">
            <Search />
          </span>
          <div className="hidden lg:block">
            <GradientButton
              text={"Talk To experts"}
              className={"!rounded-[12px] !py-[12px] !px-[36.5px] !text-[17px]"}
            />
          </div>
          <div
            className="flex lg:hidden items-center gap-1 flex-col cursor-pointer relative z-20"
            onClick={navBarToggleHandler}
          >
            <span className="bg-black h-[3px] w-[25px]"></span>
            <span className="bg-black h-[3px] w-[25px]"></span>
            <span className="bg-black h-[3px] w-[25px]"></span>
          </div>
        </div>
      </div>
      <div
        className={`flex fixed top-0 left-0 w-full h-full bg-white z-10 transition-all duration-300 lg:hidden flex-col items-center justify-center gap-3 2xl:gap-8 2xl:pl-16 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {navLinks.map((item, index) => (
          <Link
            onClick={closeNavBarHandler}
            className="text-lg 2xl:text-[24px] ff_poppins text-black hover:text-[#ED407D] transition-all duration-300"
            key={index}
            href={item.link}
          >
            {item.title}
          </Link>
        ))}
        <div className="max-w-[300px]" onClick={closeNavBarHandler}>
          <GradientButton
            text={"Talk To experts"}
            className={"!rounded-[12px] !py-[12px] !px-[36.5px] !text-[17px]"}
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;

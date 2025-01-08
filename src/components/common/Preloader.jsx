"use client";
import Image from "next/image";
import React, { useState } from "react";

const Preloader = () => {
  const [progress, setProgress] = useState(false);
  setTimeout(() => {
    setProgress(true);
  }, 2000);
  return (
    <div
      className={`h-screen w-full fixed flex bg-white items-center justify-center z-40 top-0 left-0 ${
        progress ? "opacity-0 pointer-events-none z-[-100]" : ""
      } transition-all duration-300 ease-in-out`}
    >
      <Image
        className="w-[100px] h-[100px] animate-ping duration-[2s] ease-linear"
        src="/assets/images/favicon.png"
        alt="preloader"
        width={100}
        height={100}
      />
    </div>
  );
};

export default Preloader;

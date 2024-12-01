"use client";

import Image from "next/image";
import React, { useState } from "react";
import Contact from "./Contact";
import Menu from "./Menu";

const LeftSide = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible((prev) => !prev);
  };
  const handleClose = () => {
    setIsVisible(false);
  };
  return (
    <div className="text-white flex lg:hidden p-3 z-50">
      <div
        className="bg-gradient-to-t from-indigo-500 rounded-full via-purple-500 to-pink-500 w-12 h-12 p-2 "
        tabIndex={0}
        onClick={handleClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="w-8 h-8 cursor-pointer"
          fill="white"
        >
          <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
        </svg>
      </div>
      <div
        className={`absolute top-0 left-0 h-full w-64 bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500 p-4 transition-transform duration-500 ${
          isVisible ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-2xl text-white p-1 rounded-full focus:outline-none "
        >
          X
        </button>
        <div className="flex flex-col items-center justify-center pt-5">
          <Image
            src={
              "https://ik.imagekit.io/kn40ppx9b/Portfolio/Background.png?updatedAt=1733022933512"
            }
            alt={"img"}
            width={120}
            height={120}
            className={"size-28 rounded-full ring-2 ring-purple-300"}
          />
          <h1 className={"text-2xl my-3"}>James Nguyen</h1>
        </div>
        <Contact />
        <Menu onMenuClick={handleClick} />
      </div>
    </div>
  );
};

export default LeftSide;

"use client";

import Link from "next/link";
import React, { useState } from "react";

const Menu = ({ onMenuClick }: { onMenuClick: () => void }) => {
  const [state, setState] = useState<string>("");

  const handleClick = (str: string) => {
    setState(str);
    onMenuClick();
  };

  return (
    <div className="mt-7 flex flex-col justify-center gap-7 *:cursor-pointer ">
      <div
        className={`flex gap-3 items-center duration-200 ${
          state === "home"
            ? "text-blue-700 hover:text-blue-700 translate-x-2"
            : "translate-x-0 hover:text-red-100"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
        <Link
          href={"#home"}
          onClick={() => handleClick("home")}
          className={"text-xl"}
        >
          Home
        </Link>
      </div>
      <div
        className={`flex gap-3 items-center duration-200 ${
          state === "experience"
            ? "text-blue-700 hover:text-blue-700  translate-x-2"
            : "translate-x-0 hover:text-red-100"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
          />
        </svg>
        <Link
          href={"#experience"}
          onClick={() => handleClick("experience")}
          className={"text-xl"}
        >
          Experience
        </Link>
      </div>
      <div
        className={`flex gap-3 items-center duration-200 ${
          state === "project"
            ? "text-blue-700 hover:text-blue-700 translate-x-2"
            : "translate-x-0 hover:text-red-100"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
          />
        </svg>
        <Link
          href={"#project"}
          onClick={() => handleClick("project")}
          className={"text-xl"}
        >
          Project
        </Link>
      </div>
      <div
        className={`flex gap-3 items-center duration-200 ${
          state === "about"
            ? "text-blue-700 hover:text-blue-700  translate-x-2"
            : "translate-x-0 hover:text-red-100"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
          />
        </svg>
        <Link
          href={"#about"}
          onClick={() => handleClick("about")}
          className={"text-xl"}
        >
          About me
        </Link>
      </div>
    </div>
  );
};

export default Menu;

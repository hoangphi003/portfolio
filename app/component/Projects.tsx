"use client";

import React, { useState } from "react";
import { initialTabs as tabs } from "../libs/ingredients";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="mt-10 mb-5 " id="project">
      <h1
        className={"text-2xl bg-blue-100 rounded-md lg:mb-10 p-2 font-semibold"}
      >
        Projects
      </h1>
      <div className="w-full rounded-lg bg-white flex flex-col">
        <nav className="bg-[#fdfdfd] rounded-lg border-b border-[#eeeeee] h-[44px] hidden lg:block">
          <ul className="flex w-full">
            {tabs.map((item, index) => (
              <li
                key={index}
                className={`${
                  item === selectedTab ? "bg-[rgb(191,219,256)]" : "bg-white"
                } flex justify-between items-center w-full p-2.5 rounded-t-md cursor-pointer relative user-select-none`}
                onClick={() => setSelectedTab(item)}
              >
                {`${item.icon} ${item.label}`}
                {item === selectedTab ? (
                  <motion.div
                    className="absolute bottom-[-1px] left-0 right-0 h-[1px] bg-[#8855ff]"
                    layoutId="underline"
                  />
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
        <main className="">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab ? selectedTab.label : "empty"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div
                className={
                  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 py-5 px-3 gap-4"
                }
              >
                {selectedTab.site?.map((item, index: number) => (
                  <div className="" key={index}>
                    <Link
                      href={item.link}
                      target="_blank"
                      className="block overflow-hidden rounded-md"
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={220}
                        height={96}
                        className="object-cover object-center h-24 transition-transform duration-300 hover:scale-105 hover:opacity-90"
                      />
                    </Link>

                    <p className={"text-lg pt-3 lg:text-center"}>
                      {item.title}
                    </p>
                  </div>
                )) || "😋"}
              </div>
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default Projects;

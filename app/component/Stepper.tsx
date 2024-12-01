"use client";

import React from "react";
import { motion } from "framer-motion";

const Stepper = () => {
  return (
    <ol className="relative text-gray-500 border-s border-gray-200 -z-10">
      <li className="mb-10 ms-6 ">
        <span className="absolute flex items-center justify-center w-8 h-8 bg-white rounded-full -start-4 ring-4 ring-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              fill={"rgb(191,219,254)"}
              d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"
            />
          </svg>
        </span>
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ y: 0, x: 30 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="font-medium leading-tight uppercase"
        >
          Ace Capital Company
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ y: 0, x: 30 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-sm uppercase pt-3"
        >
          2024 - Present
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ y: 0, x: 30 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-sm pt-3"
        >
          Developer
        </motion.p>
      </li>
      <li className="mb-10 ms-6">
        <span className="absolute flex items-center justify-center w-8 h-8 bg-white rounded-full -start-4 ring-4 ring-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              fill={"rgb(191,219,254)"}
              d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"
            />
          </svg>
        </span>
        <motion.h3
          className="font-medium leading-tight"
          initial={{ opacity: 0 }}
          animate={{ y: 0, x: 30 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          TAY NAM SOLUTIONS TECHNOLOGY SERVICES COMPANY LIMITED
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ y: 0, x: 30 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-sm pt-3"
        >
          01/2024 - 3/2024
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ y: 0, x: 30 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-sm pt-3"
        >
          Intern Developer
        </motion.p>
      </li>
    </ol>
  );
};

export default Stepper;

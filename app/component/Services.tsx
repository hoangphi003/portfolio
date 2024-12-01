"use client";

import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="">
      <h1 className={"text-2xl bg-blue-100 rounded-md mb-10 p-2 font-semibold"}>
        Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ y: 90 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex group gap-4 -z-10"
        >
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-16 p-2 bg-blue-200 rounded-full group-hover:bg-white group-hover:text-blue-300 group-hover:ring group-hover:duration-200"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <h1 className={"group-hover:text-blue-300 text-lg font-semibold"}>
              Landing page
            </h1>
            <p>A website about blog, news, posts,v.v...</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ y: 90 }}
          transition={{ ease: "easeOut", duration: 0.6 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex group gap-4 -z-10"
        >
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-16 p-2 bg-blue-200 rounded-full group-hover:bg-white group-hover:text-blue-300 group-hover:ring group-hover:duration-200"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <h1 className={"group-hover:text-blue-300 text-lg font-semibold"}>
              E-Commerce
            </h1>
            <p>
              A website about shopping clothes, fashion, computer, phone,v.v...
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ y: 90 }}
          transition={{ ease: "easeOut", duration: 0.7 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex group gap-4 -z-10"
        >
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-16 p-2 bg-blue-200 rounded-full group-hover:bg-white group-hover:text-blue-300 group-hover:ring group-hover:duration-200"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <h1 className={"group-hover:text-blue-300 text-lg font-semibold"}>
              Business Website
            </h1>
            <p>
              A site that introduces a company, its products, and its services.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ y: 90 }}
          transition={{ ease: "easeOut", duration: 0.8 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex group gap-4 -z-10"
        >
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-16 p-2 bg-blue-200 rounded-full group-hover:bg-white group-hover:text-blue-300 group-hover:ring group-hover:duration-200"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <h1 className={"group-hover:text-blue-300 text-lg font-semibold"}>
              Non-profit Website
            </h1>
            <p>
              For non-profit organizations to raise awareness and call for
              support.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ y: 90 }}
          transition={{ ease: "easeOut", duration: 0.9 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex group gap-4 -z-10"
        >
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-16 p-2 bg-blue-200 rounded-full group-hover:bg-white group-hover:text-blue-300 group-hover:ring group-hover:duration-200"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <h1 className={"group-hover:text-blue-300 text-lg font-semibold"}>
              Educational Website
            </h1>
            <p>
              A site providing online courses, study materials, or an e-learning
              platform.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ y: 90 }}
          transition={{ ease: "easeOut", duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex group gap-4 -z-10"
        >
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-16 p-2 bg-blue-200 rounded-full group-hover:bg-white group-hover:text-blue-300 group-hover:ring group-hover:duration-200"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <h1 className={"group-hover:text-blue-300 text-lg font-semibold"}>
              Community & Forum Website
            </h1>
            <p>
              A platform for information exchange, sharing, and interaction
              within a community on specific topics.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;

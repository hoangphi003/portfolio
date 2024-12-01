import React from "react";

const info = () => {
  return (
    <div className="mt-10 mb-5" id="home">
      <h1 className={"text-2xl bg-blue-100 rounded-md mb-10 p-2 font-semibold"}>
        Web Developer.
      </h1>
      <div className="grid lg:grid-cols-2">
        <div className="*:pb-5">
          <div className="flex justify-start items-center">
            <span className={"text-blue-500 text-lg "}> &gt; </span>
            <p className={"ms-2"}>
              <b className={"me-4"}>Birthday:</b>
              12/03/2003
            </p>
          </div>
          <div className="flex justify-start items-center">
            <span className={"text-blue-500 text-lg "}> &gt; </span>
            <p className={"ms-2"}>
              <b className={"me-4"}>Website:</b>
              portfolio-pink-one-67.vercel.app
            </p>
          </div>

          <div className="flex justify-start items-center">
            <span className={"text-blue-500 text-lg "}> &gt; </span>
            <p className={"ms-2"}>
              <b className={"me-4"}>Phone:</b>
              0706350313
            </p>
          </div>
          <div className="flex justify-start items-center">
            <span className={"text-blue-500 text-lg "}> &gt; </span>
            <p className={"ms-2"}>
              <b className={"me-4"}>City:</b>
              Ho Chi Minh
            </p>
          </div>
        </div>
        <div className="*:pb-5">
          <div className="flex justify-start items-center">
            <span className={"text-blue-500 text-lg "}> &gt; </span>
            <p className={"ms-2"}>
              <b className={"me-4"}>Age:</b>
              21
            </p>
          </div>
          <div className="flex justify-start items-center">
            <span className={"text-blue-500 text-lg "}> &gt; </span>
            <p className={"ms-2"}>
              <b className={"me-4"}>Email:</b>
              jamesnguyen.devs@gmail.com
            </p>
          </div>
          <div className="flex justify-start items-center">
            <span className={"text-blue-500 text-lg "}> &gt; </span>
            <p className={"ms-2"}>
              <b className={"me-4"}>Current job:</b>
              Full time
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default info;

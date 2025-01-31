import React from "react";

const Skills = () => {
  return (
    <div className="">
      <h1 className={"text-2xl font-semibold bg-blue-100 p-2 rounded-md my-5"}>
        Skills
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 text-center gap-4 *:p-2 *:rounded-lg *:border *:bg-blue-50">
        <div className=" bg-opacit-90">HTML & CSS</div>
        <div className=" bg-opacit-90">TypeScript</div>
        <div className=" bg-opacit-90">JavaScript</div>
        <div className=" bg-opacit-90">React</div>
        <div className=" bg-opacit-90">NextJS</div>
        <div className=" bg-opacit-90 hidden">NodeJs</div>
        <div className=" bg-opacit-90  hidden">ExpressJs</div>
        <div className=" bg-opacit-90 hidden">Mongodb</div>
        <div className=" bg-opacit-90 hidden">Mysql</div>
        <div className=" bg-opacit-90 hidden">Sql Server</div>
        <div className=" bg-opacit-90">Tailwind css</div>
        <div className=" bg-opacit-90">Bootstrap</div>
        <div className=" bg-opacit-90">Figma</div>
        <div className=" bg-opacit-90">PhotoShop</div>
        <div className=" bg-opacit-90">Git & Github</div>
        <div className=" bg-opacit-90 hidden">Linux</div>
        <div className=" bg-opacit-90 ">Responsive</div>
        <div className=" bg-opacit-90 ">Chart.js</div>
      </div>
    </div>
  );
};

export default Skills;

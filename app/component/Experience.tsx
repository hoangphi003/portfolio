import React from "react";
import Stepper from "@/app/component/Stepper";

const Experience = () => {
  return (
    <div className="mt-10 mb-5" id="experience">
      <h1 className={"text-2xl bg-blue-100 rounded-md mb-10 p-2 font-semibold"}>
        Experience
      </h1>
      <div className="mx-3">
        <Stepper />
      </div>
    </div>
  );
};

export default Experience;

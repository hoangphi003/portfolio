import React from "react";
import Image from "next/image";
import Contact from "@/app/component/Contact";
import Menu from "@/app/component/Menu";

const LeftSide = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const handleClick = () => {
    setIsVisible((prev) => !prev);
  };
  return (
    <div className="text-white px-7 py-8">
      <div className="flex flex-col items-center justify-center">
        <Image
          src={
            "https://ik.imagekit.io/kn40ppx9b/Portfolio/Background.png?updatedAt=1733022933512"
          }
          alt={`ll${isVisible}`}
          width={120}
          height={120}
          className={"size-28 rounded-full ring-2 ring-purple-300"}
        />
        <h1 className={"text-2xl my-3"}>James Nguyen</h1>
      </div>
      <Contact />
      <Menu onMenuClick={handleClick} />
    </div>
  );
};

export default LeftSide;

import React from "react";
import Image from "next/image";
import { TechCrunch, TechPoint, TheGuardian } from "../../public/Images";

const SixthSection = () => {
  return (
    <div className="bg-[#E5E5E5] text-black py-20 flex items-center flex-col justify-center lg:flex-row ">
      <h4 className="text-2xl font-bold">As featured in</h4>
      <div className="flex">
        <Image src={TechCrunch} alt="Tech Crunch" />
        <Image src={TechPoint} alt="Tech Point" />
        <Image src={TheGuardian} alt="The Guardian" />
      </div>
    </div>
  );
};

export default React.memo(SixthSection);

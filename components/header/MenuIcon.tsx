import React, { useState, useEffect } from "react";
type MenuIconProps = {
  callFn(): void;
};

const MenuIcon = ({ callFn }: MenuIconProps) => {
  const [upper, setUpper] = useState("");
  const [lower, setLower] = useState("");
  const [middle, setMiddle] = useState("");
  

  return (
    <div
      className={`absolute right-10 top-8 lg:hidden w-fit z-[100000]`}
      onClick={() => {
        setUpper((prev) => (prev === "upper" ? "" : "upper"));
        setMiddle((prev) => (prev === "middle" ? "" : "middle"));
        setLower((prev) => (prev === "lower" ? "" : "lower"));
        callFn();
      }}
    >
      <div className={`${upper} w-[28px] bg-[#353535] py-[1.5px]`} />
      <div className={`${middle} w-[28px] bg-[#353535]  py-[1.5px] my-[6px]`} />
      <div className={`${lower} w-[28px] bg-[#353535] py-[1.5px]`} />
    </div>
  );
};

export default MenuIcon;

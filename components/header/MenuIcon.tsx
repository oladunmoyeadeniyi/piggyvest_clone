import React, { useState } from "react";
type MenuIconProps = {
  callFn(): void;
  fixed?: boolean;
  className?: string;
};

const MenuIcon = ({ callFn, fixed = false, className }: MenuIconProps) => {
  const [upper, setUpper] = useState("");
  const [lower, setLower] = useState("");
  const [middle, setMiddle] = useState("");

  if (fixed) {
    return (
      <div className={`w-fit z-[100000] ${className}`} onClick={() => callFn()}>
        <div className={`w-[20px] bg-[#ffffff] py-[1px]`} />
        <div className={`w-[20px] bg-[#ffffff]  py-[1px] my-[5px]`} />
        <div className={`w-[20px] bg-[#ffffff] py-[1px]`} />
      </div>
    );
  }
  return (
    <div
      className={`absolute right-10 top-8 lg:hidden w-fit z-[100000] ${className}`}
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

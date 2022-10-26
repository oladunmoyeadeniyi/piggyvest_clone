import React from "react";

const Square = () => {
  // border-[#f7f0ff]
  return (
    <div className="w-fit grid grid-cols-2 gap-2">
      <div className="w-7 h-7 border-r-[10px] border-b-[10px] border-[#f7f0ff] text-black" />
      <div className="w-7 h-7 border-l-[10px] border-b-[10px] border-[#f7f0ff] text-black" />
      <div className="w-7 h-7 border-r-[10px] border-t-[10px] border-[#f7f0ff] text-black" />
      <div className="w-7 h-7 border-l-[10px] border-t-[10px] border-[#f7f0ff] text-black" />
    </div>
  );
};

export default React.memo(Square);

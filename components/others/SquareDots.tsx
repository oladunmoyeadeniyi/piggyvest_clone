import React from "react";

type SquareDotsProps = {
  background: string;
  width?: string;
  height?: string;
};
const SquareDots = ({ background, width, height }: SquareDotsProps) => {
  return (
    <div className="w-fit m-0 grid gap-4 grid-cols-2">
      <div
        className="w-[10px] h-[10px] rounded-full"
        style={{ background, width, height }}
      />
      <div
        className="w-[10px] h-[10px] rounded-full"
        style={{ background, width, height }}
      />
      <div
        className="w-[10px] h-[10px] rounded-full"
        style={{ background, width, height }}
      />
      <div
        className="w-[10px] h-[10px] rounded-full"
        style={{ background, width, height }}
      />
      <div
        className="w-[10px] h-[10px] rounded-full"
        style={{ background, width, height }}
      />
      <div
        className="w-[10px] h-[10px] rounded-full"
        style={{ background, width, height }}
      />
      <div
        className="w-[10px] h-[10px] rounded-full"
        style={{ background, width, height }}
      />
      <div
        className="w-[10px] h-[10px] rounded-full"
        style={{ background, width, height }}
      />
      <div
        className="w-[10px] h-[10px] rounded-full"
        style={{ background, width, height }}
      />
      <div
        className="w-[10px] h-[10px] rounded-full"
        style={{ background, width, height }}
      />
    </div>
  );
};

export default React.memo(SquareDots);

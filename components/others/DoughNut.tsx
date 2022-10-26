import React from "react";
type DoughtNutProps = {
  InPadding: string;
  className: string;
};

const DoughNut = ({ InPadding, className }: DoughtNutProps) => {
  return (
    <div className={`bg-[#f7f0ff] w-fit h-fit m-0 rounded-full ${className}`}>
      <div className={`bg-white rounded-full ${InPadding}`} />
    </div>
  );
};

export default React.memo(DoughNut);

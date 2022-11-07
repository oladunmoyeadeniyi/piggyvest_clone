import React from "react";

type ContainerProps = {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  border?: boolean;
};
const Container = ({ className, children, style, border }: ContainerProps) => {
  return (
    <div
      className={`${className} ${
        border ? "border border-[#E5E5E5]" : ""
      } rounded-t-lg rounded-r-lg 
      flex items-center border-opacity-80 `}
      style={style}
    >
      {children}
    </div>
  );
};

export default Container;

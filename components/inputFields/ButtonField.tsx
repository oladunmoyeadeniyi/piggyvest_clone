import React from "react";
import Link from "next/link";

type ButtonFieldProps = {
  text?: string;
  children?: React.ReactNode;
  width?: string;
  height?: string;
  outlined?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler;
  path?: string;
  blank?: boolean;
};
const ButtonField = ({
  text,
  children,
  width,
  height,
  outlined = false,
  className,
  path,
  blank = false,
  onClick,
}: ButtonFieldProps) => {
  return (
    <Link href={`${path}`}>
      <a
        className={`${
          outlined
            ? `text-black border hover:border-[#3d648d] hover:ease-in-out hover:border-opacity-25 bg-transparent`
            : `text-white font-bold bg-[#0c1825] hover:bg-blue-500`
        }
      rounded-xl py-3 px-[25px] ${className}`}
        target={blank ? "_blank" : ""}
      >
        <button onClick={onClick} style={{ width, height }}>
          {text ? text : children}
        </button>
      </a>
    </Link>
  );
};

export default React.memo(ButtonField);

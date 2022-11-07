import React from "react";
import Link from "next/link";

type CardProps = {
  children: React.ReactNode;
  heading?: string;
  text?: string;
  button?: string;
  path?: string;
};

const Card = ({ children, heading, text, button, path }: CardProps) => {
  return (
    <div className="w-[400px] h-fit bg-white rounded-r-[20px] rounded-t-[20px] mx-auto py-10 px-10">
      <div className="w-fit mx-auto text-center">
        <h1 className="text-[#083e9e] text-2xl font-bold font-[U8,sans-serif]">
          {heading}
        </h1>
        <p className=" text-[0.875rem] text-[#4a5568] font-[Karla,sans-serif]">
          {text}
        </p>
      </div>

      <div className="grid h-fit mt-7 gap-y-7">{children}</div>

      {button && (
        <Link href={`/${path}`} passHref>
          <button
            type="submit"
            className="w-full text-[12px] bg-[#0d60d8] rounded-r-[4px] rounded-t-[4px] font-bold py-[12px] mt-8"
          >
            {button}
          </button>
        </Link>
      )}
    </div>
  );
};

export default Card;

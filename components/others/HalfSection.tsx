import React from "react";
import ButtonField from "../inputFields/ButtonField";
import { AiFillApple } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";

type HalfSectionProps = {
  heading: string;
  text: string;
  btnText: string;
  AppStores?: boolean;
  className?: string;
  fontSize: string;
};

const HalfSection = ({
  heading,
  text,
  btnText,
  AppStores = false,
  className,
  fontSize,
}: HalfSectionProps) => {
  return (
    <div className={`text-black flex flex-col items-center lg:items-start ${className}`}>
      <h1 className={`font-bold`} style={{fontSize}}>{heading}</h1>
      <p className="mt-3 w-full">{text}</p>

      <ButtonField text={btnText} className="my-5" />

      {AppStores && (
        <div className="">
          <ButtonField outlined>
            <span className="text-black">
              <AiFillApple />
            </span>
            <span className="">Get on iPhone</span>
          </ButtonField>

          <ButtonField outlined className="ml-2">
            <span className="text-green-400">
              <FaGooglePlay />
            </span>
            <span className="">Get on Android</span>
          </ButtonField>
        </div>
      )}
    </div>
  );
};

export default React.memo(HalfSection);

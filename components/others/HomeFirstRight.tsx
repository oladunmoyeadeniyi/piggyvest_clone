import Image from "next/image";
import React from "react";
import { Card1, Card2, Header, Rect } from "../../public/Images";
import DoughNut from "./DoughNut";
import Square from "./Square";
import SquareDots from "./SquareDots";

type HomeFirstRightPorops = {
  className?: string;
};

const HomeFirstRight = ({ className }: HomeFirstRightPorops) => {
  return (
    <div className={`${className} relative w-[350px] h-[500px] mx-auto`}>
      <div className="absolute  p-0 h-[500px] w-[350px]">
        <Image src={Rect} alt="Rect Line" />
      </div>
      <div className="absolute top-[33px] -left-[30px] lg:-left-12 max-w-[350px] max-h-[500px]">
        <Image src={Header} alt="Welcome Image" />
      </div>
      <div className="absolute bottom-[220px] -left-[80px] lg:-left-[150px] w-[215px]">
        <Image src={Card1} alt="My Rent Loading Image" />
      </div>
      <div className="absolute bottom-0 right-0 lg:-right-20 w-[215px]">
        <Image src={Card2} alt="Investify Loading Image" />
      </div>

      <div className="absolute top-1 -left-[60px] lg:-left-[78px]">
        <Square />
      </div>

      <DoughNut
        InPadding="p-2"
        className="absolute right-2 lg:right-7 top-[150px] p-3 opacity-70"
      />

      <div className="absolute bottom-10 -left-[50px] lg:-left-[65px]">
        <SquareDots background="#c0e9ee" />
      </div>
    </div>
  );
};

export default React.memo(HomeFirstRight);

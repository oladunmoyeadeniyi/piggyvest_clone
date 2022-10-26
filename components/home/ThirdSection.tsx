import Image from "next/image";
import React from "react";
import { DoughNut, SquareDots } from "../others";
import { InvestMobile } from "../../public/Images";

const ThirdSection = () => {
  return (
    <div className="text-black lg:flex lg:items-center">
      <div className="flex p-20">
        <div className="relative h-[555px] w-[380px]">
          <DoughNut
            InPadding="p-[50px]"
            className="absolute bottom-20 right-28 p-[100px]"
          />
          <div className="max-w-[256px] absolute top-0 left-[30%]">
            <Image src={InvestMobile} alt="Invest Mobile photo" />
          </div>
        </div>

        <div className="pt-[30px]">
          <SquareDots background="#f7f0ff" />
        </div>
      </div>

      <div className="">
        <div className="w-fit px-4 py-1  text-[#7913e5] font-semibold bg-[#f7f0ff] rounded-full">
          Up To 25% Returns
        </div>

        <h1 className="text-[#0c1825] font-bold text-[51px] leading-[64px]">
          Access investment opportunities
        </h1>

        <p className="">
          Invest securely and confidently on the go. Grow your money confidently
          by investing in pre-vetted investment opportunities.
        </p>

        <p className="text-[#7913e5] font-semibold cursor-pointer">
          Learn more about Investments {">"}
        </p>
      </div>
    </div>
  );
};

export default React.memo(ThirdSection);

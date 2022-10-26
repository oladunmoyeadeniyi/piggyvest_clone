import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from "next/image";
import { Saver } from "../../public/Images";

const FourthSection = () => {
  return (
    <div className=" flex items-center  flex-col p-0 lg:h-[500px] lg:flex-row my-[200px] lg:my-14">
      <div className="bg-[#0d60d8] flex flex-col items-center max-w-full min-h-[470px] text-center p-2 py-14 lg:mb-0 lg:text-left lg:max-w-[60%] lg:pl-10 lg:pr-28">
        <h1 className="text-[51px] font-bold">Meet the saver of the month!</h1>

        <p className="max-w-full px-11 my-[15px] lg:px-0 lg:pr-20">
          Every month, we shine a spotlight on one saver, asking them questions
          about their savings culture and how the product is specifically
          helping them shape how they spend and save for future
          responsibilities.
        </p>

        <p className="flex items-center lg:mr-auto">
          <IoIosArrowRoundForward
            className="p-1 rounded-full text-[#0d60d8] bg-white font-bold"
            size="40"
          />
          <span className="ml-2">Meet Tito</span>
        </p>
      </div>

      <div className="w-full bg-yellow-300 lg:hidden">
        <Image
          src={Saver}
          alt="Saver of the month"
          layout="responsive"
          width={1200}
        />
      </div>
      <div className="w-full bg-yellow-300 hidden lg:block">
        <Image
          src={Saver}
          alt="Saver of the month"
          layout="responsive"
          width={1200}
          height={1150}        />
      </div>
    </div>
  );
};

export default React.memo(FourthSection);

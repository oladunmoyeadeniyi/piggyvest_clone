import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

type PlanCardProps = {
  image: StaticImageData;
  path: string;
  heading: string;
  name: string;
  summary: string;
  color: string;
  background: string;
};
const PlanCard = ({
  image,
  heading,
  path,
  summary,
  name,
  color,
  background,
}: PlanCardProps) => {
  return (
    <div className="max-w-[352px] cursor-pointer rounded-[20px] p-[30px] bg-[#f9f9f9] text-[#0c1825]">
      <Link href={`/${path}`} className="w-full">
        <a>
          <div className="mb-7">
            <Image src={image} alt="" width={50} height={50} />
          </div>

          <h5 className="text-[20px] font-bold">{heading}</h5>

          <p className="my-6">{summary}</p>

          <div className="flex items-center">
            <IoIosArrowRoundForward
              className="p-1 rounded-full bg-white font-bold"
              style={{ color, background }}
              size="40"
            />
            <span className="ml-2">{name}</span>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default React.memo(PlanCard);

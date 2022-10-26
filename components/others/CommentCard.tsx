import React from "react";
import Image, { StaticImageData } from "next/image";

export type CommentCardProps = {
  image: StaticImageData;
  name: string;
  date: string;
  comment: string;
};

const CommentCard = ({ image, name, date, comment }: CommentCardProps) => {
  return (
    <div className="pt-[11px] pr-[17px] text-[11px] text-black pb-6 pl-4 bg-[#E5E5E5] rounded mb-[10px]">
      <p className="w-full text-right mb-3">{date}</p>
      <div className="flex items-start ">
        <Image
          src={image}
          alt={`Photo of ${name}`}
          width="50px"
          height="50px"
          className="rounded-full "
        />
        <div className="ml-5">
          <p className="font-bold w-full text-left mb-2">{name}</p>
          <p className="w-full">{comment}</p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(CommentCard);

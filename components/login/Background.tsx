import React from "react";
import Image from "next/image";
import { LogoWhite } from "../../public/Images";
import Link from "next/link"

type BackgroundProps = {
  children: React.ReactNode;
};
const Background = ({ children }: BackgroundProps) => {
  return (
    <div className="bg-[#062863] w-[100vw] min-h-[100vh] py-10 flex items-center">
      <div className="flex items-center flex-col gap-y-10 mx-auto">
        <Link href="/">
          <a>
            <Image src={LogoWhite} alt="PiggyVest Logo" />
          </a>
        </Link>

        {children}
      </div>
    </div>
  );
};

export default Background;

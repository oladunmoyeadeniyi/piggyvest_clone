import React from "react";
import Image from "next/image";
// import LogoBlack from "../../public/logo.svg";
import { LogoBlack } from "../../public/Images";
import LinkLoop from "../others/LinkLoop";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { Products, Company, Legal } from "../../utilities/DummyData";

function Footer() {
  return (
    <div className="text-[#0c1825] text-[12px] p-10 lg:p-20 bg-white">
      <div className="flex flex-col gap-5 lg:flex-row items-start justify-between ">
        <Image src={LogoBlack} alt="piggy logo" />

        <div className="grid gap-y-7 gap-x-[100px] grid-cols-2 lg:grid-cols-3 sm:w-[50%] lg:pb-20">
          <LinkLoop links={Products} title="Products" />
          <LinkLoop links={Company} title="Company" />
          <LinkLoop links={Legal} title="Legal" />
        </div>

        <div className="gap-y-5 text-left pb-10 lg:text-right lg:max-w-[200px]">
          <div className="w-fit mb-5 gap-x-3 lg:gap-x-0 flex mr-auto lg:ml-auto ">
            <FaFacebookSquare size={30} />
            <FaTwitterSquare size={30} />
            <FaInstagramSquare size={30} />
          </div>
          <p>
            Tesmot house, Abdulrahman Okene close, Victoria Island, Lagos,
            Nigeria.
          </p>
          <p>
            <a>contact@piggyvest.com</a>
          </p>
          <p>
            <a>+234 700 933 933 933</a>
          </p>
        </div>
      </div>
      <div className="text-left lg:text-center lg:w-[60%] lg:mx-auto">
        <p>
          Piggyvest (formerly piggybank.ng) is the leading online savings &
          investing platform in Nigeria. For over 6 years, our customers have
          saved and invested billions of Naira that they would normally be
          tempted to spend.
        </p>
        <p className="text-blue-800 pt-7 font-semibold">
          2016 - 2022 PiggyTech Global Limited - RC 1405222
        </p>
      </div>
    </div>
  );
}

export default React.memo(Footer);

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { LogoBlack } from "../../public/Images";
import Link from "next/link";
import { SavingsCard } from "../others";
import { ButtonField } from "../inputFields";
import MenuIcon from "./MenuIcon";

const navLinks = ["Save", "Invest", "Stories", "FAQs", "Blog"];
const Header = () => {
  const [card, setCard] = useState("hidden");
  const [menu, setMenu] = useState("hidden");

  const dropMenu = () => {
    setMenu((prev) => (prev === "hidden" ? "" : "hidden"));
  };

  return (
    <div className="fixed w-full z-[100000]">
      <MenuIcon callFn={dropMenu} />

      <div
        className={` text-black  gap-10 lg:items-center lg:px-20 lg:py-5 lg:flex bg-white lg:bg-transparent`}
      >
        <div
          className={`w-[155px] fixed top-7 left-7 lg:top-0 lg:left-0 lg:relative`}
        >
          <Link href="/">
            <a>
              <Image src={LogoBlack} alt="Piggy Logo" />
            </a>
          </Link>
        </div>

        <div
          className={`${menu} w-full py-20 px-10  lg:p-0 lg:grid lg:grid-cols-2`}
        >
          <ul
            className="navLinks list-none flex flex-col 
           gap-y-7 items-center lg:grid lg:grid-cols-5"
          >
            {navLinks.map((link) => (
              <span key={link}>
                <Link href={link}>
                  <a
                    onMouseOver={() => (link === "Save" ? setCard("") : null)}
                    onMouseOut={() =>
                      link === "Save" ? setCard("hidden") : null
                    }
                    onClick={() => dropMenu()}
                  >
                    {link}
                  </a>
                </Link>
                {link === "Save" ? (
                  <SavingsCard
                    onClick={() => dropMenu()}
                    onMouseOver={() => (link === "Save" ? setCard("") : null)}
                    onMouseOut={() =>
                      link === "Save" ? setCard("hidden") : null
                    }
                    className={`${card} absolute bg-white top-28 lg:top-14 lg:left-28`}
                  />
                ) : null}
              </span>
            ))}
          </ul>

          <div className="w-full mt-7 lg:mt-0 lg:w-fit lg:flex lg:ml-auto">
            <ButtonField
              outlined
              text="Sign in"
              width="inherit"
              className="flex justify-center"
              onClick={() => dropMenu()}
              path="/login"
              blank
            />

            <ButtonField
              text="Create free account"
              width="inherit"
              className="flex justify-center mt-7 lg:mt-0 lg:ml-5"
              onClick={() => dropMenu()}
              path="/register"
              blank
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

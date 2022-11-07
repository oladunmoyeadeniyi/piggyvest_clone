import React, { useState } from "react";
import MenuIcon from "./MenuIcon";
import Image from "next/image";
import { LogoWhite } from "../../public/Images";
import { sideBar } from "../../utilities/DummyData";
import { Container } from "../others";
import Link from "next/link";
import { ImSwitch } from "react-icons/im";

type SideBarProps = {
  callFn: () => void;
};
const SideBar = ({ callFn }: SideBarProps) => {
  const [hide, setHide] = useState(false);
  return (
    <div
      className={`fixed left-0 bottom-0 w-full h-fit bg-slate-100 bg-opacity-90 z-[100000000] lg:py-10 
      lg:pl-5 lg:w-fit lg:max-w-[250px] lg:bg-[#062863] 
      lg:left-0 lg:h-[100vh] lg:text-white ${!hide ? "lg:pr-10" : ""}`}
    >
      <div className={`hidden lg:flex items-center mb-10`}>
        <MenuIcon
          fixed
          callFn={() => {
            setHide((prev) => !prev);
            callFn();
          }}
          className={`mr-8`}
        />
        {!hide && (
          <Link passHref href={`/`}>
            <Image src={LogoWhite} width={120} />
          </Link>
        )}
      </div>

      <div
        className={`border border-[#e2e8f0] flex justify-between text-[#a2a6ac] lg:text-white px-14 w-full 
        lg:flex-col lg:px-0 lg:border-0 `}
      >
        {sideBar.map((menu) => (
          <Link href={`/${menu.path}`} passHref key={menu.name}>
            <div
              className={` cursor-pointer flex flex-col items-center py-2 lg:mb-10 lg:flex-row`}
            >
              <span
                className={`lg:mr-7 hover:text-[#062863] lg:hover:text-white`}
              >
                {menu.icon}
              </span>
              {!hide && (
                <Container
                  className={` lg:hover:bg-white lg:hover:text-blue-700 lg:py-1 lg:px-7 lg:block`}
                >
                  {menu.name}
                </Container>
              )}
            </div>
          </Link>
        ))}
      </div>

      <div
        className={`hidden lg:flex items-center mt-[4rem] cursor-pointer`}
        onClick={() => {}}
      >
        <ImSwitch className={`mr-8`} />
        {!hide && <span>Logout</span>}
      </div>
    </div>
  );
};

export default SideBar;

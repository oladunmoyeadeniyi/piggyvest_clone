import React, { useState } from "react";
import { SideBar } from "../../components/header";

type WrapperProps = {
  children?: React.ReactNode;
};
const Wrapper = ({ children }: WrapperProps) => {
  const [hide, setHide] = useState(false);

  return (
    <>
      <SideBar callFn={() => setHide((prev) => !prev)} />

      <div
        className={`${
          hide
            ? "w-full  lg:pl-32 lg:pr-20"
            : "lg:w-[80%] lg:absolute lg:right-12 lg:pl-[60px]"
        } flex flex-col gap-y-5 py-10 px-5 lg:py-20 `}
      >
        {children}
      </div>
    </>
  );
};

export default Wrapper;

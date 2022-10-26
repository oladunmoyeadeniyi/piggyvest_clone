import React from "react";
import { HalfSection, HomeFirstRight } from "../others";

const FirstSection = () => {
  return (
    <>
      <div className="w-full pt-40  p-5 h-fit flex flex-col lg:flex-row">
        <HalfSection
          fontSize="45px"
          heading="The Better Way to Save & Invest."
          text="PiggyVest helps over 4 million customers achieve their 
          financial goals by helping them save and invest with ease."
          btnText="Create free account"
          AppStores
          className={`text-center max-w-[450px] mx-auto mb-28 lg:text-left lg:w-[450px]`}
        />

        <HomeFirstRight className="mx-auto" />
      </div>
      <div
        className={`w-[350px] bg-slate-50 rounded top-0 
      absolute right-16 -z-50 h-[750px] hidden lg:block`}
      />
    </>
  );
};

export default React.memo(FirstSection);

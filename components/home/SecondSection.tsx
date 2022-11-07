import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Security } from "../../public/Images";
import { PlanCard, HalfSection } from "../others";
import { savingsPlan } from "../../utilities/DummyData";

const SecondSection = () => {
  return (
    <div className="mt-[70px] w-full p-10">
      <div className="flex flex-col items-center text-center my-20 lg:flex-row lg:max-w-[60%] lg:mx-auto lg:text-left">
        <div className="w-[100px]  lg:w-[170px] lg:h-[200px] mb-10 lg:mb-0 lg:mr-10">
          <Image src={Security} alt="Security" />
        </div>
        <div className="text-black">
          <h1 className="font-bold text-[28px]">
            Your security is our priority
          </h1>
          <p className="my-3">
            PiggyVest uses the highest level of Internet Security and it is
            secured by 256 bits SSL security encryption to ensure that your
            information is comepletely protected from fraud.
          </p>
          <Link href={""}>
            <a>
              <p className="text-[#0d60d8]">Learn more {">"}</p>
            </a>
          </Link>
        </div>
      </div>

      <div className="flex items-start flex-col lg:flex-row text-black">
        <HalfSection
          fontSize="33px"
          heading="4 ways to build your savings"
          text="Earn 5%-15% when you save with any of these PiggyVest plans."
          btnText="Start Saving"
          className="w-[280px] mx-auto text-center lg:text-left"
        />

        <div className="grid grid-cols-1 mt-14 gap-11 mx-auto md:grid-cols-2 lg:mt-0">
          {savingsPlan.slice(0, 4).map((plan) => (
            <PlanCard key={plan.name} {...plan} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(SecondSection);

import React from "react";
import { Section, Container } from "../others";
import Link from "next/link";
import { FiDollarSign, FiFilm } from "react-icons/fi";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { HiArrowCircleUp } from "react-icons/hi";
import { FlexNaira, FlexDollar, InvestifyTotal, TotalNairaBalance } from "./Plans";

const ScrollCard = () => {
  const savingSummary = [
    {
      name: "Total Savings",
      icon: <AiOutlineSecurityScan />,
      currency: "₦",
      amount: TotalNairaBalance(),
      path: "dashboard/savings",
      background: "rgb(13, 96, 216)",
      backgroundImage: "",
      color: "#ffffff",
    },
    {
      name: "Total Investments",
      icon: <HiArrowCircleUp />,
      currency: "₦",
      amount: InvestifyTotal(),
      path: "dashboard/investify",
      background: "rgb(121, 19, 229)",
      backgroundImage: "",
      color: "#ffffff",
    },
    {
      name: "Flex Dollar",
      icon: <FiDollarSign />,
      currency: "$",
      amount: FlexDollar(),
      path: "p/flexdollar",
      background: "rgb(34, 34, 34)",
      // backgroundImage: "",
      color: "#ffffff",
    },
    {
      name: "Flex Naira",
      icon: <FiFilm />,
      currency: "₦",
      amount: FlexNaira(),
      path: "dashboard/savings/flex",
      background: "rgb(255, 255, 255)",
      // backgroundImage: "",
      color: "rgb(231, 67, 156)",
    },
    {
      name: "Link PocketApp®",
      icon: <span>@</span>,
      currency: "₦",
      amount: "****",
      path: "p/abegconnect",
      background: "",
      backgroundImage:
        "https://storage.googleapis.com/abegtech.appspot.com/blue-virtual-card-pattern@3x.png",
      color: "#ffffff",
    },
  ];

  return (
    <Section className="overflow-x-scroll w-full">
      {savingSummary.map((plan) => (
        <Link href={`/${plan.path.trim()}`} passHref>
          <a>
            <Container
              key={plan.name}
              className={`flex items-center pl-3 pr-7 py-10 mx-2 border border-[#E5E5E5] min-w-[248px] cursor-pointer`}
              style={{
                backgroundImage: `url(${plan.backgroundImage})`,
                backgroundSize: "cover",
                backgroundColor: plan.background,
                color: plan.color,
              }}
            >
              <div className="mr-3 text-[32px]">{plan.icon}</div>

              <div className="">
                <p className="text-[#cabebe] font-semibold text-[0.875rem]">
                  {plan.name}
                </p>
                <p className="font-bold text-2xl">
                  {`${plan.currency}${plan.amount}`}
                </p>
              </div>
            </Container>
          </a>
        </Link>
      ))}
    </Section>
  );
};

export default ScrollCard;

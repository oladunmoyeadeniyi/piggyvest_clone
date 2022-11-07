import React from "react";
import { Container, Section, Wrapper, SideCard } from "../../components/others";
import { InvestifyTotal } from "../../components/savings/Plans";
import Link from "next/link";
import Image from "next/image";
import {  Invest_Realestate } from "../../public/Images";

const Investify = () => {
  return (
    <Wrapper>
      <Section title="Investify" icon />

      <Container className="text-black" border>
        <div className="w-full">
          <p>Total Balance</p>
          <p className="">{InvestifyTotal()}</p>
          <hr />
          <Link href={``}>
            <a>Learn More</a>
          </Link>
        </div>
      </Container>

      <Container className="text-black" border>
        <div className="w-full">
          <p>My Investments</p>
          <p className="">Expolore</p>
          <p className="">Completed</p>
          <hr />
          <div className="">
            <h1 className="">Start Investing!</h1>
            <p>
              Start investing in verified opportunities. Let's help you get
              started.
            </p>
            <Container>INVEST NOW</Container>
            <Container>LEARN MORE</Container>
          </div>
        </div>
      </Container>

      <Container>
        <div>
          <p className="">EXPECTED ROI</p>
          <p className="">UP TO 25%</p>
          <small>Per Annum</small>
        </div>
      </Container>

      <SideCard title="INVESTMENT OPPORTUNITY">
        <Image
          src={Invest_Realestate}
          width={350}
          height={200}
          className="rounded-lg w-5"
        />
      </SideCard>
    </Wrapper>
  );
};

export default Investify;

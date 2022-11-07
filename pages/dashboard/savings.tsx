import React from "react";
import { Container, Section, Summary, Wrapper } from "../../components/others";
import { HiUser, HiOutlineRefresh } from "react-icons/hi";
import SideCard from "../../components/others/SideCard";
import { Saving_Dark } from "../../public/Images";
import Image from "next/image";
import Link from "next/link";
import { SideBar } from "../../components/header";
import { summary } from "../../utilities/DummyData";

const savings = () => {
  return (
    <Wrapper>
      <Section title="Savings" text="Let's see how well you're doing." icon />

      <Section className="flex flex-col lg:flex-row">
        <Container className="lg:w-[60%] border-[0.3px] border-[#cebebe] border-opacity-50 items-center pl-5">
          <div className="py-7">
            <p className="text-xs">Total Balance</p>
            <p className="text-blue-800 font-extrabold text-2xl ">
              ₦615,194.34
            </p>
          </div>
        </Container>

        <SideCard
          title="BUILD YOUR SAVINGS"
          className="lg:w-[35%] mt-7 lg:mt-0"
        >
          <Image src={Saving_Dark} className="rouded-lg" />
        </SideCard>
      </Section>

      <div className="grid grid-cols-2 gap-3 mt-10 lg:grid-cols-3">
        {summary.map((list) => (
          <Link href={`${list.path}`} passHref>
            <Summary
              key={list.path}
              className="cursor-pointer"
              icon={list.icon}
              text={list.text}
              title={list.title}
              amount={list.amount}
              currency={list.currency}
              background={list.background}
              color={list.color}
            />
          </Link>
        ))}
      </div>
    </Wrapper>
  );
};

export default savings;

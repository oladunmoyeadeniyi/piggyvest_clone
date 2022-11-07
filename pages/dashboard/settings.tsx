import React from "react";
import Image from "next/image";
import { Container, Section, Wrapper } from "../../components/others";
import { Invest_Opps } from "../../public/Images";
import { HiUser } from "react-icons/hi";
import { settingsLink } from "../../utilities/DummyData";
import Link from "next/link";

const Settings = () => {
  return (
    <Wrapper>
      <Section title="My Account" text="Olusola Fawekun" />

      <Section className=" flex-col-reverse lg:flex-row mb-14">
        <div className="">
          <div className="w-96 h-96 mx-auto mt-7">
            <Image src={Invest_Opps} className="rounded-xl" />
          </div>

          <div className="mt-[-220px]">
            {settingsLink.map((link) => (
              <Link href={`/`} passHref>
                <Container
                  key={link.text}
                  className="py-4 px-4 gap-x-4 my-3 lg:my-4 cursor-pointer"
                  border
                >
                  <p>{link.icon}</p>
                  <p>{link.text}</p>
                </Container>
              </Link>
            ))}
          </div>
        </div>

        <Container className="flex-col gap-y-6 lg:ml-12">
          <span className="w-24 h-24 rounded-full bg-blue-700 text-5xl text-white flex items-center justify-center">
            <HiUser />
          </span>

          <span className="text-2xl font-bold">Olusola Fawekun</span>

          <div className="grid lg:grid-cols-2 lg:gap-4 w-full gap-y-4">
            <Container border className="flex-col py-5 w-full lg:w-[300px] ">
              <p className="text-2xl">0761635877</p>
              <small className="text-[#4a5568] text-sm">
                Flex Number by Access
              </small>
            </Container>
            <Container border className="flex-col py-5 w-full lg:w-[300px] ">
              <p className="text-2xl">0</p>
              <small className="text-[#4a5568] text-sm">Piggy Points</small>
            </Container>
            <Container border className="flex-col py-5 w-full lg:w-[300px] ">
              <p className="text-2xl"># Piggylink ID</p>
              <small className="text-[#4a5568] text-sm">
                Create a Piggylink ID
              </small>
            </Container>
            <Container border className="flex-col py-5 w-full lg:w-[300px] ">
              <p className="text-2xl">₦1,000</p>
              <small className="text-[#4a5568] text-sm">
                Referral Earnings
              </small>
            </Container>
          </div>

          <Section>
            <p>Show Dashboard Balances</p>
            <input type="checkbox" />
          </Section>
        </Container>
      </Section>
    </Wrapper>
  );
};

export default Settings;

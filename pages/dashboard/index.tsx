import React, { useState, useEffect } from "react";
import Image from "next/image";
import { HiOutlineRefresh } from "react-icons/hi";
import { Container, Section, Wrapper } from "../../components/others";
import ActivityList from "../../components/others/ActivityList";
import SideCard from "../../components/others/SideCard";
import { Invest_Opps, Investor, Google, Apple } from "../../public/Images";
import ScrollCard from "../../components/savings/ScrollCard";

const Dashboard = () => {
  const [time, setTime] = useState("Good Morning");

  const hour = new Date().getHours();
  useEffect(() => {
    if (hour >= 12) setTime("Good Afternoon");
    if (hour >= 17) setTime("Good Evening");
  }, [hour]);

  return (
    <>
      <Wrapper>
        <Section text={`${time}, wash your hands`} title="Olusola," icon />

        <Section>
          <span className="text-2xl font-bold">
            <HiOutlineRefresh />
          </span>
          <Container className="bg-blue-700 w-40 h-10 font-semibold text-white justify-center">
            +QUICK SAVE
          </Container>
        </Section>

        <ScrollCard />

        <Section className="mt-10 justify-between">
          <div className="w-full">
            <div className="w-full flex flex-col-reverse lg:flex-row justify-between">
              <div className="lg:w-[60%]">
                <ActivityList header="TO-DO LIST" todo />
              </div>
              <SideCard
                title="NEW INVESTMENT OPPORTUNITIES 🎉"
                className="text-[10px] lg:w-35%"
              >
                <Image
                  src={Invest_Opps}
                  width={350}
                  height={150}
                  className="rounded-lg w-5"
                />
              </SideCard>
            </div>
            <div className="w-full flex flex-col-reverse lg:flex-row justify-between">
              <div className="lg:w-[60%] mt-7 lg:mt-0">
                <ActivityList header="RECENT ACTIVITIES" />
              </div>
              <div>
                <div className="flex flex-col gap-y-12 text-[10px] lg:w-35% lg:mt-[-230px]">
                  <SideCard title="DOWNLOAD THE MOBILE APP">
                    <div className="flex gap-x-12 lg:gap-0 lg:justify-between">
                      <Image src={Apple} width={160} height={50} />
                      <Image src={Google} width={160} height={50} />
                    </div>
                  </SideCard>
                  <SideCard title="#MEETAPIGGYVESTSAVER: TITO">
                    <Image
                      src={Investor}
                      width={350}
                      height={200}
                      className="rounded-lg w-5"
                    />
                  </SideCard>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </Wrapper>
    </>
  );
};

export default Dashboard;

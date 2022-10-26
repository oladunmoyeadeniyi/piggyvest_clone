import type { NextPage } from "next";
import { Footer, Header } from "../components/header";
import {
  FifthSection,
  FirstSection,
  FourthSection,
  SecondSection,
  SixthSection,
  ThirdSection,
} from "../components/home";

const Home: NextPage = () => {
  return (
    <div className="">
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <Footer />
    </div>
  );
};

export default Home;

import GetStarted from "@src/components/icons/GetStarted.icon";
import type { NextPage } from "next";

import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const LandingPage: NextPage = () => {
  return (
    <div className="relative  flex w-full flex-col  tracking-[normal]">
      <Navbar />
      <section className="mx-auto mt-16 flex w-full flex-col items-center">
        <Hero />
        <GetStarted className="mt-8 w-36" />
      </section>
    </div>
  );
};

export default LandingPage;

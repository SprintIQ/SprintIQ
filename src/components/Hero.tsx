import type { NextPage } from "next";
import { Montserrat } from "next/font/google";

import Subtract from "./icons/Subtract.icon";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
});

const Hero: NextPage = () => {
  return (
    <div className="relative mx-auto flex flex-col text-center max-w-screen-md ">
      <div className="relative w-full">
        <h1
          className={`mx-auto text-center text-4xl font-normal ${montserrat.className} md:text-6xl`}
        >
          Enhance your Web3 Knowledge
        </h1>
        <Subtract className="absolute inset-x-0 top-20 mx-auto w-3/4" />
      </div>
      <div className="mx-auto mt-12 w-fit rounded-3xl border border-secondary-700 px-6 py-3">
        <p className="">
          Conquer Quizzes, Expand Knowledge, and Thrive in the Blockchain Revolution
        </p>
      </div>
    </div>
  );
};

export default Hero;

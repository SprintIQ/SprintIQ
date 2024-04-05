import type { NextPage } from "next";
import { Montserrat } from "next/font/google";

import Subtract from "./icons/Subtract.icon";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
});
const Hero: NextPage = () => {
  return (
    <div className="relative mx-auto flex w-fit flex-col text-center">
      <div className="relative w-full">
        <h1
          className={`mx-auto w-7/12 text-center text-6xl font-normal ${montserrat.className}`}
        >
          Enhance your Web3 Knowledge
        </h1>
        <Subtract className="absolute inset-x-0 top-20 mx-auto w-3/4" />
      </div>
      <div className="mx-auto mt-12 w-fit rounded-3xl border border-secondary-700 px-6 py-3">
        <p className="">
          Conquer Quizzes, Expand Knowledge, and Thrive in the Blockchain
          Revolution
        </p>
      </div>
    </div>
  );
};

export default Hero;

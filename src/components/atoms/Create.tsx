
import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { Toaster } from "sonner";
import QuizForm from "../ui/createGame/QuizForm";

const CreateGame: NextPage = () => {
  const router = useRouter();
 
  const onBackPress = useCallback(() => {
    void router.push("/dashboard/home");
  }, [router]);

  //console.log("This are the questions:", questions);
  return (
    <div className="p-4 sm:p-[2rem] lg:p-[3.75rem]  ">
      <Toaster />
      <div className="relative flex w-full flex-col items-start justify-start overflow-hidden rounded-[1.25rem] border border-[#373737] px-2  pt-[1.25rem] tracking-[normal] [background:linear-gradient(180deg,_#0e2615,_#0f0f0f)] lg:gap-[30px] lg:pl-[57px] lg:pr-[57px]  ">
        <section className="  lg:text-41xl font-inter flex max-w-full flex-col items-end justify-start text-center  text-white lg:w-[1456px]  ">
          <header className="font-inter flex h-[70px] flex-row items-center justify-between  self-stretch text-center text-[#1FC04D]">
            <div className="flex h-[20px] w-full flex-row items-center justify-start gap-2 sm:w-[314px] lg:gap-[30px]">
              <div className="flex flex-col items-center justify-start  px-0 pb-0 lg:pt-[3px]">
                <div className="relative h-[1.875rem] w-[1.875rem] cursor-pointer object-contain">
                  <Image
                    fill
                    loading="lazy"
                    alt=""
                    src="/polygon-4.svg"
                    onClick={onBackPress}
                    className="hidden lg:block"
                  />
                </div>
              </div>
              <div className="flex h-[40.1px] flex-1 flex-row items-center justify-start ">
                <div className="relative h-[22px] w-[22px] object-contain lg:h-[40.1px] lg:w-[40.6px]">
                  <Image fill loading="lazy" alt="" src="/group-1124@2x.png" />
                </div>
                <div className="box-border flex h-[20px] flex-1 flex-col items-center px-0 pt-0 lg:h-[31.1px] lg:justify-end lg:pb-[1.1px]">
                  <div className="relative -ml-5 h-[20px] max-w-full shrink-0 self-stretch overflow-hidden sm:-ml-12 lg:ml-0 lg:h-[30px] ">
                    <Image fill loading="lazy" alt="" src="/sprint-iq.svg" />
                  </div>
                </div>
              </div>
            </div>
          </header>
        </section>
        <QuizForm />
      </div>
    </div>
  );
};

export default CreateGame;




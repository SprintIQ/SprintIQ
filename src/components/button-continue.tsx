import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const ButtonContinue: NextPage = () => {
  const router = useRouter();

  const onButtonPrimaryClick = useCallback(() => {
    router.push("/you-are-set");
  }, [router]);

  return (
    <div className="absolute top-[227px] left-[292px] rounded-11xl bg-darkgreen box-border w-[927px] h-[663px] z-[1] text-center text-11xl text-white font-inter border-[1px] border-solid border-limegreen">
      <div className="absolute top-[0px] left-[0px] rounded-11xl bg-darkgreen box-border w-full h-full hidden border-[1px] border-solid border-limegreen" />
      <div className="absolute top-[0px] left-[0px] rounded-11xl bg-darkgreen box-border w-full h-full border-[1px] border-solid border-limegreen" />
      <h1 className="m-0 absolute top-[145px] left-[146px] text-41xl leading-[50px] font-normal font-inherit flex items-center justify-center w-[635px] h-[103px] z-[3] mq450:text-17xl mq450:leading-[30px] mq750:text-29xl mq750:leading-[40px]">
        Game Token
      </h1>
      <button
        className="cursor-pointer [border:none] py-4 px-8 bg-limegreen absolute top-[517px] left-[295px] rounded-81xl w-[335px] flex flex-col items-center justify-start box-border z-[3] hover:bg-forestgreen"
        onClick={onButtonPrimaryClick}
      >
        <div className="w-32 relative text-11xl font-inter text-white text-center inline-block min-w-[128px] mq450:text-lg mq750:text-5xl">
          Continue
        </div>
      </button>
      <div className="absolute top-[264px] left-[295px] rounded-81xl box-border w-[335px] flex flex-col items-center justify-start py-4 px-8 z-[3] border-[1px] border-solid border-lime">
        <div className="w-28 relative inline-block min-w-[112px] mq450:text-lg mq750:text-5xl">
          437200
        </div>
      </div>
      <div className="absolute top-[402px] left-[138px] leading-[15px] flex items-center justify-center w-[651px] z-[3] mq450:text-lg mq450:leading-[9px] mq750:text-5xl mq750:leading-[12px]">
        Participants can access Game with this code
      </div>
    </div>
  );
};

export default ButtonContinue;

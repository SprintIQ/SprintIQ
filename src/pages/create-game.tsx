import type { NextPage } from "next";
import FrameComponent6 from "../components/frame-component6";
import FrameComponent5 from "../components/frame-component5";
import FrameComponent4 from "../components/frame-component4";

const CreateGame: NextPage = () => {
  return (
    <div className="w-full relative [background:linear-gradient(180deg,_#0e2615,_#0f0f0f)] overflow-hidden flex flex-col items-start justify-start pt-[104px] px-[115px] pb-[364px] box-border gap-[105px] tracking-[normal] lg:pl-[57px] lg:pr-[57px] lg:box-border mq450:gap-[26px_105px] mq750:gap-[52px_105px] mq750:pl-7 mq750:pr-7 mq750:box-border">
      <FrameComponent6 />
      <FrameComponent5 />
      <FrameComponent4 />
    </div>
  );
};

export default CreateGame;

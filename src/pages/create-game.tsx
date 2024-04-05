import type { NextPage } from "next";

import FrameComponent4 from "../components/frame-component4";
import FrameComponent5 from "../components/frame-component5";
import FrameComponent6 from "../components/frame-component6";

const CreateGame: NextPage = () => {
  return (
    <div className="mq450:gap-[26px_105px] mq750:gap-[52px_105px] mq750:pl-7 mq750:pr-7 mq750:box-border relative box-border flex w-full flex-col items-start justify-start gap-[105px] overflow-hidden px-[115px] pb-[364px] pt-[104px] tracking-[normal] [background:linear-gradient(180deg,_#0e2615,_#0f0f0f)] lg:box-border lg:pl-[57px] lg:pr-[57px]">
      <FrameComponent6 />
      <FrameComponent5 />
      <FrameComponent4 />
    </div>
  );
};

export default CreateGame;

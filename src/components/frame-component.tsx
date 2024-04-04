import type { NextPage } from "next";

const FrameComponent: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col items-end justify-start gap-[12px] max-w-full text-center text-77xl text-white font-montserrat">
      <div className="w-[1416px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <h1 className="m-0 w-[900px] relative text-inherit leading-[80px] font-normal font-inherit flex items-center justify-center shrink-0 max-w-full mq450:text-10xl mq450:leading-[32px] mq825:text-29xl mq825:leading-[48px]">
          Enhance your Web3 Knowledge
        </h1>
      </div>
      <div className="self-stretch flex flex-col items-end justify-start max-w-full text-13xl">
        <div className="self-stretch relative flex items-center justify-center">
          <img
            className="self-stretch max-w-full overflow-hidden max-h-full object-contain absolute left-[0px] top-[0px] w-full h-full [transform:scale(1.093)]"
            loading="lazy"
            alt=""
            src="/subtract.svg"
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[66px] pl-[67px] box-border max-w-full mt-[-36px] mq1400:pl-[33px] mq1400:pr-[33px] mq1400:box-border">
          <div className="flex-1 rounded-11xl box-border flex flex-row items-start justify-end py-1 px-7 max-w-full z-[1] border-[1px] border-solid border-limegreen">
            <div className="h-[88px] w-[1343px] relative rounded-11xl box-border hidden max-w-full border-[1px] border-solid border-limegreen" />
            <div className="w-[1263px] relative leading-[80px] flex items-center justify-center shrink-0 max-w-full z-[2] mq450:text-lgi mq450:leading-[48px] mq825:text-7xl mq825:leading-[64px]">
              Conquer Quizzes, Expand Knowledge, and Thrive in the Blockchain
              Revolution
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;

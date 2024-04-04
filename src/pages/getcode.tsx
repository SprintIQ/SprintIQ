import type { NextPage } from "next";
import { useCallback } from "react";
import ButtonContinue from "../components/button-continue";
import { useRouter } from "next/router";

const GetCode: NextPage = () => {
  const router = useRouter();

  const onMultiCornerIconClick = useCallback(() => {
    router.push("/generate-code");
  }, [router]);

  return (
    <div className="w-full h-[1117px] relative [background:linear-gradient(180deg,_#0e2615,_#0f0f0f)] overflow-hidden flex flex-row items-start justify-center py-0 px-5 box-border tracking-[normal]">
      <div className="h-[1117px] w-[1509.4px] relative max-w-full">
        <img
          className="absolute top-[-145px] left-[0px] w-[1509.4px] h-[1677px] object-cover"
          alt=""
          src="/group-1143@2x.png"
        />
        <ButtonContinue />
        <img
          className="absolute top-[117px] left-[7px] w-[48.1px] h-[48.1px] object-contain cursor-pointer z-[1]"
          loading="lazy"
          alt=""
          src="/polygon-4.svg"
          onClick={onMultiCornerIconClick}
        />
      </div>
    </div>
  );
};

export default GetCode;

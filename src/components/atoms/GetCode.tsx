import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useCallback } from "react";

import ButtonContinue from "../../components/button-continue";
import Image from "next/image";

const GetCode: NextPage = () => {
  const router = useRouter();

  const onMultiCornerIconClick = useCallback(() => {
    void router.push("/generate-code");
  }, [router]);

  return (
    <div className="relative box-border flex h-[1117px] w-full flex-row items-start justify-center overflow-hidden px-5 py-0 tracking-[normal] [background:linear-gradient(180deg,_#0e2615,_#0f0f0f)]">
      <div className="relative h-[1117px] w-[1509.4px] max-w-full">
       <div  className="absolute left-[0px] h-[1677px] w-[1509.4px] object-cover" >
      <Image
        fill 
        alt=""
        src="/group-1143@2x.png"
        />
        </div>
        <ButtonContinue />
        <div  className="absolute left-[7px] top-[117px] z-[1] h-[48.1px] w-[48.1px] cursor-pointer object-contain" >

        <Image
        fill
        loading="lazy"
        alt=""
        src="/polygon-4.svg"
        onClick={onMultiCornerIconClick}
        />
        </div>
      </div>
    </div>
  );
};

export default GetCode;
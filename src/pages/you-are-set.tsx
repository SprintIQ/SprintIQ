import type { NextPage } from "next";
import { useCallback } from "react";
import FrameComponent9 from "../components/frame-component9";
import { useRouter } from "next/router";

const YouAreSet: NextPage = () => {
  const router = useRouter();

  const onPolygonIconClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="w-full h-[1117px] relative [background:linear-gradient(180deg,_#0e2615,_#0f0f0f)] overflow-hidden tracking-[normal]">
      <FrameComponent9 />
      <div className="absolute h-full top-[0px] bottom-[0px] left-[109px] w-[1509.4px]">
        <img
          className="absolute top-[-145px] left-[0px] w-[1509.4px] h-[1677px] object-cover"
          alt=""
          src="/group-1143@2x.png"
        />
        <img
          className="absolute top-[117px] left-[7px] w-[48.1px] h-[48.1px] object-contain cursor-pointer z-[1]"
          loading="lazy"
          alt=""
          src="/polygon-4.svg"
          onClick={onPolygonIconClick}
        />
      </div>
    </div>
  );
};

export default YouAreSet;

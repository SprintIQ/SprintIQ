import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useCallback } from "react";

import FrameComponent9 from "../components/frame-component9";

const YouAreSet: NextPage = () => {
  const router = useRouter();

  const onPolygonIconClick = useCallback(() => {
    void router.push("/");
  }, [router]);

  return (
    <div className="relative h-[1117px] w-full overflow-hidden tracking-[normal] [background:linear-gradient(180deg,_#0e2615,_#0f0f0f)]">
      <FrameComponent9 />
      <div className="absolute bottom-[0px] left-[109px] top-[0px] h-full w-[1509.4px]">
        <img
          className="absolute left-[0px] top-[-145px] h-[1677px] w-[1509.4px] object-cover"
          alt=""
          src="/group-1143@2x.png"
        />
        <img
          className="absolute left-[7px] top-[117px] z-[1] h-[48.1px] w-[48.1px] cursor-pointer object-contain"
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

import { RiAddLine, RiEditFill, RiHome5Fill } from "@remixicon/react";
import Image from "next/image";

const SideBar = () => {
  return (
    <div className="shrink-0 bg-primary-green px-5 py-10 h-screen max-w-fit flex flex-col gap-16">
      <Image
        src={"/sprint-iq-icon.png"}
        alt="Sprint IQ"
        width={30}
        height={30}
      />

      <div className="text-offwhite flex flex-col gap-y-10">
        <button>
          <RiHome5Fill className="w-[30px]" />
        </button>

        <button className="bg-offwhite h-7 w-7 rounded text-primary-green">
          <RiAddLine className="w-[30px]" />
        </button>

        <button>
          <RiEditFill className="w-[30px]" />
        </button>
      </div>
    </div>
  );
};

export default SideBar;

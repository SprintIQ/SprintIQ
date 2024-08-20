"use client";

import Image from "next/image";
import GetStartedButton from "./GetStartedButton";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  RiArrowLeftLine,
  RiLogoutBoxRLine,
  RiNotification2Line,
} from "@remixicon/react";

interface TopNavOptions {
  setConnectWalletModalIsOpen?: (ConnectWalletModalIsOpen: boolean) => void;
}

const TopNav = ({ setConnectWalletModalIsOpen }: TopNavOptions) => {
  const pathname = usePathname();

  const renderRightContent = () => {
    switch (pathname) {
      case "/":
        return (
          setConnectWalletModalIsOpen && (
            <GetStartedButton
              setConnectWalletModalIsOpen={setConnectWalletModalIsOpen}
            />
          )
        );
      case "/dashboard":
        return (
          <div className="flex gap-3">
            <button>
              <RiLogoutBoxRLine />
            </button>
            <button>
              <RiNotification2Line />
            </button>
          </div>
        );
        case "/notification":
        return (
          <div className="flex gap-3">
            <button className="text-white bg-primary-green px-4 py-2">
              Logout
            </button>
            <button>
              <RiNotification2Line />
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <nav className={`${['/', '/notification'].includes(pathname) ? "bg-mint-50": ""} flex justify-between items-center px-5 md:px-10 py-5 relative z-[99]`}>
      <div className="flex items-center gap-3">
        {["/dashboard", "/leaderboard"].includes(pathname) ? (
          <button className="hidden md:block">
            <RiArrowLeftLine />
          </button>
        ) : null}

        <div>
          <Image
            src={"/sprint-iq.png"}
            alt="Sprint IQ"
            width={200}
            height={100}
            className="w-32 md:w-40"
          />
        </div>
      </div>
      <div className={` ${pathname === '/' ? "hidden" : "block"} md:block`}>{renderRightContent()}</div>
    </nav>
  );
};

export default TopNav;

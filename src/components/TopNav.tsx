import Image from "next/image";
import GetStartedButton from "./GetStartedButton";
import { usePathname } from "next/navigation";
import {
  RiArrowLeftLine,
  RiLogoutBoxRLine,
  RiNotification2Line,
} from "@remixicon/react";

interface TopNavOptions {
  setConnectWalletModalIsOpen?: (ConnectWalletModalIsOpen: boolean) => void;
}

enum Routes {
  Home = "/",
  Dashboard = "/dashboard",
  Notification = "/notification",
}

const isRoute = (path: string): path is Routes => {
  return Object.values(Routes).includes(path as Routes);
};

const TopNav = ({ setConnectWalletModalIsOpen }: TopNavOptions) => {
  const pathname = usePathname();

  if (!isRoute(pathname)) {
    return null; // or handle the case where the pathname is not a valid route
  }

  const renderRightContent = () => {
    switch (pathname) {
      case Routes.Home:
        return (
          setConnectWalletModalIsOpen && (
            <GetStartedButton
              setConnectWalletModalIsOpen={setConnectWalletModalIsOpen}
            />
          )
        );
      case Routes.Dashboard:
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
      case Routes.Notification:
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
    <nav
      className={`${
        [Routes.Home, Routes.Notification].includes(pathname)
          ? "bg-mint-50"
          : ""
      } flex justify-between items-center px-5 md:px-10 py-5 relative z-[99]`}
    >
      <div className="flex items-center gap-3">
        {[Routes.Dashboard, "/leaderboard"].includes(pathname) ? (
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
      <div
        className={` ${pathname === Routes.Home ? "hidden" : "block"} md:block`}
      >
        {renderRightContent()}
      </div>
    </nav>
  );
};

export default TopNav;
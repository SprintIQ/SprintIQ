import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";

const Navbar: NextPage = () => {
  const onButtonPrimaryClick = useCallback(() => {
    // Please sync "Connect wallet" to the project
  }, []);

  return (
    <header className="flex flex-row justify-between bg-black/[0.12] px-8 py-4 sm:flex-row sm:p-4">
      <Image
        className="mb-4 h-5 w-auto sm:mb-0"
        loading="lazy"
        alt=""
        width={200}
        height={50}
        src="/logo.png"
      />
      <div className="flex flex-row justify-start gap-4 sm:justify-end">
        <button className="ml-auto  rounded-full bg-gradient-to-r from-green-700 via-green-700 to-green-700 px-4 py-0.5 text-center text-sm font-medium text-white shadow-lg shadow-green-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-green-300 dark:shadow-lg dark:shadow-green-800/80 dark:focus:ring-green-800">
          Get Started
        </button>
        <button>
          <Link
            href="/login"
            className="ml-auto rounded-full bg-gradient-to-r from-green-700 via-green-700 to-green-700 px-4 py-0.5 text-center text-sm font-medium text-white shadow-lg shadow-green-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-green-300 dark:shadow-lg dark:shadow-green-800/80 dark:focus:ring-green-800 "
          >
            LogIn
          </Link>
        </button>
      </div>
    </header>
  );
};

export default Navbar;

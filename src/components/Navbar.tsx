import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";

const Navbar: NextPage = () => {
  const onButtonPrimaryClick = useCallback(() => {
    // Please sync "Connect wallet" to the project
  }, []);

  return (
    <header className="flex flex-row sm:flex-row justify-between py-4 px-8 bg-black/[0.12] sm:p-4">
      <Image
        className="h-5 w-auto mb-4 sm:mb-0"
        loading="lazy"
        alt=""
        width={200}
        height={50}
        src="/logo.png"
      />
      <div className="flex flex-row justify-start gap-4 sm:justify-end">
        <button className="text-white  bg-gradient-to-r from-green-700 via-green-700 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-full text-sm px-4 py-0.5 text-center ml-auto">
          Get Started
        </button>
        <button>
        <Link href="/login" className="text-white bg-gradient-to-r from-green-700 via-green-700 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-full text-sm px-4 py-0.5 text-center ml-auto ">
          LogIn
        </Link>
        </button>

      </div>
    </header>
  );
};

export default Navbar;

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
<<<<<<< HEAD
        <button className="text-white  bg-gradient-to-r from-green-700 via-green-700 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-full text-sm px-4 py-0.5 text-center ml-auto">
          Get Started
        </button>
        <button>
        <Link href="/login" className="text-white bg-gradient-to-r from-green-700 via-green-700 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-full text-sm px-4 py-0.5 text-center ml-auto ">
          LogIn
        </Link>
=======
        <button className="rounded-full bg-secondary-700 px-3 py-1.5 sm:px-5 sm:py-2">
          Get Started
        </button>
        <button>
          <Link
            href="/login"
            className="rounded-full bg-secondary-700 px-3 py-1.5 font-bold sm:px-5 sm:py-2"
          >
            LogIn
          </Link>
>>>>>>> a9f9d068589862e94f172ca63e24cd8d4f1cbaaf
        </button>
      </div>
    </header>
  );
};

export default Navbar;

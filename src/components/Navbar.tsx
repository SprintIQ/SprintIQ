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
        </button>
      </div>
    </header>
  );
};

export default Navbar;

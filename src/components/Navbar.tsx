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
        <button className="rounded-full bg-secondary-700 px-3 py-0.5">
          Get Started
        </button>
        <button>
        <Link href="/login" className="font-bold rounded-full bg-secondary-700 px-3 py-1.5 ">
          LogIn
        </Link>
        </button>

      </div>
    </header>
  );
};

export default Navbar;

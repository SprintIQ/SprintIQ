import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";

const Navbar: NextPage = () => {
  const onButtonPrimaryClick = useCallback(() => {
    // Please sync "Connect wallet" to the project
  }, []);

  return (
    <header className="flex w-full items-center justify-between bg-black/[0.12] p-16">
      <Image
        className="relative h-10 w-auto"
        loading="lazy"
        alt=""
        width={222}
        height={46}
        src="/logo.png"
      />
      <div className="flex items-center justify-start gap-8">
        <button className="rounded-full bg-secondary-700 px-5 py-2">
          Get Started
        </button>
        <Link href="/login" className="font-bold">
          Log In
        </Link>
      </div>
    </header>
  );
};

export default Navbar;

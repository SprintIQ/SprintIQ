import Image from "next/image";
import React from "react";

const Modal = () => {
  return (
<main className="relative w-screen h-screen bg-gradient-to-b from-[#0E2615] to-[#0F0F0F] overflow-x-hidden">
      <div className="absolute w-full h-full bg-[url('/bg.png')] bg-cover bg-center z-[1]">
      </div>
      <div className="px-4 sm:px-10 py-6 sm:py-10 relative z-[2]">
        <div>
          <Image src="/prev.png" alt="prev" width={20} height={20}/>
        </div>
        <h1 className="text-center text-xl sm:text-2xl font-bold mt-4">Select Your Wallet</h1>
      </div>
      <div className="z-[2] relative px-4 sm:px-0">
        <div className="bg-[#0E1912] border-2 border-[#1FC04D] w-full max-w-[450px] mx-auto py-6 px-6 sm:px-10 rounded-2xl">
          <div className="flex justify-between items-center">
            <h2 className="text-base sm:text-lg font-semibold">
              Recommended
            </h2>
            <Image src="/cancle.jpg" alt="cancel" width={20} height={20}/>
          </div>
          <div className="flex flex-col gap-y-3 my-6 sm:my-8">
            <WalletLink src="/tiplink.png" name="Tiplink"/>
            <WalletLink src="/solfare.png" name="Solfare"/>
            <WalletLink src="/phantom.png" name="Phantom"/>
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-semibold">Don't have a wallet?</h2>
            <p className="text-sm sm:text-base mt-2">You can create a TipLink wallet using your Google account.</p>
            <button className="bg-white text-black w-full sm:w-[80%] mx-auto mt-4 flex gap-2 justify-center items-center py-2 rounded-full text-sm sm:text-base">
              <Image src='/google.png' alt="google logo" width={30} height={30} className="w-[20px] sm:w-[30px]"/>
              Create Tiplink Wallet
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Modal;


interface WalletLinkOption{
  src: string,
  name: string
}

const WalletLink = ({src,name}:WalletLinkOption) => {
  return(
    <div>
      <button className="flex items-center gap-3">
        <Image src={src} alt={name} width={100} height={100} className="w-[35px] rounded"/>
        {name}
      </button>
    </div>
  )
}
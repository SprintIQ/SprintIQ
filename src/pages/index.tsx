import React, { useContext, useEffect, useMemo } from "react";
import { useRouter } from "next/router";
// import Image from "next/image";
import { toast } from "sonner";
import { useWalletMultiButton } from "@solana/wallet-adapter-base-ui";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { ProfileContext } from "@src/provider/ProfileProvider";
import { api } from "@src/utils/api";
import { LABELS, Routes } from "@src/utils/constants/constants";
import Modal from "@src/components/ConnectWalletModal"; 
import GetStartedButton from "@src/components/GetStartedButton";
import OvalAnimation from "@src/components/OvalAnimation";
import TopNav from "@src/components/TopNav";

const Home = () => {
  const createUser = api.auth.create.useMutation();
  const { login, isLoggingIn } = useContext(ProfileContext);
  const { push } = useRouter();
  const { setVisible: setModalVisible } = useWalletModal();

  const {
    buttonState,
    onConnect,
    publicKey,
    onSelectWallet,
    walletIcon,
    walletName,
  } = useWalletMultiButton({
    onSelectWallet() {
      setModalVisible(true);
    },
  });
console.log({  buttonState,
  onConnect,
  publicKey,
  onSelectWallet,
  walletIcon,
  walletName})
  const handleRedirect = () => {
    if (publicKey) {
      void createUser
        .mutateAsync({
          wallet_address: publicKey.toBase58(),
        })
        .then(res => {
          if (!res.success) {
            console.log({res})
            // TODO implement an error toast
            return;
          }
          void login(res.user!.wallet_address).then(res => {
            console.log(res)
            if (res.success) {
              void push(`/dashboard/${Routes.HOME}?state=connected`);
            } else {
              toast("An unexpected error occurred please try again");
            }
          });
        });
    }
  };

  useEffect(() => {
    if (publicKey) {
      handleRedirect();
    }
  }, [publicKey]);

  const content = useMemo(() => {
    if (publicKey) {
      const base58 = publicKey.toBase58();
      return base58.slice(0, 4) + ".." + base58.slice(-4);
    } else if (buttonState === "connecting" || buttonState === "has-wallet") {
      return LABELS[buttonState];
    }
  }, [buttonState, publicKey]);

  const handleSignIn = () => {
    switch (buttonState) {
      case "connected":
        handleRedirect();
        break;
      default:
        onSelectWallet?.();
        break;
    }
  };

  return (
<main className="relative max-w-[100vw] overflow-x-hidden md:overflow-clip select-none">
      <TopNav setConnectWalletModalIsOpen={setModalVisible} />

      <div className="relative w-full flex justify-center items-center">
        <div className="absolute md:-top-40 w-full">
          <div className="max-w-fit scale-125 md:scale-100 mx-auto">
          <OvalAnimation/>
          </div>
        </div>

        <div className="py-36 mt-10 md:py-48 max-w-fit relative">
        <h1 className="text-3xl md:text-6xl font-extrabold max-w-[250px] md:max-w-[500px] text-center relative z-[2]">
            Dynamic Interactions meets Rewards
          </h1>
          <div className="w-full h-3 md:h-6 bg-lime-500 opacity-20 -mt-3 md:-mt-4 relative z-[1]"></div>
          <div className="md:hidden flex justify-center my-3">
            <GetStartedButton setConnectWalletModalIsOpen={setModalVisible} />
          </div>
        </div>
      </div>

      <Modal />
    </main>
  );
};

export default Home;
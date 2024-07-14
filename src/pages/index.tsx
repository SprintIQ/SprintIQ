import { useWalletMultiButton } from "@solana/wallet-adapter-base-ui";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import GetStarted from "@src/components/icons/GetStarted.icon";
import { ProfileContext } from "@src/provider/ProfileProvider";
import { api } from "@src/utils/api";
import { LABELS, Routes } from "@src/utils/constants/constants";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useMemo } from "react";


import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Spinner from "@src/components/ui/Spinner";
export default function Page() {
  const createUser = api.auth.create.useMutation();
  const { login } = useContext(ProfileContext);
  const { push } = useRouter();
  const { setVisible: setModalVisible } = useWalletModal();
  const [isFirstConnect, setIsFirstConnect] = React.useState(false);
  const {
    buttonState,
    onConnect,
    publicKey,
    onSelectWallet,
  } = useWalletMultiButton({
    onSelectWallet() {
      setModalVisible(true);
      setIsFirstConnect(true);
    },
  });
  const handleRedirect = () => {
    if (publicKey) {
      void createUser
        .mutateAsync({
          wallet_address: publicKey.toBase58(),
        })
        .then(res => {
          if (!res.success) {
            // TODO implement an error toast
            return;
          }
          void login(res.user!.wallet_address).then(res => {
            if (res.success) {
              void push(`/dashboard/${Routes.HOME}?state=connected`);
            }
          });
        });
    }
  };
  useEffect(() => {
    if (isFirstConnect) {
      handleRedirect();
    }
  }, [publicKey, isFirstConnect]);
  const handleSignIn = () => {
    console.log("signin in....", buttonState);
    switch (buttonState) {
      case "no-wallet":
        console.log("no wallet");
        onSelectWallet?.();
        handleRedirect();
        break;
      case "has-wallet":
        console.log("has wallet");
        if (onConnect) {
          console.log("has wallet connect");
          onConnect();
          handleRedirect();
        }
        break;
      case "connected":
        handleRedirect();
        // redirect user to dashboard
        break;
    }
  };
  return (    
    <div className="relative  flex w-full flex-col  tracking-[normal]">
      <Navbar />
      <section className="mx-auto mt-16 flex h-full w-full flex-col items-center justify-center">
        <Hero />
        <button onClick={handleSignIn}>
          <GetStarted className="mt-8 w-36"/>
        </button>
      </section>
    </div>
  );
}

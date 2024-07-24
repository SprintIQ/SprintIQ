import { useWalletMultiButton } from "@solana/wallet-adapter-base-ui";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import GetStarted from "@src/components/icons/GetStarted.icon";
import { ProfileContext } from "@src/provider/ProfileProvider";
import { api } from "@src/utils/api";
import { LABELS, Routes } from "@src/utils/constants/constants";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useMemo } from "react";
import { toast } from "sonner";

import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Spinner from "../components/ui/Spinner";
export default function Page() {
  const createUser = api.auth.create.useMutation();
  const { login, isLoggingIn } = useContext(ProfileContext);
  const { push } = useRouter();
  const { setVisible: setModalVisible } = useWalletModal();
  const [isFirstConnect, setIsFirstConnect] = React.useState(false);
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
      setIsFirstConnect(true);
    },
  });
  const handleRedirect = () => {
    // isLoading: true
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
            } else {
              toast("An unexpected error occurred please try again");
            }
          });
        });
    }
    // isLoading: false
  };
  useEffect(() => {
    if (isFirstConnect) {
      handleRedirect();
    }
  }, [publicKey, isFirstConnect]);
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
      case "no-wallet":
        onSelectWallet?.();
        handleRedirect();
        break;
      case "has-wallet":
        if (onConnect) {
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
        {buttonState === "connecting" || createUser.isLoading || isLoggingIn ? (
          <div className="mt-16 w-36">
            <Spinner />
          </div>
        ) : (
          <button onClick={handleSignIn}>
            <GetStarted className="mt-8 w-36" />
          </button>
        )}
      </section>
    </div>
  );
}

import {type WalletName, WalletReadyState} from "@solana/wallet-adapter-base";
import {useWallet, type Wallet} from "@solana/wallet-adapter-react";
import {useWalletModal} from "@solana/wallet-adapter-react-ui";
import {Inter} from "next/font/google";
import Image from "next/image";
import React, {type MouseEvent, useCallback, useLayoutEffect, useMemo, useState,} from "react";
import {createPortal} from "react-dom";
import { RiArrowLeftLine } from "@remixicon/react";
import { motion as m, AnimatePresence } from "framer-motion";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
});

const Modal = () => {
    const {wallets, select} = useWallet();
    const [portal, setPortal] = useState<Element | null>(null);
    const {visible, setVisible} = useWalletModal();

    const [listedWallets, collapsedWallets, tipLinkWallet] = useMemo(() => {
        const installed: Wallet[] = [];
        const notInstalled: Wallet[] = [];

        for (const wallet of wallets) {
            if (wallet.readyState === WalletReadyState.Installed) {
                installed.push(wallet);
            } else {
                notInstalled.push(wallet);
            }
        }
        const tipLinkWallet = wallets.find(
            val => val.adapter.name === "Google via TipLink",
        );

        return installed.length
            ? [installed, notInstalled, tipLinkWallet]
            : [notInstalled, [], tipLinkWallet];
    }, [wallets]);

    const hideModal = useCallback(() => {
        setTimeout(() => setVisible(false), 150);
    }, [setVisible]);

    const handleClose = useCallback(
        (event: MouseEvent) => {
            event.preventDefault();
            hideModal();
        },
        [hideModal],
    );

    useLayoutEffect(() => setPortal(document.body), []);

    const handleWalletClick = useCallback(
        (event: MouseEvent, walletName: WalletName) => {
            select(walletName);
            handleClose(event);
        },
        [select, handleClose],
    );

    return (
        portal &&
        createPortal(
            <AnimatePresence>
                {visible && (
                    <m.div 
                        className="fixed top-0 left-0 w-screen h-screen bg-white z-[999] px-5 flex justify-center items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{fontFamily: inter.style.fontFamily}}
                    >
                        <div className="absolute top-5 left-5 md:top-10 md:left-10">
                            <RiArrowLeftLine onClick={handleClose} />
                        </div>

                        <m.div className="">
                            <h2 className="text-lg font-bold text-center mb-2">Select your wallet</h2>
                            <m.div 
                                className="border border-neutral-300 p-5 md:px-10 w-full md:w-[500px]"
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.3 }}
                            >
                                <div>
                                    <h3 className="text-sm font-semibold mb-3">Recommended</h3>
                                    {listedWallets.map(wallet => (
                                        <RecommendedWallet
                                            key={wallet.adapter.name}
                                            image={wallet.adapter.icon}
                                            walletName={wallet.adapter.name}
                                            onClick={(event) => handleWalletClick(event, wallet.adapter.name)}
                                        />
                                    ))}
                                </div>

                                <div className="my-5">
                                    <h3 className="font-semibold">Don't have a wallet?</h3>
                                    <p className="text-sm text-neutral-400">You can create a Tiplink wallet using your Google account</p>
                                </div>

                                {tipLinkWallet && (
                                    <button 
                                        className="flex justify-center gap-2 items-center w-full bg-grey-700 py-3 font-semibold"
                                        onClick={(e) => handleWalletClick(e, tipLinkWallet.adapter.name)}
                                    >
                                        <Image src="/Google.png" alt="Google" width={30} height={30} />
                                        <span>Create Tiplink Wallet</span>
                                    </button>
                                )}
                            </m.div>
                        </m.div>
                    </m.div>
                )}
            </AnimatePresence>,
            portal
        )
    );
};

export default Modal;

interface RecommendedWalletOption {
    image: string;
    walletName: string;
    onClick: (event: MouseEvent) => void;
}

const RecommendedWallet = ({ image, walletName, onClick }: RecommendedWalletOption) => {
    return (
        <div className="flex gap-3 items-center p-2 border cursor-pointer border-neutral-200 hover:bg-neutral-200 transition-colors duration-1000" onClick={onClick}>
            <Image
                src={image}
                alt={walletName}
                width={40}
                height={40}
                className="rounded"
            />
            <span className="font-semibold">{walletName}</span>
        </div>
    );
};
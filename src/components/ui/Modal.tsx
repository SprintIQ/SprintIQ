import {type WalletName, WalletReadyState} from "@solana/wallet-adapter-base";
import {useWallet, type Wallet} from "@solana/wallet-adapter-react";
import {useWalletModal} from "@solana/wallet-adapter-react-ui";
import {Inter} from "next/font/google";
import Image from "next/image";
import React, {type MouseEvent, useCallback, useLayoutEffect, useMemo, useState,} from "react";
import {createPortal} from "react-dom";
import {TbCircleX} from "react-icons/tb";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
});
const Modal = () => {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    const {wallets, select} = useWallet();
    const [portal, setPortal] = useState<Element | null>(null);
    const {setVisible} = useWalletModal();

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
    const [expanded, setExpanded] = useState(false);
    const handleCollapseClick = useCallback(() => setExpanded(!expanded), [expanded]);

    return (
        portal &&
        createPortal(
            <div
                style={{fontFamily: inter.style.fontFamily}}
                className="absolute inset-0 grid place-content-center bg-black/75 bg-[url('/bg.png')] bg-cover bg-center text-white"
            >
                <div className="relative z-[2] px-4 py-6 sm:px-10 sm:py-10">
                    <h1 className="mt-4 text-center text-xl font-bold sm:text-2xl">
                        Select Your Wallet
                    </h1>
                </div>
                <div
                    className="z-10 mx-auto max-h-[70vh] max-w-[450px] overflow-y-scroll no-scrollbar rounded-2xl border-2 border-[#1FC04D] bg-[#0E1912] px-6 py-6 sm:px-10">
                    <div className="flex items-center justify-between">
                        <h2 className="text-base font-semibold sm:text-lg">Recommended</h2>
                        <TbCircleX
                            className="h-7 w-7 cursor-pointer"
                            onClick={handleClose}
                        />
                    </div>
                    <div className="my-6 flex flex-col gap-y-3 sm:my-8">
                        {listedWallets.length
                            ? listedWallets.map(wallet => (
                                <WalletLink
                                    src={wallet.adapter.icon}
                                    key={wallet.adapter.name}
                                    name={wallet.adapter.name}
                                    handleClick={event =>
                                        handleWalletClick(event, wallet.adapter.name)
                                    }
                                />
                            ))
                            : <>
                                <h1 className="wallet-adapter-modal-title">
                                    You&apos;ll need a wallet on Solana to continue
                                </h1>
                                {collapsedWallets.length ? (
                                    <>
                                        <button
                                            className="wallet-adapter-modal-list-more"
                                            onClick={handleCollapseClick}
                                            tabIndex={0}
                                        >
                                            <span>{expanded ? 'Hide ' : 'Already have a wallet? View '}options</span>
                                            <svg
                                                width="13"
                                                height="7"
                                                viewBox="0 0 13 7"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className={`${
                                                    expanded ? 'wallet-adapter-modal-list-more-icon-rotate' : ''
                                                }`}
                                            >
                                                <path
                                                    d="M0.71418 1.626L5.83323 6.26188C5.91574 6.33657 6.0181 6.39652 6.13327 6.43762C6.24844 6.47872 6.37371 6.5 6.50048 6.5C6.62725 6.5 6.75252 6.47872 6.8677 6.43762C6.98287 6.39652 7.08523 6.33657 7.16774 6.26188L12.2868 1.626C12.7753 1.1835 12.3703 0.5 11.6195 0.5H1.37997C0.629216 0.5 0.224175 1.1835 0.71418 1.626Z"/>
                                            </svg>
                                        </button>
                                        {collapsedWallets.map((wallet) => (
                                            <WalletLink
                                                src={wallet.adapter.icon}
                                                key={wallet.adapter.name}
                                                name={wallet.adapter.name}
                                                handleClick={event =>
                                                    handleWalletClick(event, wallet.adapter.name)
                                                }
                                            />
                                        ))}
                                    </>
                                ) : null}
                            </>}
                    </div>
                    <div>
                        <h2 className="text-base font-semibold sm:text-lg">
                            Don&apos;t have a wallet?
                        </h2>
                        <p className="mt-2 text-sm sm:text-base">
                            You can create a TipLink wallet using your Google account.
                        </p>
                        {tipLinkWallet && (
                            <button
                                onClick={e => handleWalletClick(e, tipLinkWallet?.adapter.name)}
                                className="mx-auto mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-white py-2 text-sm text-black sm:w-[80%] sm:text-base"
                            >
                                <Image
                                    src="/google.png"
                                    alt="google logo"
                                    width={30}
                                    height={30}
                                    className="w-[20px] sm:w-[30px]"
                                />
                                Create Tiplink Wallet
                            </button>
                        )}
                    </div>
                </div>
            </div>,
            portal,
        )
    );
};

export default Modal;

interface WalletLinkOption {
    src: string;
    name: string;
    handleClick: (event: MouseEvent) => void;
}

const WalletLink = ({src, name, handleClick}: WalletLinkOption) => {
    return (
        <button className="flex items-center gap-3" onClick={handleClick}>
            <Image
                src={src}
                alt={name}
                width={100}
                height={100}
                className="w-[35px] rounded"
            />
            {name}
        </button>
    );
};

import "@src/styles/globals.css";
import "@solana/wallet-adapter-react-ui/styles.css";

import {WalletAdapterNetwork} from "@solana/wallet-adapter-base";
import {ConnectionProvider, WalletProvider,} from "@solana/wallet-adapter-react";
import {
    AlphaWalletAdapter,
    AvanaWalletAdapter,
    BitgetWalletAdapter,
    BitpieWalletAdapter,
    CloverWalletAdapter,
    Coin98WalletAdapter,
    CoinbaseWalletAdapter,
    CoinhubWalletAdapter,
    FractalWalletAdapter,
    HuobiWalletAdapter,
    HyperPayWalletAdapter,
    KeystoneWalletAdapter,
    KrystalWalletAdapter,
    LedgerWalletAdapter,
    MathWalletAdapter,
    NekoWalletAdapter,
    NightlyWalletAdapter,
    NufiWalletAdapter,
    OntoWalletAdapter,
    ParticleAdapter,
    PhantomWalletAdapter,
    SafePalWalletAdapter,
    SaifuWalletAdapter,
    SalmonWalletAdapter,
    SkyWalletAdapter,
    SolflareWalletAdapter,
    SolongWalletAdapter,
    SpotWalletAdapter,
    TokenaryWalletAdapter,
    TokenPocketWalletAdapter,
    TorusWalletAdapter,
    TrezorWalletAdapter,
    TrustWalletAdapter,
    WalletConnectWalletAdapter,
    XDEFIWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import {clusterApiUrl} from "@solana/web3.js";
import ModalWrapper from "@src/components/ui/ModalWrapper";
import {Toaster} from "@src/components/ui/sonner";
import {ProfileProvider} from "@src/provider/ProfileProvider";
import {QuizProvider} from "@src/provider/QuizContext";
import {api} from "@src/utils/api";
import {COOKIE_KEY} from "@src/utils/constants/constants";
import {TipLinkWalletAdapter} from "@tiplink/wallet-adapter";
import {type AppType} from "next/app";
import {Inter} from "next/font/google";
import {useMemo} from "react";
import {Helmet} from "react-helmet";
import {Metadata} from "next";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
});
export const metadata: Metadata = {
    title: `SprintIQ`,
    metadataBase: new URL('https://staging.sprintiq.fun'),
    description: 'SprintIQ, Conquer Quizzes, Expand Knowledge, and Thrive in the Blockchain Revolution.',
    openGraph: {
        images: [
            {
                url: 'https://staging.sprintiq.fun/_next/image?url=%2Flogo.png&w=640&q=75'
            },
        ],
    }
};
const MyApp: AppType = ({Component, pageProps}) => {
    // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
    const network = WalletAdapterNetwork.Devnet;
    const {data} = api.auth.is_signed_in.useQuery()
    // You can also provide a custom RPC endpoint.
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);
    // TODO select wallets we're to use only 5
    const wallets = useMemo(
        () => [
            new AlphaWalletAdapter(),
            new AvanaWalletAdapter(),
            new BitgetWalletAdapter(),
            new BitpieWalletAdapter(),
            new CloverWalletAdapter(),
            new Coin98WalletAdapter(),
            new CoinbaseWalletAdapter(),
            new FractalWalletAdapter(),
            new HuobiWalletAdapter(),
            new KrystalWalletAdapter(),
            new NekoWalletAdapter(),
            new SafePalWalletAdapter(),
            new XDEFIWalletAdapter(),
            new SalmonWalletAdapter(),
            new SolflareWalletAdapter(),
            new HyperPayWalletAdapter(),
            new MathWalletAdapter(),
            new NufiWalletAdapter(),
            new ParticleAdapter(),
            new SkyWalletAdapter(),
            new TorusWalletAdapter(),
            new TokenPocketWalletAdapter(),
            new WalletConnectWalletAdapter({network, options: {}}),
            new TrustWalletAdapter(),
            new NightlyWalletAdapter(),
            new PhantomWalletAdapter(),
            new TokenaryWalletAdapter(),
            new OntoWalletAdapter(),
            new SpotWalletAdapter(),
            new SaifuWalletAdapter(),
            new SolongWalletAdapter(),
            new LedgerWalletAdapter(),
            new KeystoneWalletAdapter(),
            new TrezorWalletAdapter(),
            new CoinhubWalletAdapter(),
            new TipLinkWalletAdapter({
                title: "Sprint IQ",
                clientId: "d4fa2823-8404-417a-a5ad-4419e0d6c418",
                theme: "dark", // pick between "dark"/"light"/"system"
            }),
        ],
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [network],
    );

    const connectionErrorHandler = () => {
        // add toast here
    };
    return (
        <>
            <ConnectionProvider endpoint={endpoint}>
                <WalletProvider
                    wallets={wallets}
                    localStorageKey={COOKIE_KEY}
                    autoConnect
                    onError={connectionErrorHandler}

                >
                    <ModalWrapper>
                        <main
                            className={`min-h-screen bg-primary-700 text-white [background:linear-gradient(180deg,_#0e2615,_#0f0f0f)]`}
                            style={{
                                fontFamily: inter.style.fontFamily,
                            }}
                        >
                            <ProfileProvider>
                                <QuizProvider>
                                    <Component {...pageProps} />
                                    <Toaster/>
                                </QuizProvider>
                            </ProfileProvider>
                        </main>
                    </ModalWrapper>
                </WalletProvider>
            </ConnectionProvider>

            <Helmet>
                <meta name="author" content="Francis Codex"/>
                <meta
                    name="description"
                    content="Conquer Quizzes, Expand Knowledge, and Thrive in the Blockchain Revolution."
                />
                <meta
                    name="keywords"
                    content="SprintIQ, Connect Engage, Earn, Game, Web3, Solana, Learn, Learn and Earn"
                />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>

                <title>SprintIQ - Connect Engage, Earn</title>
                <meta property="og:url" content="https://sprintiq-landing.vercel.app"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="SprintIQ"/>
                <meta
                    property="og:description"
                    content="Conquer Quizzes, Expand Knowledge, and Thrive in the Blockchain Revolution."
                />
                <meta property="og:image" content="https://sprintiq.fun/og_image.jpg"/>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta
                    property="twitter:domain"
                    content="https://sprintiq-landing.vercel.app"
                />
                <meta
                    property="twitter:url"
                    content="https://sprintiq-landing.vercel.app"
                />
                <meta name="twitter:title" content="SprintIQ"/>
                <meta
                    name="twitter:description"
                    content="SprintIQ, Conquer Quizzes, Expand Knowledge, and Thrive in the Blockchain Revolution."
                />
                <meta
                    name="twitter:image"
                    content="https://sprintiq.fun/og_image.jpg"
                />

                <meta property="og:title" content="SprintIQ"/>
                <meta property="og:type" content="website"/>
                <meta name="theme-color" content="#187318"/>

                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/favicon/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon/favicon-16x16.png"
                />
                <link rel="icon" href="/favicon.ico" type="image/x-icon"></link>
                <link rel="manifest" href="/favicon/site.webmanifest"/>
                <meta name="msapplication-TileColor" content="#187318"/>
            </Helmet>
        </>
    );
};

export default api.withTRPC(MyApp);

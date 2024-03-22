import "@src/styles/globals.css";
import "@solana/wallet-adapter-react-ui/styles.css";

import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletDisconnectButton,
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
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
  UnsafeBurnerWalletAdapter,
  WalletConnectWalletAdapter,
  XDEFIWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import { api } from "@src/utils/api";
import { type AppType } from "next/app";
import { Inter } from "next/font/google";
import { useMemo } from "react";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});
const MyApp: AppType = ({ Component, pageProps }) => {
  // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
  const network = WalletAdapterNetwork.Devnet;

  // You can also provide a custom RPC endpoint.
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  console.log({ endpoint });
  // TODO select wallets we're to use only 5
  const wallets = useMemo(
    () => [
      new UnsafeBurnerWalletAdapter(),
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
      new WalletConnectWalletAdapter({ network, options: {} }),
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
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [network],
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <WalletMultiButton className="bg-white">Connect</WalletMultiButton>
          <WalletDisconnectButton />
          <main className={`font-sans ${inter.variable}`}>
            <Component {...pageProps} />
          </main>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default api.withTRPC(MyApp);

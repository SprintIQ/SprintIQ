import { AnchorProvider, Idl, Program, setProvider } from "@coral-xyz/anchor";
import { getAssociatedTokenAddress } from "@solana/spl-token";
//import { Sprintiq_Program } from "./sprintiq_program/sprintiq_program";
import {
  useAnchorWallet,
  useConnection,
  useWallet,
} from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import DashboardContainer from "@src/components/atoms/DashboardContainer";
import DashboardLayout from "@src/components/atoms/DashboardLayout";
import { type Routes } from "@src/utils/constants/constants";
import { type NextPage } from "next";
import React, { useEffect } from "react";

import idl from "../sprintiq_program/idl.json";

const usdcDevCoinMintAddress = new PublicKey(
  "Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr",
);

const firstWinner = new PublicKey(
  "Ac77n4aRSpJNwD8dLi3QhgDBHmaYP2VwG9Nm6Jduw8sz",
);
const secondWinner = new PublicKey(
  "3g6i4Yk4ghYf8tn8TyrpfWZUKuu6G7C22a8gpuSxuLzy",
);
const thirdWinner = new PublicKey(
  "FLhy8B5KLFTycE1bU3SA3wGS5P7pYibVsujYsnj1s7et",
);

interface DashboardProps {
  section: Routes;
}
const Dashboard: NextPage<DashboardProps> = props => {
  const { connection } = useConnection();
  const anchor_wallet = useAnchorWallet();
  const wallet = useWallet();
  console.log("anchor_wallet", anchor_wallet);
  //console.log("public key", wallet.publicKey?.toString());

  useEffect(() => {
    doSomething().catch(err => {
      console.error(err);
    });
  }, []);

  const doSomething = async () => {
    console.log("---working");
    if (wallet.publicKey && anchor_wallet) {
      const provider = new AnchorProvider(connection, anchor_wallet, {});
      setProvider(provider);
      console.log("---provider set up");
      const programId = new PublicKey(
        "J1s7LQHYsHS82cw983LA5kC17ZNwBJXRmgVpa6fcWxd",
      );
      const program = new Program(idl as Idl, programId);

      const gameCreatorAssociatedUsdcToken = await getAssociatedTokenAddress(
        usdcDevCoinMintAddress,
        wallet.publicKey,
      );

      const firstWinnerAssociatedUdcToken = await getAssociatedTokenAddress(
        usdcDevCoinMintAddress,
        firstWinner,
      );

      const secondWinnerAssociatedUdcToken = await getAssociatedTokenAddress(
        usdcDevCoinMintAddress,
        secondWinner,
      );
      const thirdWinnerAssociatedUdcToken = await getAssociatedTokenAddress(
        usdcDevCoinMintAddress,
        thirdWinner,
      );

      console.log("first winner ata", firstWinnerAssociatedUdcToken.toString());
      console.log(
        "second winner ata",
        secondWinnerAssociatedUdcToken.toString(),
      );
      console.log("third winner ata", thirdWinnerAssociatedUdcToken.toString());

      const [tokenAccountOwnerPda] = PublicKey.findProgramAddressSync(
        [Buffer.from("token_account_owner_pda"), wallet.publicKey.toBuffer()],
        programId,
      );

      const [tokenVault] = PublicKey.findProgramAddressSync(
        [
          Buffer.from("sprint_iq_token_vault"),
          usdcDevCoinMintAddress.toBuffer(),
          wallet.publicKey.toBuffer(),
        ],
        programId,
      );

      console.log("TokenAccountOwnerPda: ", tokenAccountOwnerPda.toString());

      console.log("VaultAccount: ", tokenVault.toString());

      const confirmOptions = {
        skipPreflight: true,
      };

      const txHash = await program.methods
        .initialize()
        .accounts({
          tokenAccountOwnerPda: tokenAccountOwnerPda,
          vaultTokenAccount: tokenVault,
          mintOfTokenBeingSent: usdcDevCoinMintAddress,
          signer: wallet.publicKey,
        })
        .rpc(confirmOptions);

      console.log(`Initialize`);
      await logTransaction(txHash);
    }
  };

  async function logTransaction(txHash: string) {
    const { blockhash, lastValidBlockHeight } =
      await connection.getLatestBlockhash();

    await connection.confirmTransaction({
      blockhash,
      lastValidBlockHeight,
      signature: txHash,
    });

    console.log(
      `Solana Explorer: https://explorer.solana.com/tx/${txHash}?cluster=devnet`,
    );
  }

  return (
    <DashboardLayout>
      <DashboardContainer currentSection={props.section} />
      <div className=" h-40 w-full bg-white "></div>
    </DashboardLayout>
  );
};

Dashboard.getInitialProps = async ctx => {
  const { section } = ctx.query as { section: Routes };
  return { section };
};

export default Dashboard;

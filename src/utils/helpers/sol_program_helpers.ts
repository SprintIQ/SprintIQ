/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import {
  AnchorProvider,
  BN,
  type Idl,
  Program,
  type Provider,
  setProvider,
} from "@coral-xyz/anchor";
import {
  getAccount,
  getAssociatedTokenAddress,
  getMint,
  getMultipleAccounts,
} from "@solana/spl-token";
import { type SignerWalletAdapterProps } from "@solana/wallet-adapter-base";
import type { AnchorWallet } from "@solana/wallet-adapter-react";
import { type AccountMeta, type Connection, PublicKey } from "@solana/web3.js";
import { toast } from "sonner";

type WalletAddressesAndPercentages = {
  wallet_address: string | undefined;
  percentage: number;
};

import idl from "../../sprintiq_program/idl.json";
import { getOrCreateAssociatedTokenAccount } from "./getOrCreateAssociatedAccount";

const usdcDevCoinMintAddress = new PublicKey(
  "Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr",
);

export const sendFunds = async (
  publicKey: PublicKey,
  anchor_wallet: AnchorWallet,
  connection: Connection,
  amount: string,
) => {
  console.log("---working");

  const mintInfo = await getMint(connection, usdcDevCoinMintAddress);
  const mintDecimals = Math.pow(10, mintInfo.decimals);
  console.log("mintDecimals", mintDecimals);
  if (publicKey && anchor_wallet) {
    const provider = new AnchorProvider(connection, anchor_wallet, {});
    setProvider(provider);
    console.log("---provider set up");
    const programId = new PublicKey(
      "J1s7LQHYsHS82cw983LA5kC17ZNwBJXRmgVpa6fcWxd",
    );
    console.log(programId);
    const program = new Program(idl as unknown as Idl, programId);
    console.log("here");

    const gameCreatorAssociatedUsdcToken = await getAssociatedTokenAddress(
      usdcDevCoinMintAddress,
      publicKey,
    );

    const [tokenAccountOwnerPda] = PublicKey.findProgramAddressSync(
      [publicKey.toBuffer().subarray(0, 3)],
      programId,
    );

    const [tokenVault] = PublicKey.findProgramAddressSync(
      [
        usdcDevCoinMintAddress.toBuffer().subarray(0, 3),
        publicKey.toBuffer().subarray(0, 3),
      ],
      programId,
    );

    console.log("TokenAccountOwnerPda: ", tokenAccountOwnerPda.toString());

    console.log("VaultAccount: ", tokenVault.toString());

    const confirmOptions = {
      skipPreflight: true,
    };
    //Initialization transaction
    const txHash = await program.methods
      .initAndSendFunds(new BN(parseInt(amount) * mintDecimals))
      .accounts({
        tokenAccountOwnerPda: tokenAccountOwnerPda,
        vaultTokenAccount: tokenVault,
        senderTokenAccount: gameCreatorAssociatedUsdcToken,
        mintOfTokenBeingSent: usdcDevCoinMintAddress,
        signer: publicKey,
      })
      .rpc(confirmOptions);

    console.log(`Initialize`);
    await logTransaction(txHash, connection);
    console.log(`Vault initialized.`);
    let tokenAccountInfo = await getAccount(
      connection,
      gameCreatorAssociatedUsdcToken,
    );
    console.log("Owned token amount: " + tokenAccountInfo.amount);
    tokenAccountInfo = await getAccount(connection, tokenVault);
    console.log(
      "Vault token amount: " + tokenAccountInfo.amount / BigInt(mintDecimals),
    );
  }
};
export const sendFundsToPlayers = async (
  publicKey: PublicKey,
  anchor_wallet: AnchorWallet,
  connection: Connection,
  walletAddressesAndPercentages: WalletAddressesAndPercentages[],
  signTransaction: SignerWalletAdapterProps["signTransaction"],
) => {
  console.log("---working");
  const mintInfo = await getMint(connection, usdcDevCoinMintAddress);
  const mintDecimals = Math.pow(10, mintInfo.decimals);
  console.log("mintDecimals", mintDecimals);
  if (publicKey && anchor_wallet) {
    const provider = new AnchorProvider(connection, anchor_wallet, {});
    setProvider(provider);
    console.log("---provider set up");
    const programId = new PublicKey(
      "J1s7LQHYsHS82cw983LA5kC17ZNwBJXRmgVpa6fcWxd",
    );
    const program = new Program(idl as unknown as Idl, programId);
    console.log("here");

    const [tokenAccountOwnerPda] = PublicKey.findProgramAddressSync(
      [Buffer.from("token_account_owner_pda"), publicKey.toBuffer()],
      programId,
    );

    const [tokenVault] = PublicKey.findProgramAddressSync(
      [
        Buffer.from("sprint_iq_token_vault"),
        usdcDevCoinMintAddress.toBuffer(),
        publicKey.toBuffer(),
      ],
      programId,
    );

    console.log("TokenAccountOwnerPda: ", tokenAccountOwnerPda.toString());

    console.log("VaultAccount: ", tokenVault.toString());

    const confirmOptions = {
      skipPreflight: true,
    };

    const tokenAddresses: PublicKey[] = [];
    const percentages: number[] = [];

    // Iterate over the array of wallet addresses and percentages
    for (const [index, { wallet_address, percentage }] of Object.entries(
      walletAddressesAndPercentages,
    )) {
      // Get the associated token address for each wallet address
      if (wallet_address) {
        const walletAddress = new PublicKey(wallet_address);

        const tokenAddress = await getOrCreateAssociatedTokenAccount(
          connection,
          publicKey,
          usdcDevCoinMintAddress,
          walletAddress,
          signTransaction,
          parseInt(index),
        );

        // Store the token address and percentage
        tokenAddresses.push(tokenAddress.address);
        percentages.push(percentage);

        console.log(
          `Wallet address: ${wallet_address}, Token address: ${tokenAddress.address.toString()}`,
        );
      }
    }

    console.log("Token Addresses:", tokenAddresses.toString());
    console.log("Percentages:", percentages);

    const remainingAccounts: AccountMeta[] = [];

    for (const address of tokenAddresses) {
      const publicKey = new PublicKey(address.toString());
      const accountMeta: AccountMeta = {
        pubkey: publicKey,
        isWritable: true, // Adjust as needed
        isSigner: false, // Adjust as needed
      };
      remainingAccounts.push(accountMeta);
    }
    console.log("percentages", Buffer.from(percentages));
    toast("Now we are sending to funds to all the winners account");
    //send funds to winners transaction
    const txHash = await program.methods
      .sendFundsToPlayers(Buffer.from(percentages))
      .accounts({
        tokenAccountOwnerPda: tokenAccountOwnerPda,
        vaultTokenAccount: tokenVault,
        mintOfTokenBeingSent: usdcDevCoinMintAddress,
        signer: publicKey,
      })
      //.signers([pg.wallet.keypair])
      .remainingAccounts(remainingAccounts)
      .rpc(confirmOptions);

    console.log(`Transfer tokens to winners`);
    await logTransaction(txHash, connection);
    const tokenAccountInfo = await getAccount(connection, tokenVault);
    console.log(
      "Vault token amount: " + tokenAccountInfo.amount / BigInt(mintDecimals),
    );

    const tokenAccountsInfo = await getMultipleAccounts(
      connection,
      tokenAddresses,
    );
    tokenAccountsInfo.map(account => {
      console.log(
        `${account.address.toString()}, ${account.amount / BigInt(mintDecimals)}`,
      );
    });
  }
};

async function logTransaction(txHash: string, connection: Connection) {
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

//This is just a function that generates random numbers for a game
export function generateGameCode(length: number): string {
  const characters = "0123456789";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

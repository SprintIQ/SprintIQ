import {
  AnchorProvider,
  BN,
  type Idl,
  Program,
  setProvider,
  Provider,
} from "@coral-xyz/anchor";
import { getAccount, getAssociatedTokenAddress } from "@solana/spl-token";
import type { AnchorWallet } from "@solana/wallet-adapter-react";
import { type Connection, PublicKey } from "@solana/web3.js";

import idl from "../../sprintiq_program/idl.json";

const decimals = 9;
const mintDecimals = Math.pow(10, decimals);

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
  if (publicKey && anchor_wallet) {
    const provider = new AnchorProvider(connection, anchor_wallet, {});
    setProvider(provider);
    console.log("---provider set up");
    const programId = new PublicKey(
      "J1s7LQHYsHS82cw983LA5kC17ZNwBJXRmgVpa6fcWxd",
    );
    const program = new Program(idl as unknown as Idl, programId as unknown as Provider);

    const gameCreatorAssociatedUsdcToken = await getAssociatedTokenAddress(
      usdcDevCoinMintAddress,
      publicKey,
    );

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
    //Initialization transaction
    const txHash = await program.methods
      .initAndSendFunds(new BN(amount))
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
    console.log("Vault token amount: " + tokenAccountInfo.amount);
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

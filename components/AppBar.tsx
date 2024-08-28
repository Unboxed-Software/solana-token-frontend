"use client";
import { FC } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import styles from "../styles/Home.module.css";

const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false }
);

export const AppBar: FC = () => {
  return (
    <div className={styles.AppHeader}>
      <Image src="/solanaLogo.png" alt="solana logo" height={30} width={200} />

      <span>Solana Token Mint</span>
      <WalletMultiButtonDynamic />
    </div>
  );
};

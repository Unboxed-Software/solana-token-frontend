import styles from "./styles/Home.module.css";
import { BalanceDisplay } from "./components/BalanceDisplay";
import { CreateMintForm } from "./components/CreateMint";
import { CreateTokenAccountForm } from "./components/CreateTokenAccount";
import { MintToForm } from "./components/MintToForm";

export default function Home() {
  return (
    <main className={styles.AppBody}>
      <BalanceDisplay />
      <CreateMintForm />
      <CreateTokenAccountForm />
      <MintToForm />
    </main>
  );
}

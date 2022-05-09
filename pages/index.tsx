import { NextPage } from "next";
import styles from "../styles/Home.module.css";
import WalletContextProvider from "../components/WalletContextProvider";
import { AppBar } from "../components/AppBar";
import { BalanceDisplay } from "../components/BalanceDisplay";
import { SendSolForm } from "../components/SendSolForm";
import { CreateMintForm } from "../components/CreateMint";
import Head from "next/head";

const Home: NextPage = (props) => {
  return (
    <div className={styles.App}>
      <Head>
        <title>Token Program</title>
        <meta name="description" content="Token Program" />
      </Head>
      <WalletContextProvider>
        <AppBar />
        <div className={styles.AppBody}>
          <BalanceDisplay />
          {/* <SendSolForm /> */}
          <CreateMintForm />
        </div>
      </WalletContextProvider>
    </div>
  );
};

export default Home;

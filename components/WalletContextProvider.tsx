
import { FC, ReactNode } from "react";
import * as web3 from '@solana/web3.js'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';
require('@solana/wallet-adapter-react-ui/styles.css');

const WalletContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const wallet = new PhantomWalletAdapter()

    const endpoint = web3.clusterApiUrl('devnet')

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={[wallet]}>
                <WalletModalProvider>
                    { children }
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    )
}

export default WalletContextProvider
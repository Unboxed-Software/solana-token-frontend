import { BalanceDisplay } from '../components/tokenaccount/BalanceDisplay';
import { CreateMintForm } from '../components/tokenaccount/CreateMint';
import { CreateTokenAccountForm } from '../components/tokenaccount/CreateTokenAccount';
import { MintToForm } from '../components/tokenaccount/MintToForm';

export default function Page() {
  return (
    <>
      <BalanceDisplay />
      <CreateMintForm />
      <CreateTokenAccountForm />
      <MintToForm />
    </>
  );
}

import { ethers } from 'ethers';

import logo from '../../assets/ihor.png';
import { Account, ConnectBtn, Container, Logo } from './styled';

export type NavBarProps = {
  account: string;
  setAccount: any;
};

const NavBar = ({ account, setAccount }: NavBarProps) => {
  const isConnected = account.length > 0;

  const connectWallet = async () => {
    console.log('connectWalletClick');
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const accounts = await provider.send('eth_requestAccounts', []);
    setAccount(accounts[0]);
  };

  return (
    <Container>
      <Logo>
        <img src={logo} alt="logo" width={48} height={48} />
        <div>CryptoIhor</div>
      </Logo>
      {isConnected ? (
        <Account>{`${account.slice(0, 6)}..${account.slice(-4)}`}</Account>
      ) : (
        <ConnectBtn onClick={() => connectWallet()}>Connect wallet</ConnectBtn>
      )}
    </Container>
  );
};

export default NavBar;

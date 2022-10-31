import { ethers } from 'ethers';
import { useEffect, useState } from 'react';

import NavBar from './components/NavBar';
import MintSection from './components/MintSection';
import { IhorObject } from './components/common/styled';
import { LOCAL_STORAGE_KEYS, SUPPORTED_NETWORKS } from './constants';

const App = () => {
  const [account, setAccount] = useState('');
  const [isChainValid, setIsChainValid] = useState(false);

  useEffect(() => {
    const checkConnection = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const accounts = await provider.send('eth_accounts', []);
      const { chainId } = await provider.getNetwork();

      if (accounts.length > 0) {
        setAccount(accounts[0]);
        localStorage.setItem(LOCAL_STORAGE_KEYS.CONNECTED_ADDRESS, accounts[0]);
        setIsChainValid(ethers.utils.hexValue(chainId) === SUPPORTED_NETWORKS.GOERLI.chainId);
      }
    };

    checkConnection();
    window.ethereum?.on('accountsChanged', checkConnection);
    return () => window.ethereum?.removeListener('accountsChanged', checkConnection);
  }, []);

  useEffect(() => {
    const handleChainChanged = (chainId: string) => setIsChainValid(chainId === SUPPORTED_NETWORKS.GOERLI.chainId);
    window.ethereum.on('chainChanged', handleChainChanged);
    return () => window.ethereum.removeListener('chainChanged', handleChainChanged);
  }, []);

  return (
    <div className="App">
      <NavBar account={account} setAccount={setAccount} />
      <MintSection account={account} isChainValid={isChainValid} />
      <IhorObject />
    </div>
  );
};

export default App;

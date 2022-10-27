import { ethers } from 'ethers';
import { useEffect, useState } from 'react';

import NavBar from './components/NavBar';
import MintSection from './components/MintSection';

import { LOCAL_STORAGE_KEYS, SUPPORTED_NETWORKS } from './constants';

const App = () => {
  const [account, setAccount] = useState('');

  useEffect(() => {
    const checkConnection = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const accounts = await provider.send('eth_accounts', []);
      const chainId = SUPPORTED_NETWORKS.GOERLI.chainId;

      if (accounts.length > 0) {
        setAccount(accounts[0]);
        localStorage.setItem(LOCAL_STORAGE_KEYS.CONNECTED_ADDRESS, accounts[0]);
      }

      if (window.ethereum.networkVersion !== chainId) {
        try {
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: ethers.utils.hexValue(5) }],
          });
        } catch (err: any) {
          // This error code indicates that the chain has not been added to MetaMask
          if (err.code === 4902) {
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [SUPPORTED_NETWORKS.GOERLI],
            });
          }
        }
      }
    };

    checkConnection();
    window.ethereum?.on('accountsChanged', checkConnection);
    return () => window.ethereum?.removeListener('accountsChanged', checkConnection);
  }, []);

  return (
    <div className="App">
      <NavBar account={account} setAccount={setAccount} />
      <MintSection account={account} />
    </div>
  );
};

export default App;

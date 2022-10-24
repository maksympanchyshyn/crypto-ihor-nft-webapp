import { ethers } from 'ethers';
import { useEffect, useState } from 'react';

import NavBar from './components/NavBar';
import MintSection from './components/MintSection';

import { LOCAL_STORAGE_KEYS } from './constants';

const App = () => {
  const [account, setAccount] = useState('');

  useEffect(() => {
    const checkConnection = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const accounts = await provider.send('eth_accounts', []);

      if (accounts.length > 0) {
        setAccount(accounts[0]);
        localStorage.setItem(LOCAL_STORAGE_KEYS.CONNECTED_ADDRESS, accounts[0]);
      }
    };

    checkConnection();
    window.ethereum?.on('accountsChanged', checkConnection);
    return () => window.ethereum?.removeListener('accountsChanged', checkConnection);
  }, []);

  return (
    <div className="App">
      <NavBar account={account} setAccount={setAccount} />
      <MintSection />
    </div>
  );
};

export default App;

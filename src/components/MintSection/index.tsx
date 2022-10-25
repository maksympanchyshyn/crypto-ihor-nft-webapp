import { useState } from 'react';
import { ethers, BigNumber } from 'ethers';

import { Container, MintBtn } from './styled';
import { CONTRACT_ADDRESS } from '../../constants';
import CryptoIhorNFT from '../../CryptoIhorNFT.json';

const MintSection = () => {
  const [mintAmount, setMintAmount] = useState(1);

  const handleMint = async () => {
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(CONTRACT_ADDRESS, CryptoIhorNFT.abi, signer);
        await contract.mint(BigNumber.from(mintAmount));
      }
    } catch (err) {
      console.log('error:', err);
    }
  };

  return (
    <Container>
      <MintBtn onClick={handleMint}>Mint</MintBtn>
    </Container>
  );
};

export default MintSection;

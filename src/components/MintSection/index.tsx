import { useEffect, useState } from 'react';
import { ethers, BigNumber } from 'ethers';

import {
  ChangeAmountBtn,
  Container,
  Description,
  ErrorMessage,
  HeaderText,
  MintAmountContainer,
  MintAmountInput,
  MintBtn,
  MintProgress,
} from './styled';
import { CONTRACT_ADDRESS, SUPPORTED_NETWORKS } from '../../constants';
import CryptoIhorNFT from '../../CryptoIhorNFT.json';

export type MintSectionProps = {
  account: string;
  isChainValid: boolean;
};

const MintSection = ({ account, isChainValid }: MintSectionProps) => {
  const [mintAmount, setMintAmount] = useState(1);
  const [mintedAmount, setMintedAmount] = useState(0);

  const isConnected = account.length > 0;

  const handleMint = async () => {
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(CONTRACT_ADDRESS, CryptoIhorNFT.abi, signer);
        await contract.mint(BigNumber.from(mintAmount), {
          value: ethers.utils.parseEther((0.02 * mintAmount).toString()),
        });
      }
    } catch (err) {
      console.log('error:', err);
    }
  };

  useEffect(() => {
    (async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(CONTRACT_ADDRESS, CryptoIhorNFT.abi, provider);
      const amount = await contract.totalSupply();
      setMintedAmount(Number(amount));
    })();
  }, []);

  const switchChain = async () => {
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: SUPPORTED_NETWORKS.GOERLI.chainId }],
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
  };

  return (
    <Container>
      <HeaderText>CryptoIhor NFT</HeaderText>
      <Description>
        {`Collection of 10,000 Ihor NFTs is finally here.\nMint your NFT now and join IhorVerse with us.\nPrice - 0.02 ETH. Max per wallet - 3`}
      </Description>

      {isConnected && isChainValid && (
        <>
          <MintProgress>Mint progress: {mintedAmount}/10, 000</MintProgress>
          <MintAmountContainer>
            <ChangeAmountBtn onClick={() => setMintAmount(mintAmount - 1)} disabled={mintAmount === 1}>
              -
            </ChangeAmountBtn>
            <MintAmountInput value={mintAmount} disabled />
            <ChangeAmountBtn onClick={() => setMintAmount(mintAmount + 1)} disabled={mintAmount === 3}>
              +
            </ChangeAmountBtn>
          </MintAmountContainer>

          <MintBtn onClick={handleMint}>Mint</MintBtn>
        </>
      )}
      {!isConnected && <ErrorMessage>Connect your wallet to be able to mint</ErrorMessage>}
      {isConnected && !isChainValid && <ErrorMessage>Wrong Network</ErrorMessage>}
    </Container>
  );
};

export default MintSection;

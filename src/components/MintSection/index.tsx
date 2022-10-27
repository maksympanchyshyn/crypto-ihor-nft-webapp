import { useState } from 'react';
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
} from './styled';
import { CONTRACT_ADDRESS } from '../../constants';
import CryptoIhorNFT from '../../CryptoIhorNFT.json';

export type MintSectionProps = {
  account: string;
};

const MintSection = ({ account }: MintSectionProps) => {
  const [mintAmount, setMintAmount] = useState(1);

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

  return (
    <Container>
      <HeaderText>CryptoIhor NFT</HeaderText>
      <Description>
        {`Collection of 10,000 Ihor NFTs is finally here.\nMint your NFT now and join IhorVerse with us.\nPrice - 0.02 ETH. Max per wallet - 3`}
      </Description>
      <MintAmountContainer>
        <ChangeAmountBtn>-</ChangeAmountBtn>
        <MintAmountInput />
        <ChangeAmountBtn>+</ChangeAmountBtn>
      </MintAmountContainer>
      {account.length > 0 ? (
        <MintBtn onClick={handleMint}>Mint</MintBtn>
      ) : (
        <ErrorMessage>Connect your wallet to be able to mint</ErrorMessage>
      )}
    </Container>
  );
};

export default MintSection;

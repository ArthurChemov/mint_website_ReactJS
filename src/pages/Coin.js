import React, { useState } from 'react';
import { ethers, BigNumber} from 'ethers';
import labradorsNFT from '../LabradorsNFT.json';
import './Coin.css';

const labradorsNFTAddress = "0xE990AA8EDBB52Dba7dd35EEC7bef185872cb4C81";

const Coin = ({ accounts, setAccounts}) => {
  const [mintAmount, setMintAmount] = useState(1);
  const isConnected = Boolean(accounts[0]);

  async function handleMint() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        labradorsNFTAddress,
        labradorsNFT.abi,
        signer
      );
      try {
        const response = await contract.mint(BigNumber.from(mintAmount), {
          value: ethers.utils.parseEther((0.02 * mintAmount).toString()),
        });
        console.log('response: ', response);
      } catch (err) {
        console.log("error: ", err)
      }
    }
  }
  const handleDecrement = () => {
    if(mintAmount <= 1) return;
      setMintAmount(mintAmount - 1);
  }

  const handleIncrement = () => {
    if(mintAmount >= 3) return;
    setMintAmount(mintAmount + 1);
  }

  return (
    <section className='page'>
      <h3>
        Dear, community, let's make owr own bullish and raise the value of our coin!
      </h3>
      {isConnected ? (
        <div className='connected'>
          <div>
            <button className='btn' onClick = {handleDecrement}>-</button>
              <input readOnly type = "number" value = {mintAmount}/>
            <button className='btn' onClick = {handleIncrement}>+</button>
          </div>
          <button className='btn' onClick = {handleMint}>MINT NOW</button>
        </div>
        ) : (
          <p className='connecting'>
            You must be connected to Mint.
          </p>
        )}
    </section>
  );
};

export default Coin;

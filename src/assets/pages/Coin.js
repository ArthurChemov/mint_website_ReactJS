import React, { useState } from 'react';
import { ethers, BigNumber} from 'ethers';
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import labradorsNFT from '../LabradorsNFT.json';

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
    <Flex justify="center" align="center" height="100vh" paddingBottom="150px">
      <Box width="520px">
        <div>
          <Text fontSize="24px" textShadow="0 5px #000000">
            Dear, community, let's make owr own bullish and raise the value of our coin!
          </Text>
        </div>
        {isConnected ? (
          <div>
            <Flex align="center" justify="center">
              <Button
                backgroundColor="#ff0000"
                borderRadius="15px"
                boxShadow="0px 2px 2px 1px #0F0F0F"
                color="white"
                fontFamily="inherit"
                padding="15px"
                marginTop="10px"
                onClick = {handleDecrement}
              >-</Button>
              <Input
                readOnly
                fontFamily="inherit"
                width="100px"
                height="40px"
                textAlign="center"
                paddingLeft="19px"
                marginTop="10px"
                type = "number"
                value = {mintAmount}/>
              <Button
                backgroundColor="#ff0000"
                borderRadius="15px"
                boxShadow="0px 2px 2px 1px #0F0F0F"
                color="white"
                fontFamily="inherit"
                padding="15px"
                marginTop="10px"
                onClick = {handleIncrement}
              >+</Button>
            </Flex>
            <Button
              backgroundColor="#ff0000"
              borderRadius="15px"
              boxShadow="0px 2px 2px 1px #0F0F0F"
              color="white"
              fontFamily="inherit"
              padding="15px"
              marginTop="10px"
              onClick = {handleMint}
            >MINT NOW</Button>
          </div>
        ) : (
          <Text
            color="#ff0000"
            marginTop="70px"
            fontSize="30px"
            letterSpacing="-5.5%"
            fontFamily="VT323"
            textShadow="0 3px #000000"
          >You must be connected to Mint.
          </Text>
        )}
    </Box>
  </Flex>
  );
};

export default Coin;

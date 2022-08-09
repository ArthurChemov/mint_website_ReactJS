import React from 'react';
import { Box, Flex, Text } from "@chakra-ui/react";
import nft1 from '../nft/nft1.png';
import nft2 from '../nft/nft2.png';
import nft3 from '../nft/nft3.png';

function NFTs() {
  return (
    <Flex justify="center" height="100vh" paddingBottom="150px" padding="30px 0">
      <Box width="610px">
        <div>
          <Text fontSize="30px" textShadow="0 5px #000000">
            NFTs
          </Text>
        </div>
        <div>
          <Flex margin="50px">
            <img src={nft1} weight="150px" height="150px" alt=""/>
            <img src={nft2} weight="150px" height="150px" alt=""/>
            <img src={nft3} weight="150px" height="150px" alt=""/>
          </Flex>
        </div>
        <div>
          <button className='btn'>Mint now</button>
          <button className='btn'>Mint now</button>
          <button className='btn'>Mint now</button>
        </div>
      </Box>
    </Flex>
  );
}

export default NFTs;

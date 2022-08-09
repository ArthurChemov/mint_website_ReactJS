import React from 'react';
import { Box, Flex, Text } from "@chakra-ui/react";

function Home() {
  return (
    <Flex justify="center" align="center" height="100vh" paddingBottom="150px">
      <Box width="520px">
        <div>
          <Text fontSize="48px" textShadow="0 5px #000000">
            Labradors
          </Text>
          <Text
            fontSize="30px"
            letterSpacing="-5.5%"
            fontFamily="VT323"
            textShadow="0 2px 2px #000000"
          >The best dogs in the World! These dogs will save humanity! Mint labradors or you shall know pain.
          </Text>
        </div>
      </Box>
    </Flex>
  );
}

export default Home;

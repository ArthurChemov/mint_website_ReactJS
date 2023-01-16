import React from 'react';
import { Box, Flex, Link } from "@chakra-ui/react";

function Support() {
  return (
    <Flex justify="center" align="center" textAlign="left" height="100vh" paddingBottom="150px">
      <Box width="600px" fontSize="24px" textShadow="0 5px #000000">
        <div><Link cursor="pointer">• History of Labrchain</Link></div>
        <div><Link cursor="pointer">• Roadmap and White paper</Link></div>
        <div><Link cursor="pointer">• Documentation</Link></div>
        <div><Link cursor="pointer">• Updates</Link></div>
        <div><Link cursor="pointer">• Contacts</Link></div>
      </Box>
    </Flex>
  );
}

export default Support;

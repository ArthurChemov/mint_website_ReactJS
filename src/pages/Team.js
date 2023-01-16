import React from 'react';
import { Box, Flex, Text } from "@chakra-ui/react";

function Team() {
  return (
    <Flex justify="center" align="center" height="100vh" paddingBottom="150px">
      <Box width="600px">
        <div>
          <Text fontSize="30px" textShadow="0 5px #000000">
            Team
          </Text>
        </div>
        <div>
          Artur Chemov. Student of V. N. Karazin Kharkiv National University.
        </div>
      </Box>
    </Flex>
  );
}

export default Team;

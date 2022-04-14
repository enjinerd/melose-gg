import React from 'react';
import { Box, useColorModeValue, Image, Text, Flex } from '@chakra-ui/react';

const NotFoundMsg = () => {
  const bg = useColorModeValue('white', 'gray.800');
  return (
    <Box pos="relative" overflow="hidden" bg={bg} mt={5}>
      <Box maxW="7xl" mx="auto">
        <Flex align="center" justify="center" flexDir="column">
          <Box pos="relative" maxW={{ lg: '2xl' }} w={{ lg: 'full' }} bg={bg} border="solid 1px transparent">
            <Image src="404.svg" />
          </Box>

          <Text fontSize="xl" fontWeight="bold" mt={4}>
            Oops! Page not found.
          </Text>
          <Text fontSize="lg" mt={4}>
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default NotFoundMsg;

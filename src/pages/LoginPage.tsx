import { Box, chakra, Flex, Link, Stack, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

import LandingLayout from '../components/layouts/LandingLayout';

export default function LoginPage() {
  /* ENV and API */
  const SPOTIFY_API_KEY = process.env.REACT_APP_SPOTIFY_KEY;
  const redirect_uri = 'http://localhost:3000/dashboard';
  const scopes = 'playlist-modify-private';

  return (
    <LandingLayout>
      <Flex justify="center" bg={useColorModeValue('white', 'gray.800')} w="full">
        <Box
          w={{ base: 'full', md: '75%', lg: '50%' }}
          px={4}
          py={20}
          textAlign={{ base: 'left', md: 'center' }}>
          <chakra.span
            fontSize={{ base: '3xl', sm: '4xl' }}
            fontWeight="extrabold"
            letterSpacing="tight"
            lineHeight="shorter"
            color={useColorModeValue('gray.900', 'gray.100')}
            mb={6}>
            <chakra.span display="block">Ready to dive in?</chakra.span>
            <chakra.span
              display="block"
              color={useColorModeValue('brand.600', 'gray.500')}>
              Create your playlist today.
            </chakra.span>
          </chakra.span>
          <Stack
            justifyContent={{ base: 'left', md: 'center' }}
            direction={{ base: 'column', sm: 'row' }}
            spacing={2}
            mt={2}>
            <Box display="inline-flex" rounded="md" shadow="md">
              <Link
                href={`https://accounts.spotify.com/authorize?client_id=${SPOTIFY_API_KEY}&response_type=token&redirect_uri=${redirect_uri}&scope=${scopes}`}
                w="full"
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                px={5}
                py={3}
                border="solid transparent"
                fontWeight="bold"
                rounded="md"
                color={useColorModeValue('white', 'gray.200')}
                bg={useColorModeValue('brand.600', 'brand.500')}
                _hover={{
                  bg: useColorModeValue('brand.700', 'brand.600'),
                }}>
                Login with Spotify
              </Link>
            </Box>
          </Stack>
        </Box>
      </Flex>
    </LandingLayout>
  );
}

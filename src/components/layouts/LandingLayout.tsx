import { Container, Flex } from '@chakra-ui/react';
import React from 'react';

import Footer from './Footer';
import Header from './Header';

export default function LandingLayout(props: React.PropsWithChildren<{}>) {
  return (
    <Flex direction="column" align="center" m="0 auto" {...props}>
      <Header />
      <Container minH="80vh" minW="fit-content" position="static" {...props}>
        {props.children}
      </Container>
      <Footer />
    </Flex>
  );
}

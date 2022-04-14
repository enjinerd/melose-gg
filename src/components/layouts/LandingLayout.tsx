import React from 'react';
import { Flex, Container } from '@chakra-ui/react';
import Header from './Header';
import Footer from './Footer';

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

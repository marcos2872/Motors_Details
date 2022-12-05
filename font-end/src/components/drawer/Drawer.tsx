import React from 'react';
import { Container, Link, MenuContainer, Text } from './drawerStyled';

function Drawer() {
  return (
    <MenuContainer>
      <Container>
        <Link href="http://www.bavaria-direct.co.za/scheme/calculator/" target="_blank">
          Homebuilt Electric Motors
        </Link>
        <Text> </Text>
      </Container>
    </MenuContainer>
  );
}

export default Drawer;

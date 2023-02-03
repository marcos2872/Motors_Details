import React from 'react';
import { Container, Link, MenuContainer, SectionTitle, Text, Title } from './drawerStyled';

function Drawer() {
  return (
    <MenuContainer>
      <SectionTitle>
        <Title>Links</Title>
      </SectionTitle>
      <Container>
        <Text>Site para ver enrolamento de motor:</Text>
        <Link href="http://www.bavaria-direct.co.za/scheme/calculator/" target="_blank">
          Homebuilt Electric Motors
        </Link>
      </Container>
      <Container>
        <Text>Meu canal no YouTube</Text>
        <Link href="https://www.youtube.com/channel/UCG3RUHMDhvvGFn60Vhk7Lhg" target="_blank">
          YouTube
        </Link>
      </Container>
    </MenuContainer>
  );
}

export default Drawer;

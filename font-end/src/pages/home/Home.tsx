import React, { useContext } from 'react';
import Cards from '../../components/cards/Cards';
import Drawer from '../../components/drawer/Drawer';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { Body, Title, SectionTitle, Container, Data } from './homeStyled';
import { Context } from '../../contexts';

function Home() {
  const { drawer } = useContext(Context);
  return (
    <Body>
      <Header />
      <Container>
        <Data>
          <SectionTitle>
            <Title>Motores</Title>
          </SectionTitle>
          <Cards />
        </Data>
        {drawer && <Drawer />}
      </Container>
      <Footer />
    </Body>
  );
}

export default Home;

import React from 'react';
import Cards from '../../components/cards/Cards';
import Drawer from '../../components/drawer/Drawer';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { Body, Container, Data } from './homeStyled';

function Home() {
  return (
    <Body>
      <Header />
      <Container>
        <Data>
          <Cards />
        </Data>
        <Drawer />
      </Container>
      <Footer />
    </Body>
  );
}

export default Home;

import React from 'react';
import Cards from '../../components/cards/Cards';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import getMotors from '../../services/getAllMotors';
import { Body, Title, SectionTitle } from './homeStyled';

function Home() {
  (() => {
    getMotors();
  })();
  return (
    <Body>
      <Header />
      <SectionTitle>
        <Title>Motores</Title>
      </SectionTitle>
      <Cards />
      <Footer />
    </Body>
  );
}

export default Home;

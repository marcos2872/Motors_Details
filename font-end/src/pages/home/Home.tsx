import React from 'react';
import Cards from '../../components/cards/Cards';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { Body, Title, SectionTitle } from './homeStyled';

function Home() {
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

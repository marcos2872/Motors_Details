import React, { useContext } from 'react';
import Cards from '../../components/cards/Cards';
import Drawer from '../../components/drawer/Drawer';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { Body, Title, SectionTitle } from './homeStyled';
import { Context } from '../../contexts';

function Home() {
  const { drawer } = useContext(Context);
  return (
    <Body>
      <Header />
      {drawer && <Drawer />}
      <SectionTitle>
        <Title>Motores</Title>
      </SectionTitle>
      <Cards />
      <Footer />
    </Body>
  );
}

export default Home;

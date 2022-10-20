import React from 'react';
import Header from '../../components/header/Header';
import { Body, Title, SectionTitle } from './homeStyled';

function Home() {
  return (
    <Body>
      <Header />
      <SectionTitle>
        <Title>Motores</Title>
      </SectionTitle>
    </Body>
  );
}

export default Home;

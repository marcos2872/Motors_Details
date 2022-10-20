import React from 'react';
import { Card, CardsContainer, Image, Text } from './cardsStyled';
import motors from '../../services/mokApi';

function Cards() {
  return (
    <CardsContainer>
      {motors.map((motor) => (
        <Card key={Math.random()}>
          <Image type="image" src={motor.images[0].url} />
          <Text>{motor.model}</Text>
        </Card>
      ))}
    </CardsContainer>
  );
}

export default Cards;

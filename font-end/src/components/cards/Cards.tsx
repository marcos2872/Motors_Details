/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardsContainer, Image, Text } from './cardsStyled';
import motors from '../../services/mokApi';

function Cards() {
  const navigate = useNavigate();

  return (
    <CardsContainer>
      {motors.map((motor) => (
        <Card key={Math.random()}>
          <Image
            type="image"
            src={motor.images[0].url}
            onClick={() => navigate(`motor/${motor._id}`)}
          />
          <Text onClick={() => navigate(`motor/${motor._id}`)}>{motor.model}</Text>
        </Card>
      ))}
    </CardsContainer>
  );
}

export default Cards;

import React from 'react';
import { useParams } from 'react-router-dom';
import { Body } from './motorStyled';

function Motor() {
  const { id } = useParams();

  return <Body />;
}

export default Motor;

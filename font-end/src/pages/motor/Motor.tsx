import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import mokApi from '../../services/mokApi';
import {
  Body,
  Contents,
  ImageB,
  ImageBravia,
  ImageM,
  ImagesMotor,
  MotorDetails,
  Text,
} from './motorStyled';

type motoType =
  | {
      _id: string;
      model: string;
      tension: number;
      magnets: number;
      poles: number;
      potency: string;
      wire: string;
      turns: number;
      'parallel-wire': number;
      'wire-length': string;
      images: {
        key: string;
        url: string;
      }[];
      video: string;
    }
  | undefined;

function Motor() {
  const [motor, Setmotor] = useState<motoType>({
    _id: '',
    model: '',
    tension: 0,
    magnets: 0,
    poles: 0,
    potency: '',
    wire: '',
    turns: 0,
    'parallel-wire': 0,
    'wire-length': '',
    images: [{ key: '', url: '' }],
    video: '',
  });
  const { id } = useParams();

  useEffect(() => {
    const respon = mokApi.find(({ _id }) => _id === id);
    Setmotor(respon);
  }, [id]);

  return (
    <Body>
      <Header />
      <Contents>
        <MotorDetails>
          <Text>Modelo: {motor?.model}</Text>
          <Text>Tensão: {motor?.tension}</Text>
          <Text>Imãs: {motor?.magnets}</Text>
          <Text>Polos: {motor?.poles}</Text>
          <Text>Potência: {motor?.potency}</Text>
          <Text>Fio: {motor?.wire}</Text>
          <Text>Fios paralelos: {motor?.['parallel-wire']}</Text>
          <Text>Comprimento: {motor?.['wire-length']}</Text>
          <Text>Voltas: {motor?.turns}</Text>
        </MotorDetails>
        <ImageB>{motor?.images.length !== 1 && <ImageBravia src={motor?.images[1].url} />}</ImageB>
      </Contents>
      <ImagesMotor>
        {motor?.images.map(({ url }, idex) => {
          if (idex !== 1) return <ImageM key={Math.random()} src={url} />;
          return null;
        })}
      </ImagesMotor>
      <Footer />
    </Body>
  );
}

export default Motor;

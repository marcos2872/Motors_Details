/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-underscore-dangle */
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardsContainer, Container, Image, SectionTitle, Text, Title } from './cardsStyled';
import getMotors from '../../services/getAllMotors';
import { Context } from '../../contexts';

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
    }[]
  | undefined;

function Cards() {
  const [motors, setMotors] = useState<motoType>([]);
  const navigate = useNavigate();
  const { search } = useContext(Context);

  const func = async () => {
    const allMotors = await getMotors();

    setMotors(allMotors);
  };

  useEffect(() => {
    func();
  }, []);

  useEffect(() => {
    if (search) {
      const motorsFilter = motors?.filter(({ model }) =>
        model.toLowerCase().includes(search.toLowerCase()),
      );

      setMotors(motorsFilter);
    }
    if (!search) {
      func();
    }
  }, [search]);

  return (
    <Container>
      <SectionTitle>
        <Title>Motores</Title>
      </SectionTitle>
      <CardsContainer>
        {motors?.map((motor) => (
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
    </Container>
  );
}

export default Cards;

// {
//   _id: "634eeb14f8713a80b635f707",
//   model: "fostons10",
//   tension: 48,
//   magnets: 30,
//   poles: 27,
//   potency: "800w",
//   wire: "24awg",
//   turns: 6,
//   "parallel-wire": 9,
//   "wire-length": "5.8m",
//   images: [
//     {
//         key: "eeac8a69f4d00dcfad00b19a5feea4fc-IMG_20221012_091237.jpg",
//         url: "https://motors-api-images.s3.us-east-1.amazonaws.com/eeac8a69f4d00dcfad00b19a5feea4fc-IMG_20221012_091237.jpg"
//     },
//     {
//       key: "a3f6263ba90d78aa7a2530adbd17bb83-Captura de tela de 2022-10-18 14-26-46.png",
//       url: "https://motors-api-images.s3.us-east-1.amazonaws.com/a3f6263ba90d78aa7a2530adbd17bb83-Captura%20de%20tela%20de%202022-10-18%2014-26-46.png"
//     },
//     {
//         key: "5fcb93ca4bac4cab57e628fbc14f4a19-IMG_20221012_091214.jpg",
//         url: "https://motors-api-images.s3.us-east-1.amazonaws.com/5fcb93ca4bac4cab57e628fbc14f4a19-IMG_20221012_091214.jpg"
//     },
//       {
//           key: "5f036ea63a140f9a540690d49806c50b-IMG_20221012_091221.jpg",
//           url: "https://motors-api-images.s3.us-east-1.amazonaws.com/5f036ea63a140f9a540690d49806c50b-IMG_20221012_091221.jpg"
//       },
//       {
//           key: "191d1b3faf7ab276beaf9939d6e90000-IMG_20221012_091301.jpg",
//           url: "https://motors-api-images.s3.us-east-1.amazonaws.com/191d1b3faf7ab276beaf9939d6e90000-IMG_20221012_091301.jpg"
//       },
//       {
//           key: "dd71d41e5113d44eb874b8c4e9d8548d-IMG_20221012_105712.jpg",
//           url: "https://motors-api-images.s3.us-east-1.amazonaws.com/dd71d41e5113d44eb874b8c4e9d8548d-IMG_20221012_105712.jpg"
//       }
//   ],
//   video: "https://www.youtube.com/watch?v=rm18YmjG0qU",
//   date: "2022-10-18T18:05:27.830Z",
//   __v: 0,
//   description: "motor patinete foston s10 800w 48v 28a"
// }

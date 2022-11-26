import styled from '@emotion/styled';

const CardsContainer = styled.section`
  background-color: transparent;
  display: flex;
  /* min-height: 90vh; */
  flex-wrap: wrap;
  gap: 5vh;
  justify-content: center;
`;

const Card = styled.div`
  background-color: #d9d9d9;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  width: 208px;
  height: 327px;
  border-radius: 10px;
`;

const Image = styled.input`
  background-color: transparent;
  width: 187px;
  height: 151px;
  border-radius: 6px;
  cursor: pointer;
`;

const Text = styled.p`
  background-color: transparent;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  cursor: pointer;
`;

export { CardsContainer, Card, Image, Text };

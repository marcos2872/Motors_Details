import styled from '@emotion/styled';

const Container = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  width: 700px;
  gap: 5vh;
  align-self: start;
`;

const CardsContainer = styled.ul`
  background-color: transparent;
  display: flex;
  flex-wrap: wrap;
  width: 700px;
  gap: 5vh;
  align-self: start;
`;

const SectionTitle = styled.section`
  background-color: transparent;
  height: auto;
  align-self: center;
  text-align: center;
  margin-top: 2%;
  margin-bottom: 2%;
`;

const Title = styled.h1`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
`;

const Card = styled.li`
  background-color: #d9d9d9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
  text-align: center;
  width: 320px;
  height: 330px;
  border-radius: 10px;
  box-shadow: 5px 5px 10px gray;
  :hover {
    scale: 1.05;
    transition-duration: 300ms;
  }
`;

const Image = styled.input`
  background-color: transparent;
  width: 100%;
  height: 250px;
  border-radius: 6px;
  cursor: pointer;
`;

const Text = styled.p`
  background-color: transparent;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 24px;
  cursor: pointer;
`;

export { Container, CardsContainer, Card, Image, Text, SectionTitle, Title };

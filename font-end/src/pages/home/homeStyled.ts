import styled from '@emotion/styled';

const Body = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-items: center;
  min-height: 100vh;
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
const Container = styled.div`
  display: flex;
`;

const Data = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-items: center;
  padding-top: 75px;
  padding-bottom: 75px;
  width: 100%;
`;

export { Body, Title, SectionTitle, Container, Data };

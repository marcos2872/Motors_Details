import styled from '@emotion/styled';

const Body = styled.body`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-items: center;
  min-height: 100vh;
  min-width: 100vh;
  border: 1px solid red;
`;

const SectionTitle = styled.section`
  background-color: transparent;
  min-width: 100vh;
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

export { Body, Title, SectionTitle };

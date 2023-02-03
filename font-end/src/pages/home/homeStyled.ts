import styled from '@emotion/styled';

const Body = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
`;
const Container = styled.div`
  display: flex;
  width: 90%;
  min-height: 55vh;
  justify-content: space-evenly;
  padding-top: 75px;
  padding-bottom: 75px;
`;

const Data = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
`;

export { Body, Container, Data };

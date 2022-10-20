import styled from '@emotion/styled';

const Head = styled.head`
  background-color: #e5de97;
  display: flex;
  align-items: center;
  min-width: 100vh;
  height: 73px;
  padding-left: 4vh;
  padding-right: 4vh;
  gap: 145px;
`;

const Logo = styled.input`
  background-color: transparent;
  width: 50px;
  height: 50px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const Input = styled.input`
  background: #efefef;
  width: 926px;
  height: 33px;
  border-radius: 7px;
  border: #efefef;
  position: relative;
  padding-left: 1%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const IconBusca = styled.img`
  background-color: transparent;
  width: 27px;
  height: 27px;
  position: absolute;
  top: 23px;
  right: 225px;
  z-index: 10;
  border: none;
  outline: none;
`;

const Menu = styled.input`
  background-color: transparent;
  width: 39px;
  height: 30px;
`;

export { Head, Logo, Input, IconBusca, Menu };
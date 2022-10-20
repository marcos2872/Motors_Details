import styled from '@emotion/styled';

const Head = styled.head`
  background-color: #e5de97;
  display: flex;
  align-items: center;
  height: 73px;
  gap: 10%;
`;

const Logo = styled.input`
  background-color: transparent;
  width: 50px;
  height: 50px;
  margin-left: 2%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const Input = styled.input`
  background: #efefef;
  width: 70%;
  height: 33px;
  border-radius: 7px;
  border: none;
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
  margin-right: 2.5%;
`;

export { Head, Logo, Input, IconBusca, Menu };

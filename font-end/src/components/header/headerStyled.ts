import styled from '@emotion/styled';
import { AiOutlineMenu } from 'react-icons/ai';
import devices from '../../styles/devices';

const Head = styled.div`
  background-color: #e5de97;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 73px;
  gap: 10%;
  position: relative;
  top: 0;
  width: 100%;
`;

const Logo = styled.input`
  background-color: transparent;
  width: 50px;
  height: 50px;
  margin-left: 10px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  position: absolute;
  left: 0;
`;

const Input = styled.input`
  background: #efefef;
  width: 700px;
  height: 33px;
  border-radius: 7px;
  border: none;
  outline: 0;
  padding-left: 1%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  @media ${devices.laptop} {
    width: 60%;
  }

  @media ${devices.mobileL} {
    width: 150px;
  }

  @media ${devices.mobileS} {
    width: 150px;
  }
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

const Menu = styled(AiOutlineMenu)`
  display: none;

  @media ${devices.laptop} {
    display: flex;
    background-color: transparent;
    width: 39px;
    height: 30px;
    margin-right: 2.5%;
    position: absolute;
    right: 0;
  }
`;

export { Head, Logo, Input, IconBusca, Menu };

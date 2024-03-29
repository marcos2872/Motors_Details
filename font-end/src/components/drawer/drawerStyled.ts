import styled from 'styled-components';

import devices from '../../styles/devices';

type drawerType = {
  drawer: boolean;
  local: string;
};

export const MenuContainer = styled.nav`
  background-color: transparent;
  display: ${(props: drawerType) => (props.local.includes('motor') ? 'none' : 'flex')};
  flex-direction: column;
  align-items: center;
  width: 400px;
  gap: 5vh;
  height: 400px;

  @media ${devices.laptop} {
    display: ${(props: drawerType) => (props.drawer ? 'flex' : 'none')};
    position: fixed;
    right: 0;
    top: 80px;
    margin-right: 10px;
    background-color: rgba(235, 235, 235, 0.8);
    border-radius: 10px;
    box-shadow: 5px 5px 10px gray;
  }

  @media ${devices.mobileL} {
    width: 300px;
  }
`;

export const SectionTitle = styled.section`
  background-color: transparent;
  height: auto;
  align-self: center;
  text-align: center;
  margin-top: 2%;
  margin-bottom: 2%;
`;

export const Title = styled.h1`
  background-color: transparent;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
`;

export const Container = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.text`
  background-color: transparent;
`;

export const Link = styled.a`
  background-color: transparent;
`;

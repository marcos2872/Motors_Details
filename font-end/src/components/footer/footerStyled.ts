import styled from '@emotion/styled';

const SectioFooter = styled.footer`
  background-color: #d9d9d9;
  display: flex;
  align-items: center;
  height: 50px;
  bottom: 0;
  justify-content: space-between;
  padding-left: 2%;
  padding-right: 5%;
  margin-top: 2%;
  position: fixed;
  bottom: 0;
  width: 95%;
`;

const DivIcons = styled.div`
  background-color: transparent;
  display: flex;
  align-items: center;
  gap: 20px;
  width: auto;
`;

const Icon = styled.img`
  background-color: transparent;
  width: 20px;
  height: 20px;
`;

const Link = styled.a`
  background-color: transparent;
`;

const Text = styled.p`
  background-color: transparent;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  display: flex;
  align-items: center;
  text-align: center;
`;

export { SectioFooter, DivIcons, Icon, Text, Link };

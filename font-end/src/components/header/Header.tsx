import React from 'react';
import { Head, Logo, Input, Menu } from './headerStyled';
import logo from '../../icons/eletrico 1.png';
// import lupa from '../../icons/lupa 1.png';
import menu from '../../icons/menu-aberto 1.png';

function Header() {
  return (
    <Head>
      <Logo type="image" src={logo} />
      <Input placeholder={`    Buscar por modelo`} />
      <Menu type="image" src={menu} />
    </Head>
  );
}

export default Header;

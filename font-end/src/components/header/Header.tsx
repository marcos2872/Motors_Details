import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Head, Logo, Input, Menu } from './headerStyled';
import logo from '../../icons/eletrico 1.png';
import menuI from '../../icons/menu-aberto 1.png';
import { Context } from '../../contexts';

function Header() {
  const navigate = useNavigate();

  const { search, setSearch, setDrawer } = useContext(Context);

  return (
    <Head>
      <Logo type="image" src={logo} onClick={() => navigate('/')} />
      <Input
        placeholder={`    Buscar por modelo`}
        value={search}
        onChange={({ target }) => setSearch(target.value)}
      />
      <Menu type="image" src={menuI} onClick={() => setDrawer((prev: any) => !prev)} />
    </Head>
  );
}

export default Header;
